/**
 * 
 */
package com.nscorp.analytics.model;

import com.fasterxml.jackson.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * @author sedupuganti
 *
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
"Format",
"EdgemartContainer",
"EdgemartAlias",
"Operation",
"Action",
"MetadataJson"
})
public class InsightsExternalDataInfo {
	
	@JsonProperty("Format")
	private String format;
	@JsonProperty("EdgemartContainer")
	private String edgemartContainer;
	@JsonProperty("EdgemartAlias")
	private String edgemartAlias;
	@JsonProperty("Operation")
	private String operation;
	@JsonProperty("Action")
	private String action;
	@JsonProperty("MetadataJson")
	private String metadataJson;
	@JsonIgnore
	private Map<String, Object> additionalProperties = new HashMap<String, Object>();

	@JsonProperty("Format")
	public String getFormat() {
	return format;
	}

	@JsonProperty("Format")
	public void setFormat(String format) {
	this.format = format;
	}

	@JsonProperty("EdgemartContainer")
	public String getEdgemartContainer() {
	return edgemartContainer;
	}

	@JsonProperty("EdgemartContainer")
	public void setEdgemartContainer(String edgemartContainer) {
	this.edgemartContainer = edgemartContainer;
	}

	@JsonProperty("EdgemartAlias")
	public String getEdgemartAlias() {
	return edgemartAlias;
	}

	@JsonProperty("EdgemartAlias")
	public void setEdgemartAlias(String edgemartAlias) {
	this.edgemartAlias = edgemartAlias;
	}

	@JsonProperty("Operation")
	public String getOperation() {
	return operation;
	}

	@JsonProperty("Operation")
	public void setOperation(String operation) {
	this.operation = operation;
	}

	@JsonProperty("Action")
	public String getAction() {
	return action;
	}

	@JsonProperty("Action")
	public void setAction(String action) {
	this.action = action;
	}

	@JsonProperty("MetadataJson")
	public String getMetadataJson() {
	return metadataJson;
	}

	@JsonProperty("MetadataJson")
	public void setMetadataJson(String metadataJson) {
	this.metadataJson = metadataJson;
	}

	@JsonAnyGetter
	public Map<String, Object> getAdditionalProperties() {
	return this.additionalProperties;
	}

	@JsonAnySetter
	public void setAdditionalProperty(String name, Object value) {
	this.additionalProperties.put(name, value);
	}

}
