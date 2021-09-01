package com.nscorp.analytics.controllers;

import java.util.StringTokenizer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nscorp.analytics.model.Report;
import com.nscorp.analytics.service.DataLoadService;
import com.nscorp.analytics.service.ReportsService;

import groovy.util.logging.Log4j;


/**
 * @author sedupuganti
 *
 */

@Log4j
@RestController
@RequestMapping( "/api/load")
public class LoadController {
	private static final Logger logger = LoggerFactory.getLogger(LoadController.class);
	private static final String COMMA_STR =",";
		
	@Autowired
	private DataLoadService dataLoadService;
	
	@Autowired
	private ReportsService reportService;
	
		
	@RequestMapping( "/")
    public void runAllReports() {
 		 dataLoadService.loadData();
    }
	
	@RequestMapping("/{reportId}") 
	public void runReport(@PathVariable("reportId") Long reportId) {
		dataLoadService.loadData(reportService.getReport(reportId));
	}
	
	
	@PostMapping(path = "/")
	public int runReport(@RequestBody String reportNames) {
		logger.info("Start : LoadController.runReport");
		System.out.println("reportNames:::"+reportNames);
		int status = 200;
    	if (reportNames != null && reportNames.trim().length() > 0) {
			StringTokenizer str = new StringTokenizer(reportNames,COMMA_STR);
			String reportName = null;
			
			 while (str.hasMoreTokens()) {
				 reportName = str.nextToken();
				 if (reportName != null && reportName.trim().length() > 0) {
					 Report currentReport =reportService.getReport(reportName);
					 System.out.println("currentReport Name:::"+currentReport.getName());
					 
					 if (currentReport != null) {
					     dataLoadService.loadData(currentReport); 
						
					 } 
				 }
			 }
				 
			 
			
		}
		
		logger.info("End : LoadController.runReport"); 
		return status;
	}
	
	

}
