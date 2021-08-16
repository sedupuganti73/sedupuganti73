/**
 * 
 */
package com.nscorp.analytics.utils;

import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.cfg.MapperConfig;
import com.fasterxml.jackson.databind.introspect.AnnotatedMethod;
import com.nscorp.analytics.dataObjects.FieldData;
import com.nscorp.analytics.dataObjects.FileFormat;
import com.nscorp.analytics.dataObjects.MetaData;
import com.nscorp.analytics.dataObjects.ObjectData;
import com.nscorp.analytics.model.AuthenticationInfo;
import com.nscorp.analytics.model.Report;
import com.nscorp.analytics.model.ReportColumn;
import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jettison.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

/**
 * @author sedupuganti
 *
 */

@Component
public class LoadToCloud {
	private static final Logger logger = LoggerFactory.getLogger(LoadToCloud.class);
	private static final String COMMA = "|";
	private static final String DOUBLE_QUOTE = "\"";
	private static final String UTF8_CHARACTERSET = "UTF-8";
	


	@Autowired
	private HttpUtils httpUtils;

	

	public String createDataSetDefintion(AuthenticationInfo authInfo, Report report,
			List<ReportColumn> reportColumnList, String operation) throws Exception {
		logger.info("Start : LoadToCloud.createDataSetDefintion");
		String metaDataJson = generateMetaDatatoLoad(report, reportColumnList);
		String dataSetId = createWaveDataSet(authInfo, metaDataJson, report, operation);
		logger.info("End : LoadToCloud.createDataSetDefintion");
		return dataSetId;
	}

	private String createWaveDataSet(AuthenticationInfo authInfo, String metaDataJson, Report report, String operation)
			throws Exception {
		logger.info("Start : LoadToCloud.createWaveDataSet");
		String dataSetId = null;
		String partialUrl = "/data/{version}/sobjects/InsightsExternalData";
		JSONObject dataJson = new JSONObject();
		dataJson.put("Format", "Csv");
		if (report.getAppName() != null) {
			dataJson.put("EdgemartContainer", report.getAppName());
		} else {
			dataJson.put("EdgemartContainer", "SharedApp");
		}
		dataJson.put("EdgemartAlias", report.getName());
		dataJson.put("MetadataJson", Base64.getEncoder().encodeToString(metaDataJson.getBytes()));
		dataJson.put("Operation", operation);
		dataJson.put("Action", "None");
		System.out.println("dataJson--------------->"+ dataJson);
		String response = httpUtils.postData(authInfo, partialUrl, dataJson.toString(), false);
		JSONObject resultObj = new JSONObject(response);
		if (resultObj.get("success").toString().equalsIgnoreCase("true")) {
			dataSetId = (String)resultObj.get("id");
		} else {
			throw new Exception(resultObj.getJSONArray("errors").toString());
		}

		logger.info("End : LoadToCloud.createWaveDataSet");
		return dataSetId;
	}
	
	public String processData(String dataSetId, AuthenticationInfo authInfo) throws Exception {
		logger.info("Start : LoadToCloud.processData");
		String partialUrl = "/data/{version}/sobjects/InsightsExternalData/"+dataSetId;
		JSONObject dataJson = new JSONObject();
		dataJson.put("Action", "Process");
		httpUtils.patchData(authInfo, partialUrl, dataJson.toString(), false);
		logger.info("End : LoadToCloud.processData");
		return null;
	}


	
	private String generateMetaDatatoLoad(Report report, List<ReportColumn> reportColumnList)
			throws JsonGenerationException, JsonMappingException, IOException {
		logger.info("Start : LoadToCloud.generateMetaDatatoLoad");
		MetaData metadata = new MetaData();
		FileFormat format = new FileFormat();
		format.setCharsetName(UTF8_CHARACTERSET);
		format.setFieldsEnclosedBy(DOUBLE_QUOTE);
		format.setFieldsDelimitedBy(COMMA);
		format.setNumberOfLinesToIgnore(1);
		metadata.setFileFormat(format);
		List<ObjectData> objectList = new ArrayList<ObjectData>();
		ObjectData objectData = new ObjectData();
		objectData.setConnector("CSVConnector");
		objectData.setFullyQualifiedName(report.getName());
		if (report.getLabel() != null) {
			objectData.setLabel(report.getLabel());
		} else {
			objectData.setLabel(report.getName());
		}
		objectData.setName(report.getName());
		objectList.add(objectData);
		metadata.setObjects(objectList);
		objectData.setFields(getFieldData(reportColumnList, report.getName()));
		ObjectMapper mapperObj = new ObjectMapper();
		mapperObj.configure(SerializationFeature.INDENT_OUTPUT, true);
		// mapperObj.setSerializationInclusion(Include.NON_EMPTY);
		mapperObj.setPropertyNamingStrategy(new PropertyNamingStrategy() {
			@Override
			public String nameForGetterMethod(MapperConfig<?> config, AnnotatedMethod method, String defaultName) {
				if (method.hasReturnType()
						&& (method.getRawReturnType() == Boolean.class || method.getRawReturnType() == boolean.class)
						&& method.getName().startsWith("is")) {
					return method.getName();
				}
				return super.nameForGetterMethod(config, method, defaultName);
			}
		});
		// mapperObj.configure(SerializationFeature., state);
		// mapperObj.configure(SerializationFeature.
		// mapperObj.configure(Feature.WRITE_NULL_PROPERTIES, false);
		// mapperObj.configure(Feature.INDENT_OUTPUT, true);
		String jsonStr = mapperObj.writeValueAsString(metadata);
		System.out.println("jsonStr----------->" + jsonStr);
		logger.info("End : LoadToCloud.generateMetaDatatoLoad");
		return jsonStr;
	}

