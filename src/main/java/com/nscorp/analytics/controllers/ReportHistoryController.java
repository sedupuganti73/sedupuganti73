/**
 * 
 */
package com.nscorp.analytics.controllers;

import com.nscorp.analytics.model.ReportHistory;
import com.nscorp.analytics.service.ReportHistoryService;
import groovy.util.logging.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author sedupuganti
 *
 */

@Log4j
@RestController
@RequestMapping( "/api/history")
public class ReportHistoryController {
	
	@Autowired
	private ReportHistoryService historyService;
	
	
	@RequestMapping("/{reportId}") 
	public  List<ReportHistory> getReportHistory(@PathVariable("reportId") Long reportId) {
		List<ReportHistory> reportHistoryList = historyService.getHistoryByReport(reportId);
		return reportHistoryList;
	}

}
