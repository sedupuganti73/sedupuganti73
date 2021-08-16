/**
 * 
 */
package com.nscorp.analytics.model;

/**
 * @author sedupuganti
 *
 */
public class AuthenticationInfo {
	
	private String apiUrl;
	private String accessToken;
	private String instanceUrl;
	private String apiVersion;
	/**
	 * @return the apiUrl
	 */
	public String getApiUrl() {
		return apiUrl;
	}
	/**
	 * @param apiUrl the apiUrl to set
	 */
	public void setApiUrl(String apiUrl) {
		this.apiUrl = apiUrl;
	}
	/**
	 * @return the accessToken
	 */
	public String getAccessToken() {
		return accessToken;
	}
	/**
	 * @param accessToken the accessToken to set
	 */
	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}
	/**
	 * @return the instanceUrl
	 */
	public String getInstanceUrl() {
		return instanceUrl;
	}
	/**
	 * @param instanceUrl the instanceUrl to set
	 */
	public void setInstanceUrl(String instanceUrl) {
		this.instanceUrl = instanceUrl;
	}
	
	public boolean isUrlsSame() {
		boolean isSame = false;
		if (!this.apiUrl.trim().isEmpty() && !this.instanceUrl.trim().isEmpty() ) {//update the code for Java 8 Compatibility
			String currentApiURL = this.apiUrl;
			currentApiURL = currentApiURL.substring(0,(currentApiURL.lastIndexOf("/")));
			if (currentApiURL.equalsIgnoreCase(this.instanceUrl)) {
				isSame = true;
			}
		}
		
		return isSame;
	}
	/**
	 * @return the apiVersion
	 */
	public String getApiVersion() {
		return apiVersion;
	}
	/**
	 * @param apiVersion the apiVersion to set
	 */
	public void setApiVersion(String apiVersion) {
		this.apiVersion = apiVersion;
	}

}