	private List<FieldData> getFieldData(List<ReportColumn> reportColumnList, String dataName) {
		logger.info("Start : LoadToCloud.getFieldData");
		List<FieldData> fieldList = new ArrayList<FieldData>();
		boolean isUnique = false;
		for (ReportColumn reportColumn : reportColumnList) {
			isUnique = false;
			if (reportColumn.getPrimaryKey() == 1) {
				isUnique = true;
			}
			if ('S' == reportColumn.getType()) {
				fieldList.add(
						new FieldData(reportColumn.getName(), reportColumn.getLabel(), dataName, "Text", isUnique));
			} else if ('D' == reportColumn.getType() || 'A' == reportColumn.getType()) {
				fieldList.add(new FieldData(reportColumn.getName(), reportColumn.getLabel(), dataName, "Date",
						reportColumn.getFormat(), 0, isUnique));
			} else if ('I' == reportColumn.getType()) {
				fieldList.add(new FieldData(reportColumn.getName(), reportColumn.getLabel(), dataName, "Numeric",
						reportColumn.getFormat(), "0", reportColumn.getPrecision(), reportColumn.getScale(), isUnique));
			} else if ('F' == reportColumn.getType()) {
				fieldList.add(new FieldData(reportColumn.getName(), reportColumn.getLabel(), dataName, "Numeric",
						reportColumn.getFormat(), "0", reportColumn.getPrecision(), reportColumn.getScale(), isUnique));
			} else if ('T' == reportColumn.getType()) {
				fieldList.add(new FieldData(reportColumn.getName(), reportColumn.getLabel(), dataName, "Numeric",
						reportColumn.getFormat(), "0", reportColumn.getPrecision(), reportColumn.getScale(), isUnique));
			}
		}
		logger.info("End : LoadToCloud.getFieldData");
		return fieldList;
	}
   	
	
	public String publishDataToWave(AuthenticationInfo authInfo, byte[] byteArray, String parentId, int partNumber) throws Exception {
		logger.info("Start : LoadToCloud.publishDataToWave");
		String rowId = null;
		String partialUrl = "/data/{version}/sobjects/InsightsExternalDataPart";
		JSONObject dataJson = new JSONObject();
		dataJson.put("DataFile", Base64.getEncoder().encodeToString(byteArray));
		dataJson.put("InsightsExternalDataId", parentId);
		dataJson.put("PartNumber", partNumber);
		String response = httpUtils.postData(authInfo, partialUrl, dataJson.toString(), false);
		JSONObject resultObj = new JSONObject(response);
		if (resultObj.get("success").toString().equalsIgnoreCase("true")) {
			rowId = (String)resultObj.get("id");
		} else {
			logger.error("LoadToCloud.publishDataToWave", resultObj.getJSONArray("errors").toString());
			throw new Exception(resultObj.getJSONArray("errors").toString());
		}
		logger.info("End : LoadToCloud.publishDataToWave");
		return rowId;
	}
	
	

	
}
