package com.nscorp.analytics.service;

import com.nscorp.analytics.model.ReportColumn;
import com.nscorp.analytics.repositories.ColumnRepository;
import groovy.util.logging.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author sedupuganti
 *
 */
@Log4j
@Service
public class ColumnsService {
	@Autowired
	private ColumnRepository columnRepository;
	
	public List<ReportColumn> getColumns(long reportId)  {
		return columnRepository.findByReportId(reportId);
	}
	
	public ReportColumn getColumn(long columnId)  {
		return columnRepository.findOneByColumnId(columnId);
	}
	
	public void addColumn(ReportColumn column) {
		columnRepository.save(column);
	}
	
	public void deleteColumn (Long columnId) {
		columnRepository.deleteByColumnId(columnId);
	}
	
	public void deleteAllColumns(long reportId) {
		columnRepository.deleteByReportId(reportId);		
	}
	
	
}
