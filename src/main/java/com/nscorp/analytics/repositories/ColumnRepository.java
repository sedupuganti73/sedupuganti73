package com.nscorp.analytics.repositories;

import com.nscorp.analytics.model.ReportColumn;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @author sedupuganti
 *
 */
public interface ColumnRepository extends JpaRepository<ReportColumn, Long>{
	List<ReportColumn> findByReportId(long reportId);
	void deleteByReportId(long reportId);
	ReportColumn findOneByColumnId(long columnId);
	Long deleteByColumnId(long columnId);
}
