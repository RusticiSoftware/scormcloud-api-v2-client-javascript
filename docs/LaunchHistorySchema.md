# RusticiSoftwareCloudV2.LaunchHistorySchema

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**instance** | **Integer** |  | [optional] 
**score** | [**ScoreSchema**](ScoreSchema.md) |  | [optional] 
**completionStatus** | **String** |  | [optional] [default to &#39;UNKNOWN&#39;]
**successStatus** | **String** |  | [optional] [default to &#39;UNKNOWN&#39;]
**historyLog** | **String** |  | [optional] 
**totalSecondsTracked** | **Number** |  | [optional] 
**launchTime** | **Date** | The time of the launch in UTC | [optional] 
**exitTime** | **Date** | The time of the exit in UTC | [optional] 
**lastRuntimeUpdate** | **Date** | The time of the last runtime update in UTC | [optional] 


<a name="CompletionStatusEnum"></a>
## Enum: CompletionStatusEnum


* `UNKNOWN` (value: `"UNKNOWN"`)

* `COMPLETED` (value: `"COMPLETED"`)

* `INCOMPLETE` (value: `"INCOMPLETE"`)




<a name="SuccessStatusEnum"></a>
## Enum: SuccessStatusEnum


* `UNKNOWN` (value: `"UNKNOWN"`)

* `PASSED` (value: `"PASSED"`)

* `FAILED` (value: `"FAILED"`)




