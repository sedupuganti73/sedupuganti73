package com.nscorp.analytics.service;

import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.CompletableFuture;

import org.apache.http.ParseException;
import org.apache.http.client.ClientProtocolException;
import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.JsonParseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nscorp.analytics.exceptions.DuplicateColumnException;
import com.nscorp.analytics.model.AuthenticationInfo;
import com.nscorp.analytics.model.DataFlows;
import com.nscorp.analytics.model.DataSource;
import com.nscorp.analytics.model.Dataflow;
import com.nscorp.analytics.model.DataflowContainer;
import com.nscorp.analytics.model.DataflowJob;
import com.nscorp.analytics.model.DataflowJobInputRepresentationInfo;
import com.nscorp.analytics.model.Report;
import com.nscorp.analytics.model.ReportColumn;
import com.nscorp.analytics.model.SFDCDataSource;
import com.nscorp.analytics.utils.DBConnection;
import com.nscorp.analytics.utils.HttpUtils;
import com.nscorp.analytics.utils.ReportData;
import com.nscorp.analytics.utils.Utility;

/**
 * @author sedupuganti
 *
 */

@Service
public class DataLoadService {
	private static final Logger logger = LoggerFactory.getLogger(DataLoadService.class);
	private static final String SUCCESS ="Success"; 
	private static final String WARNING ="Warning";
	private static final String FAILURE ="Failure";
	
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
	
	@Autowired
	private HttpUtils httpUitls;
	

	
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
	
