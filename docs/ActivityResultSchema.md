# RusticiSoftwareCloudV2.ActivityResultSchema

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**title** | **String** |  | [optional] 
**attempts** | **Integer** |  | [optional] 
**activityCompletion** | **String** |  | [optional] 
**activitySuccess** | **String** |  | [optional] 
**score** | [**ScoreSchema**](ScoreSchema.md) |  | [optional] 
**timeTracked** | **String** |  | [optional] 
**completionAmount** | [**CompletionAmountSchema**](CompletionAmountSchema.md) |  | [optional] 
**suspended** | **Boolean** |  | [optional] 
**children** | [**[ActivityResultSchema]**](ActivityResultSchema.md) |  | [optional] 
**objectives** | [**[ObjectiveSchema]**](ObjectiveSchema.md) |  | [optional] 
**staticProperties** | [**StaticPropertiesSchema**](StaticPropertiesSchema.md) |  | [optional] 
**runtime** | [**RuntimeSchema**](RuntimeSchema.md) |  | [optional] 


<a name="ActivityCompletionEnum"></a>
## Enum: ActivityCompletionEnum


* `UNKNOWN` (value: `"UNKNOWN"`)

* `COMPLETED` (value: `"COMPLETED"`)

* `INCOMPLETE` (value: `"INCOMPLETE"`)




<a name="ActivitySuccessEnum"></a>
## Enum: ActivitySuccessEnum


* `UNKNOWN` (value: `"UNKNOWN"`)

* `PASSED` (value: `"PASSED"`)

* `FAILED` (value: `"FAILED"`)




