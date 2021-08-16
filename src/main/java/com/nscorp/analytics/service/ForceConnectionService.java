package com.nscorp.analytics.service;

import com.nscorp.analytics.model.SFDCDataSource;
import com.nscorp.analytics.repositories.ForceConnectionRepository;
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
public class ForceConnectionService { 
	
	@Autowired
	private ForceConnectionRepository fcRepository;
	
	public List<SFDCDataSource> getDataSources() {
		return fcRepository.findAll();
	}
	
	public SFDCDataSource getDataSource(long dsId) { 
		return fcRepository.findOneByDsId(dsId);
	}
	
	public void addDataSource(SFDCDataSource dataSource ) {
		fcRepository.save(dataSource);
	}
	
	public void deleteDataSource(Long dataSourceId) {
		fcRepository.deleteByDsId(dataSourceId);
	}

}