	public void loadData(Report report) {
		logger.info("Start : DataLoadService.loadData(report)");
		List<ReportColumn> reportColumnList = null;
		Connection  dbConnection = null;
		String reportdfolderPath = null;
		DateFormat df = new SimpleDateFormat("E, dd MMM yyyy HH:mm:ss"); 
		try {
			DataSource datasource = report.getDataSource();
			SFDCDataSource sfdcDataSource = report.getSfdcDataSource();
			reportColumnList = columnsService.getColumns(report.getReportId());
			logger.debug(report.getName() +"Start Time:: "+ df.format(Calendar.getInstance().getTime()));
			if (writeFile == null || "true".equalsIgnoreCase(writeFile)) {
			    reportdfolderPath =createReportFolder(report.getName(),FOLDER_PATH);
			}
			dbConnection =connection.getConntection(datasource.getUrl(), datasource.getDbUsername(), datasource.getDbPassword(),datasource.getDriverClassName());
			AuthenticationInfo authInfo = connectionUtility.getAuthDetails(sfdcDataSource);
			reportData.extractData(dbConnection,authInfo, report,reportdfolderPath,reportColumnList);
			//loadData.processLoad(reportdfolderPath, reportColumnList, report);
			 if (report.getFlowName() != null && report.getFlowName().trim().length() > 0) {
				 CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
					    return checkAndExecuteFlow(report,authInfo);
					});
			 }
			logger.debug(report.getName() +"End Time:: "+ df.format(Calendar.getInstance().getTime()));
			
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("DataLoadService.loadData(report)", e.getMessage());
		} finally {
			connection.closeConnection(dbConnection);
		}
		logger.info("End : DataLoadService.loadData(report)");
		
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
	
	private String checkAndExecuteFlow( Report currentReport,AuthenticationInfo authInfo)  {
		int status = 200;
		try {
			Map<String,DataflowJob> flowMap = getReportDataFlowJobs(authInfo,currentReport);
			if (flowMap != null) {
				 DataflowJob flowJob =flowMap.get(currentReport.getName());
				 int successCode = isDataLoadComplete(flowJob,authInfo);
				 System.out.println("Loading Success Code:::"+successCode);
				 if (successCode == 0) {
					 Dataflow dataFlowDetails = getDataFlowDetails(authInfo,currentReport.getFlowName());
					 executeDataFlow(dataFlowDetails,authInfo);
				 }
			}
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("DataLoadService.loadData(report)", e.getMessage());
			status = 404;
		} 
		return String.valueOf(status);
	}
	
	private Dataflow getDataFlowDetails(AuthenticationInfo authInfo, String dataFlowName) throws ClientProtocolException, IOException {
		Dataflow dataFlowDetails = null;
		String jobsUrl = "/data/{version}/wave/dataflows?q="+ dataFlowName;
		String data =httpUitls.getData(jobsUrl,authInfo);
		ObjectMapper mapper = new ObjectMapper();
		DataFlows dataflow =mapper.readValue(data, DataFlows.class); 
        if (dataflow != null && dataflow.getDataflows() != null && dataflow.getDataflows().size() > 0) {
        	dataFlowDetails = dataflow.getDataflows().get(0);
        }
		return dataFlowDetails;
	}
	
	private void executeDataFlow(Dataflow dataFlowDetails,AuthenticationInfo authInfo) throws JsonGenerationException, JsonMappingException, IOException, ParseException, InterruptedException, java.text.ParseException {
		String jobsUrl = "/data/{version}/wave/dataflowjobs";
		ObjectMapper mapper = new ObjectMapper();
		DataflowJobInputRepresentationInfo dataflowJob = new DataflowJobInputRepresentationInfo();
		 dataflowJob.setCommand("Start");
		 dataflowJob.setDataflowId(dataFlowDetails.getId());
		 String dataflowJson = mapper.writeValueAsString(dataflowJob);
		 String response = httpUitls.postData(authInfo,jobsUrl,dataflowJson,false);
	}
	
	private int isDataLoadComplete(DataflowJob flowJob,AuthenticationInfo authInfo) throws ClientProtocolException, IOException, InterruptedException {
		int successCode = -1;
		if (flowJob != null && flowJob.getId() != null) {
			String jobsUrl = "/data/{version}/wave/dataflowjobs/"+flowJob.getId();
			ObjectMapper mapper = new ObjectMapper();
			DataflowJob job = null;
			for(int i=0 ; i < 35; i++) {
				Thread.sleep(60*1000*5);
				String data =httpUitls.getData(jobsUrl,authInfo);
				job =mapper.readValue(data, DataflowJob.class); 
				if (SUCCESS.equalsIgnoreCase(job.getStatus())||WARNING.equalsIgnoreCase(job.getStatus())) {
					successCode = 0;
					break;
				} else if (FAILURE.equalsIgnoreCase(job.getStatus())) {
					successCode = -1;
					break;
				}
			}
		} else  {
			// this is smaller data set, kicking of the flow
			successCode = 0;
		}
		
		return successCode;
	}
	
	private Map<String,DataflowJob> getReportDataFlowJobs(AuthenticationInfo authInfo,Report currentReport) throws ClientProtocolException, IOException, ParseException, InterruptedException, java.text.ParseException {
		String jobsUrl = "/data/{version}/wave/dataflowjobs";
		String data =httpUitls.getData(jobsUrl,authInfo);
		Map<String,DataflowJob> flowMap = null;
		if (data != null) {
			flowMap =getReportDataflowJobDetails(data,currentReport);
			
		}
		return flowMap;
	}
	
		
	private Map<String,DataflowJob>  getReportDataflowJobDetails(String data,Report currentReport) throws ParseException, InterruptedException, java.text.ParseException, JsonParseException, JsonMappingException, IOException {
		 ObjectMapper mapper = new ObjectMapper();
		    Map<String,DataflowJob> flowMap = new HashMap<String,DataflowJob>();
		    DataflowContainer dataflow =mapper.readValue(data, DataflowContainer.class); 
		    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		    if (dataflow != null) {
		    	Date jobDate = null;
		    	Date today = dateFormat.parse(dateFormat.format(Calendar.getInstance().getTime()));
		    	for (DataflowJob job : dataflow.getDataflowJobs()) {
		    		if (job.getDataflow() != null) {
		    			System.out.println(job.getDataflow().getName());
		    		}
		    		if ("dataflowjob".equalsIgnoreCase(job.getType())) {
		    			jobDate = dateFormat.parse(job.getCreatedDate());
		    			if (job.getLabel().startsWith(currentReport.getName()) && jobDate.compareTo(today) == 0 && ("Queued".equalsIgnoreCase(job.getStatus()) || "Running".equalsIgnoreCase(job.getStatus()))) {
			    			if (!flowMap.containsKey(currentReport.getName())) {
		    				    flowMap.put(currentReport.getName(), job);
			    			}
			    		} else if (job.getDataflow() != null && job.getDataflow().getName().equals(currentReport.getFlowName())) {
			    			System.out.println(job.getDataflow().getId());
			    			if (!flowMap.containsKey(currentReport.getFlowName())) {
			    			    flowMap.put(currentReport.getFlowName(), job);
			    			}
			    		}
		    		}
		           
		    		
		    	}
		    }
		    return flowMap;
	}

}
