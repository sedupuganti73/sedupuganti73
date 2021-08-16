package com.nscorp.analytics.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nscorp.analytics.model.AuthenticationInfo;
import com.nscorp.analytics.model.Report;
import com.nscorp.analytics.model.ReportColumn;
import com.nscorp.analytics.exceptions.DuplicateColumnException;
import com.nscorp.analytics.model.*;
import com.nscorp.analytics.utils.DBConnection;
import com.nscorp.analytics.utils.ReportData;
import com.nscorp.analytics.utils.Utility;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Set;

/**
 * @author sedupuganti
 *
 */

@Service
public class DataLoadService {
	private static final Logger logger = LoggerFactory.getLogger(DataLoadService.class);
	@Value("${spring.data.path}")
	private  String FOLDER_PATH;

	
	@Value("${spring.data.write-file}")
	private  String writeFile;
	
	@Autowired
	private DBConnection connection;
	
	@Autowired
	private ReportsService reportsService;
	
		
	@Autowired
	private ColumnsService columnsService;
	
	@Autowired
	private ReportData reportData;
	
	@Autowired
	private Utility connectionUtility;
	

	
	public Set<ReportColumn>  getColumns(Report report) throws ClassNotFoundException, SQLException, DuplicateColumnException  {
		logger.info("Start : DataLoadService.getColumns");
		Connection  dbConnection = null;
		Set<ReportColumn> columns = null;
		DataSource datasource = report.getDataSource();
		try {
			dbConnection =connection.getConntection(datasource.getUrl(), datasource.getDbUsername(), datasource.getDbPassword(),datasource.getDriverClassName());
			columns = reportData.getColumns(dbConnection, report); 	
		} catch (Exception e) {
			logger.error("DataLoadService.getColumns", e.getMessage());
		} finally {
			connection.closeConnection(dbConnection);
		}
		logger.info("End : DataLoadService.getColumns"); 
		return columns;
	}
	
	
	public void  loadData()  {
		logger.info("Start : DataLoadService.loadData");
		List<Report> reportList =reportsService.getReports();
		if (reportList != null && reportList.size() > 0) {
			for (Report report : reportList) {
				loadData(report);
			}
		}
		logger.info("End : DataLoadService.loadData");
	}
	
	public AuthenticationInfo loadData(Report report) {
		logger.info("Start : DataLoadService.loadData(report)");
		List<ReportColumn> reportColumnList = null;
		Connection  dbConnection = null;
		String reportdfolderPath = null;
		DateFormat df = new SimpleDateFormat("E, dd MMM yyyy HH:mm:ss"); 
		AuthenticationInfo authInfo = null;
		try {
			DataSource datasource = report.getDataSource();
			SFDCDataSource sfdcDataSource = report.getSfdcDataSource();
			reportColumnList = columnsService.getColumns(report.getReportId());
			logger.debug(report.getName() +"Start Time:: "+ df.format(Calendar.getInstance().getTime()));
			if (writeFile == null || "true".equalsIgnoreCase(writeFile)) {
			    reportdfolderPath =createReportFolder(report.getName(),FOLDER_PATH);
			}
			dbConnection =connection.getConntection(datasource.getUrl(), datasource.getDbUsername(), datasource.getDbPassword(),datasource.getDriverClassName());
			authInfo = connectionUtility.getAuthDetails(sfdcDataSource);
			reportData.extractData(dbConnection,authInfo, report,reportdfolderPath,reportColumnList);
			//loadData.processLoad(reportdfolderPath, reportColumnList, report);
			logger.debug(report.getName() +"End Time:: "+ df.format(Calendar.getInstance().getTime()));
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("DataLoadService.loadData(report)", e.getMessage());
		} finally {
			connection.closeConnection(dbConnection);
		}
		logger.info("End : DataLoadService.loadData(report)");
		return authInfo;
	}

	
	private  boolean isJSONValid(String jsonInString ) {
		logger.info("Start : DataLoadService.isJSONValid");
		boolean isValid = false;
	    try {
	       final ObjectMapper mapper = new ObjectMapper();
	       mapper.readTree(jsonInString);
	       isValid =true;
	    } catch (IOException e) {
	       e.printStackTrace();
	    }
	    logger.info("End : DataLoadService.isJSONValid");  
	    return isValid;
	  }
	
	
	
	private String createReportFolder(String reportName, String filePath) {
		logger.info("Start : DataLoadService.createReportFolder");
		String folderAbsolutePath =null;
		Date today = Calendar.getInstance().getTime();
		DateFormat df = new SimpleDateFormat("yyyyy-mm-dd");
		StringBuilder reportFolderBuilder = new StringBuilder();
		reportFolderBuilder.append(reportName);
		reportFolderBuilder.append("-");
		reportFolderBuilder.append(df.format(today));
		File reportFolder= new File(filePath, reportFolderBuilder.toString()); 
		if (!reportFolder.exists()) {
			reportFolder.mkdirs();
		}
		folderAbsolutePath = reportFolder.getAbsolutePath();
		reportFolder = null;
		logger.info("End : DataLoadService.createReportFolder");
		return folderAbsolutePath;
	}

}
