package com.nscorp.analytics.service;

import com.nscorp.analytics.model.DataSource;
import com.nscorp.analytics.repositories.DSRepository;
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
public class DataSourceService {

	@Autowired
	private DSRepository dsRepository;
	
	public List<DataSource> getDataSources() {
		return dsRepository.findAll();
	}
	
	public DataSource getDataSource(long dsId) { 
		return dsRepository.findOneByDsId(dsId);
	}
	
	public void addDataSource(DataSource dataSource ) {
		dsRepository.save(dataSource);
	}
	
	public void deleteDataSource(Long dataSourceId) {
		dsRepository.deleteByDsId(dataSourceId);
	}
}
