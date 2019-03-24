# RusticiSoftwareCloudV2.RuntimeObjectiveSchema

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**scoreScaled** | **String** |  | [optional] 
**scoreMin** | **String** |  | [optional] 
**scoreMax** | **String** |  | [optional] 
**scoreRaw** | **String** |  | [optional] 
**runtimeObjectiveSuccessStatus** | **String** |  | [optional] [default to &#39;UNKNOWN&#39;]
**runtimeObjectiveCompletionStatus** | **String** |  | [optional] [default to &#39;UNKNOWN&#39;]
**progressMeasure** | **String** |  | [optional] 
**description** | **String** |  | [optional] 


<a name="RuntimeObjectiveSuccessStatusEnum"></a>
## Enum: RuntimeObjectiveSuccessStatusEnum


* `UNKNOWN` (value: `"UNKNOWN"`)

* `PASSED` (value: `"PASSED"`)

* `FAILED` (value: `"FAILED"`)




<a name="RuntimeObjectiveCompletionStatusEnum"></a>
## Enum: RuntimeObjectiveCompletionStatusEnum


* `UNKNOWN` (value: `"UNKNOWN"`)

* `COMPLETED` (value: `"COMPLETED"`)

* `INCOMPLETE` (value: `"INCOMPLETE"`)

* `NOT_ATTEMPTED` (value: `"NOT_ATTEMPTED"`)

* `BROWSED` (value: `"BROWSED"`)




