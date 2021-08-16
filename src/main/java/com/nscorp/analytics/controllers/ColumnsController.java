package com.nscorp.analytics.controllers;

import com.nscorp.analytics.model.ReportColumn;
import com.nscorp.analytics.service.ColumnsService;
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
@RequestMapping( "/api/columns")
public class ColumnsController {
	@Autowired
	private ColumnsService columnsService;
	
	@RequestMapping( "/{reportId}")
    public List<ReportColumn> getColumns(@PathVariable("reportId") Long reportId) {
 		return columnsService.getColumns(reportId);
    }
	
	@RequestMapping( "/column/{columnId}")
    public ReportColumn getColumn(@PathVariable("columnId") Long columnId) {
 		return columnsService.getColumn(columnId);
    }
 	
 	@RequestMapping( value = "/create", method = RequestMethod.POST)
    public ReportColumn addColumn(
    			@RequestBody ReportColumn column
    		) {
 		columnsService.addColumn(column);
 		return column;
    }
 	
 	@RequestMapping( value = "/delete/{columnId}/{reportId}", method = RequestMethod.DELETE)
    public List<ReportColumn> deleteColumn(
    			@PathVariable("columnId") Long columnId ,
    			@PathVariable("reportId") Long reportId
    		) {
 		columnsService.deleteColumn(columnId);
 		return columnsService.getColumns(reportId);
    }
}
