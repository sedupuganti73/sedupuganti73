/**
 * 
 */
package com.nscorp.analytics.controllers;

import com.nscorp.analytics.model.AuthenticationInfo;
import com.nscorp.analytics.model.SFDCDataSource;
import com.nscorp.analytics.service.ForceConnectionService;
import com.nscorp.analytics.utils.Utility;
import groovy.util.logging.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author sedupuganti
 *
 */
@Log4j
@RestController
@RequestMapping( "/api/forceDs")
public class SFDCController {
	
	@Autowired
	private ForceConnectionService forceService;
	
	
	@Autowired
	private Utility utility;
	
	@RequestMapping( "/")
    public List<SFDCDataSource> getDataSources() {
 		return forceService.getDataSources();
    }
	
	@RequestMapping( "/{dsId}")
    public SFDCDataSource getDataSource(
    			@PathVariable("dsId") Long dataSourceId
    		) {
 		return forceService.getDataSource(dataSourceId);
    }
 	
 	
 	@RequestMapping( value = "/", method = RequestMethod.POST)
    public SFDCDataSource addReport(
    			@RequestBody SFDCDataSource dataSource
    		) throws Exception{
 		
 		AuthenticationInfo authInfo = utility.getConnection(dataSource);
 		if (authInfo == null ||authInfo.getAccessToken().trim().isEmpty()) {//updated code for Java8
 			throw new Exception("Connection was not established. Please contact Salesforce Administrator!!.");
 		} else {
		    forceService.addDataSource(dataSource);
		}
 		 
 		
 		return dataSource;
    }
 	
 	@RequestMapping( value = "/{dsId}", method = RequestMethod.DELETE)
    public List<SFDCDataSource> deleteReport(
    			@PathVariable("dsId") Long dataSourceId
    		) {
 		forceService.deleteDataSource(dataSourceId);
 		return forceService.getDataSources();
    }

}
