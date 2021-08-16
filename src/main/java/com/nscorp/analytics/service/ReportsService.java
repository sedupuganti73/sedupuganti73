package com.nscorp.analytics.service;

import com.nscorp.analytics.exceptions.DuplicateColumnException;
import com.nscorp.analytics.model.Report;
import com.nscorp.analytics.model.ReportColumn;
import com.nscorp.analytics.repositories.ColumnRepository;
import com.nscorp.analytics.repositories.ReportHistoryRepository;
import com.nscorp.analytics.repositories.ReportRepository;
import groovy.util.logging.Log4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.SQLException;
import java.util.List;
import java.util.Set;

/**
 * @author sedupuganti
 *
 */

@Log4j
@Service
public class ReportsService { 
	private static final Logger logger = LoggerFactory.getLogger(ReportsService.class);
	
	@Autowired
	private ReportRepository reportRepository;
	
	@Autowired
	private DataLoadService dataService;

	@Autowired
	private ColumnRepository columnRepository;
	
	@Autowired
	private ReportHistoryRepository reportHistoryRepository;
	
	public List<Report> getReports()  {
		return reportRepository.findAll();
	}
	
	
	public Report getReport(String reportName)  {
		return reportRepository.findReportByName(reportName);
	}
	
	public Report getReport(Long reportId)  {
		return reportRepository.findOneByReportId(reportId);
	}
	
	public List<Report> getReports(Integer runTime)  {
		return reportRepository.findReportsToRun(runTime);
	}
	
	public void updateReport(Report report) throws DuplicateColumnException {
		reportRepository.save(report);
	}
	
	
	public void addReport(Report report) throws DuplicateColumnException {
		logger.info("Start : ReportService.addReport");
		Report currentReport = null;
		try {
			if (report.getReportId() != 0L) {
				currentReport = getReport(report.getReportId());
				report = reportRepository.save(report);
				if (!currentReport.getQuery().equalsIgnoreCase(report.getQuery())) {
					columnRepository.deleteByReportId(report.getReportId());
					Set<ReportColumn> columns = dataService.getColumns(report);
					columns.forEach((column)->columnRepository.save(column));
				}
			} else  {
				report = reportRepository.save(report);
				Set<ReportColumn> columns = dataService.getColumns(report);
				columns.forEach((column)->columnRepository.save(column));
			}
			
		} catch(SQLException se) {
			logger.error("ReportService.addReport", se.getMessage());
			if(report.getReportId()!=0L) {
				deleteReport(report.getReportId());
			}
			
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			logger.error("ReportService.addReport", e.getMessage());
		}
		logger.info("End : ReportService.addReport");
	}
	
	@Transactional
	public void deleteReport (Long reportId) {
		logger.info("Start : ReportService.deleteReport");
		
		
		columnRepository.deleteByReportId(reportId);
		reportHistoryRepository.deleteByReportId(reportId);
		reportRepository.deleteByReportId(reportId);
		logger.info("End : ReportService.deleteReport");
	}
}
