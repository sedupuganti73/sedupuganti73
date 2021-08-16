package com.nscorp.analytics.model;

import javax.persistence.*;

//import com.sedu.analytics.convertors.CryptoConvertor;

/**
 * @author sedupuganti 
 *
 */

@Entity
@Table(name="DATA_SET_DATASOURCE", schema = "NP_CRM1")
public class DataSource {
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "DATASOURCE_ID", nullable = false)
	@Id
	private long dsId;
	private String name;	
	private String description;
	
	
	@Column(name = "CONNECTION_URL", nullable = false)
	private String url;
	
	@Column(name = "DB_USER")
	private String dbUsername;
	
	//@Convert(converter= CryptoConvertor.class)
	@Column(name = "DB_PASSWORD")
	private String dbPassword;
	
	@Column(name = "DRIVER_CLASS_NAME")
	private String driverClassName;
	
	//@OneToMany(mappedBy = "dataSource", fetch = FetchType.LAZY)
	//private List<Report> reports;

	public long getDsId() {
		return dsId;
	}

	public void setDsId(long dsId) {
		this.dsId = dsId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getDbUsername() {
		return dbUsername;
	}

	public void setDbUsername(String dbUsername) {
		this.dbUsername = dbUsername;
	}

	public String getDbPassword() {
		return dbPassword;
	}

	public void setDbPassword(String dbPassword) {
		this.dbPassword = dbPassword;
	}

	/**
	 * @return the driverClassName
	 */
	public String getDriverClassName() {
		return driverClassName;
	}

	/**
	 * @param driverClassName the driverClassName to set
	 */
	public void setDriverClassName(String driverClassName) {
		this.driverClassName = driverClassName;
	}

	
}
