/**
 * 
 */
package com.nscorp.analytics.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * @author sedupuganti
 *
 */

@Component 
public class DBConnection {
	
	private static final Logger logger = LoggerFactory.getLogger(DBConnection.class);
	
	private String databaseType;
	private String userName;
	private String password;
	private String driverClassName;
	public String getDatabaseType() {
		return databaseType;
	}
	public void setDatabaseType(String databaseType) {
		this.databaseType = databaseType;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
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
	public Connection getConntection(String url, String userName, String password, String driverClassName) throws SQLException, ClassNotFoundException {
		logger.info("Start : DBConnection.getConntection", url, userName);
		Connection connection = null;
		try {
			if (driverClassName != null &&  driverClassName.trim().length() > 0) {
			    //Class.forName("cs.jdbc.driver.CompositeDriver");
				Class.forName(driverClassName);
			}
		    connection = DriverManager.getConnection(url, userName, password);
		} catch(Exception ex) {
			ex.printStackTrace();
			logger.error("DBConnection.getConntection", ex.getMessage());
		}
		logger.info("End : DBConnection.getConntection", url, userName);
		return connection;
	}
	
	
	public void closeConnection(Connection connection) {
		logger.info("Start : DBConnection.closeConnection");
		if (connection != null) {
			try {
				connection.close();
			} catch (SQLException e) {
				logger.error("DBConnection.getConntection", e.getMessage());
			}
			connection = null;
		}
		logger.info("End : DBConnection.closeConnection");
	}
	
	
	

}
