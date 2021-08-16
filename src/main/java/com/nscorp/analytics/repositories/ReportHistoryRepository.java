package com.nscorp.analytics.repositories;

import com.nscorp.analytics.model.ReportHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @author sedupuganti
 *
 */
public interface ReportHistoryRepository extends JpaRepository<ReportHistory, Long> { 
	List<ReportHistory> findByReportId(long reportId);
	void deleteByReportId(long reportId);
	ReportHistory findOneByHistoryId(long historyId);

}
