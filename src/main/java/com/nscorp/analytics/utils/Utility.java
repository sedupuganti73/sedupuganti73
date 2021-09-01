package com.nscorp.analytics.utils;


import org.codehaus.jettison.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.nscorp.analytics.model.AuthenticationInfo;
import com.nscorp.analytics.model.SFDCDataSource;

/**
 * @author sedupuganti
 *
 */

@Component
public class Utility {
	private static final Logger logger = LoggerFactory.getLogger(Utility.class);
	
	private static final int MAX_RETRIES = 4;
	private static final String ACCESS_TOKEN="access_token";
	private static final String INSTANCE_URL="instance_url";
	@Autowired
	private HttpUtils httpUtils;
	

	@Value("${spring.SFDC.url}")	
    private String sfdcUrl;	
	
	@Value("${spring.SFDC.username}")	 
    private String userName;	
	
	@Value("${spring.SFDC.password}")	
    private String password;
	
	@Value("${spring.SFDC.apiVersion}")
	private String apiVersion;
	
	
	private String clientId;
	private String clientSecret;
	
	
	public AuthenticationInfo getConnection(SFDCDataSource dataSource) throws Exception {
		
		
		return getAuthDetails(dataSource);
	}
	
	
	public AuthenticationInfo getAuthDetails(SFDCDataSource dataSource) throws Exception {
		logger.info("Start : Utility.getAuthDetails", dataSource); 
		AuthenticationInfo authInfo = null;
		for (int i=0; i< MAX_RETRIES; i++ ) {
			try {
				String result = httpUtils.authenticate(dataSource);
				JSONObject json = new JSONObject(result);
				authInfo = new AuthenticationInfo();
				authInfo.setAccessToken((String)json.getString(ACCESS_TOKEN));
				authInfo.setInstanceUrl((String)json.getString(INSTANCE_URL));
				authInfo.setApiUrl(dataSource.getUrl());
				authInfo.setApiVersion(apiVersion);
				System.out.println("Access Token==========>"+ authInfo.getAccessToken());
				System.out.println("Instance Url==========>"+ authInfo.getInstanceUrl());
				System.out.println("API Url==========>"+ authInfo.getApiUrl());
				System.out.println("apiVersion==========>"+ apiVersion);
				break;
			} catch (Exception ce) {
				System.out.println("Exception==========>"+ apiVersion);
				logger.error("Utility.getAuthDetails", ce.getMessage());
			}
		}
		System.out.println("authInfo==========>"+ authInfo);
		if (authInfo == null) {
			throw new Exception("Could not acquire Salesforce connection.Please contact System Administrator!!");
		}
		logger.info("End : Utility.getConntection", sfdcUrl, userName);
		return authInfo;

	}
	
	

}
