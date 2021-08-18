package com.nscorp.analytics.utils;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.HttpHeaders;
import org.apache.http.ParseException;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPatch;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.message.BasicHeader;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.nscorp.analytics.model.AuthenticationInfo;
import com.nscorp.analytics.model.SFDCDataSource;

/**
 * @author sedupuganti
 *
 */

@Component
public class HttpUtils {
	private static final Logger logger = LoggerFactory.getLogger(HttpUtils.class); 
	
	public String authenticate(SFDCDataSource dataSource) throws Exception {
		logger.info("Start : HttpUtils.getAuthDetails", dataSource); 
		String result = null;
		CloseableHttpClient httpClient = HttpClientBuilder.create().build(); 
		String authenticateUrl = dataSource.getUrl() + "/oauth2/token";
		HttpPost postRequest = new HttpPost(authenticateUrl);
		postRequest.addHeader(getHeader(HttpHeaders.CONTENT_TYPE,"application/x-www-form-urlencoded"));
		List<BasicNameValuePair> urlParameters = new ArrayList<>();
        urlParameters.add(new BasicNameValuePair("grant_type", "password"));
        urlParameters.add(new BasicNameValuePair("username", dataSource.getUsername()));
        urlParameters.add(new BasicNameValuePair("password",dataSource.getPassword()));
        urlParameters.add(new BasicNameValuePair("client_id", dataSource.getClientId()));
        urlParameters.add(new BasicNameValuePair("client_secret", dataSource.getClientSecret()));
        postRequest.setEntity(new UrlEncodedFormEntity(urlParameters));
        CloseableHttpResponse response;
        try {
	        response = httpClient.execute(postRequest);
	        result = EntityUtils.toString(response.getEntity());
	        System.out.println("result----->"+ result);
	        int statusCode = response.getStatusLine().getStatusCode();
	        System.out.println("statusCode----->"+ statusCode);
	        if (statusCode > 299) {
	        	throw new Exception("Authentication Failed!!.") ;
	        }
	        
        } catch (Exception ex) {
        	logger.error("HttpUtils.authenticate", ex.getMessage());
        	throw new Exception(ex.getMessage()) ;
        } finally {
        	httpClient = null;
        	response = null;
        	postRequest = null;
        }
        logger.info("End : HttpUtils.authenticate", dataSource);
        return result;
	}
	
	

	
	
	public  String getData(String partialUrl, AuthenticationInfo authInfo) throws ClientProtocolException, IOException  {
		logger.info("Start : HttpUtils.getData", partialUrl,authInfo); 
		CloseableHttpClient httpClient = HttpClientBuilder.create().build();
		HttpGet request = new HttpGet(buildOperationUrl(authInfo,partialUrl));
	    List<Header> headerList = getHeaders(authInfo,true);
	    if (!authInfo.isUrlsSame()) {
	    	headerList.add(getHeader("instance_url",authInfo.getInstanceUrl()));
	    }
	    request.setHeaders(headerList.toArray(new Header[headerList.size()]));
	    CloseableHttpResponse response= httpClient.execute(request);
	    HttpEntity entity =response.getEntity();
	    String data =  EntityUtils.toString(entity, "UTF-8").trim();
	    logger.info("End : HttpUtils.getData",data);
	    return data;
	}
	
	public String postData(AuthenticationInfo authInfo,String partialUrl,String jsonData) throws ParseException, IOException, InterruptedException, java.text.ParseException {
		return postData(authInfo,partialUrl,jsonData,true);
	}
	public String postData(AuthenticationInfo authInfo,String partialUrl,String jsonData, boolean addContentEncoding) throws ParseException, IOException, InterruptedException, java.text.ParseException {
		logger.info("Start : HttpUtils.postData", partialUrl,authInfo,jsonData); 
		CloseableHttpClient httpClient = HttpClientBuilder.create().build(); 
		StringEntity params = new StringEntity(jsonData,ContentType.APPLICATION_JSON); 
		HttpPost request = new HttpPost(buildOperationUrl(authInfo,partialUrl));
	    List<Header> headerList = getHeaders(authInfo,addContentEncoding);
	    request.setHeaders(headerList.toArray(new Header[headerList.size()]));
	    request.setEntity(params);
	    CloseableHttpResponse response= httpClient.execute(request);
	    HttpEntity entity =response.getEntity();
	    String data = EntityUtils.toString(entity, "UTF-8").trim();
	    logger.info("End : HttpUtils.postData", data);
	    return data;
	}
	
	public void  patchData(AuthenticationInfo authInfo,String partialUrl,String jsonData, boolean addContentEncoding) throws Exception  {
		logger.info("Start : HttpUtils.patchData", partialUrl,authInfo,jsonData); 
		CloseableHttpClient httpClient = HttpClientBuilder.create().build(); 
		StringEntity params = new StringEntity(jsonData,ContentType.APPLICATION_JSON); 
		HttpPatch request = new HttpPatch(buildOperationUrl(authInfo,partialUrl));
		List<Header> headerList = getHeaders(authInfo,addContentEncoding);
	    request.setHeaders(headerList.toArray(new Header[headerList.size()]));
	    request.setEntity(params);
	    CloseableHttpResponse response= httpClient.execute(request);
	    if (response.getStatusLine().getStatusCode() > 299) {
	    	throw new Exception(response.getStatusLine().getReasonPhrase());
	    }
	   logger.info("End : HttpUtils.getData",response.getStatusLine());
		
	}
	
	private List<Header> getHeaders(AuthenticationInfo authInfo, boolean addContentEncoding) {
		logger.info("Start : HttpUtils.getHeaders", authInfo); 
		List<Header> headerList = new ArrayList<Header>();
	    headerList.add(getHeader(HttpHeaders.CONTENT_TYPE,"application/json"));
	    if (addContentEncoding) {
	        headerList.add(getHeader(HttpHeaders.CONTENT_ENCODING,"gzip"));
	    }
	    if (!authInfo.isUrlsSame()) {
	    	headerList.add(getHeader("instance_url",authInfo.getInstanceUrl()));
	    	headerList.add(getHeader("Authorization", authInfo.getAccessToken()));
	    } else {
	    	headerList.add(getHeader("Authorization", "OAuth " + authInfo.getAccessToken()));
	    }
	    headerList.add(getHeader(HttpHeaders.CACHE_CONTROL,"no-cache, must-revalidate, max-age=0, no-store, private"));
	    headerList.add(getHeader(HttpHeaders.CONNECTION,"Keep-Alive"));
	    logger.info("End : HttpUtils.getHeaders");
	    return headerList;
	}
	
	private static Header getHeader(String name, String value) {
		return new BasicHeader(name, value);
	}
	
	private String buildOperationUrl(AuthenticationInfo authInfo, String partialUrl) {
		logger.info("Start : HttpUtils.buildOperationUrl", authInfo,partialUrl); 
		StringBuffer strBuff = new StringBuffer(authInfo.getApiUrl());
		strBuff.append(partialUrl.replace("{version}", authInfo.getApiVersion()));
		logger.info("End : HttpUtils.buildOperationUrl",strBuff.toString());
		return strBuff.toString();
	}

}
