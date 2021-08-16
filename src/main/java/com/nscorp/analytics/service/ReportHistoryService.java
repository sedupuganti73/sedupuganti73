package com.nscorp.analytics.service;

import com.nscorp.analytics.model.ReportHistory;
import com.nscorp.analytics.repositories.ReportHistoryRepository;
import groovy.util.logging.Log4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author sedupuganti
 *
 */
@Log4j
@Service
public class ReportHistoryService { 
	private static final Logger logger = LoggerFactory.getLogger(ReportHistoryService.class);
	
	@Autowired
	private ReportHistoryRepository reportHistoryRepository;
	
	public List<ReportHistory> getReportHistories()  {
		return reportHistoryRepository.findAll();
	}
	
	public ReportHistory getReportHistory(Long reportHistoryId)  {
		return reportHistoryRepository.findOneByHistoryId(reportHistoryId);
	}
	
	
	public List<ReportHistory> getHistoryByReport(Long reportId)  {
		return reportHistoryRepository.findByReportId(reportId);
	}
	
	
	public ReportHistory saveReportHistory(ReportHistory reportHistory) throws Exception {
		logger.info("Start : ReportHistoryService.addReport");
		
		reportHistory = reportHistoryRepository.save(reportHistory);
			
		logger.info("End : ReportHistoryService.addReport");
		return reportHistory;
	}
}
