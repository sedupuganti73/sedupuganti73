package com.nscorp.analytics.model;

import javax.persistence.*;

/**
 * @author sedupuganti
 *
 */
@Entity
@Table(name="SFDC_DATA_SET_DATASOURCE", schema = "NP_CRM1")
public class SFDCDataSource {
	
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "DATASOURCE_ID", nullable = false)
	@Id
	private long dsId;
	private String name;	
	private String description;
	
	@Column(name = "URL", nullable = false)
	private String url;
	
	@Column(name = "USER_NAME")
	private String username;

	@Column(name = "PASSWORD")
	private String password;
	
	@Column(name = "CLIENT_ID")
	private String clientId;
	
	@Column(name = "CLIENT_SECRET")
	private String clientSecret;

	/**
	 * @return the dsId
	 */
	public long getDsId() {
		return dsId;
	}

	/**
	 * @param dsId the dsId to set
	 */
	public void setDsId(long dsId) {
		this.dsId = dsId;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * @param description the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * @return the url
	 */
	public String getUrl() {
		return url;
	}

	/**
	 * @param url the url to set
	 */
	public void setUrl(String url) {
		this.url = url;
	}

	/**
	 * @return the username
	 */
	public String getUsername() {
		return username;
	}

	/**
	 * @param username the username to set
	 */
	public void setUsername(String username) {
		this.username = username;
	}

	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * @return the clientId
	 */
	public String getClientId() {
		return clientId;
	}

	/**
	 * @param clientId the clientId to set
	 */
	public void setClientId(String clientId) {
		this.clientId = clientId;
	}

	/**
	 * @return the clientSecret
	 */
	public String getClientSecret() {
		return clientSecret;
	}

	/**
	 * @param clientSecret the clientSecret to set
	 */
	public void setClientSecret(String clientSecret) {
		this.clientSecret = clientSecret;
	}

	
	
	

}
