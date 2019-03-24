# RusticiSoftwareCloudV2.RuntimeSchema

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completionStatus** | **String** |  | [optional] 
**credit** | **String** |  | [optional] 
**entry** | **String** |  | [optional] 
**exit** | **String** |  | [optional] 
**learnerPreference** | [**LearnerPreferenceSchema**](LearnerPreferenceSchema.md) |  | [optional] 
**location** | **String** |  | [optional] 
**mode** | **String** |  | [optional] 
**progressMeasure** | **String** |  | [optional] 
**scoreScaled** | **String** |  | [optional] 
**scoreRaw** | **String** |  | [optional] 
**scoreMin** | **String** |  | [optional] 
**scoreMax** | **String** |  | [optional] 
**totalTime** | **String** |  | [optional] 
**timeTracked** | **String** |  | [optional] 
**runtimeSuccessStatus** | **String** |  | [optional] [default to &#39;UNKNOWN&#39;]
**suspendData** | **String** |  | [optional] 
**learnerComments** | [**[CommentSchema]**](CommentSchema.md) |  | [optional] 
**lmsComments** | [**[CommentSchema]**](CommentSchema.md) |  | [optional] 
**runtimeInteractions** | [**[RuntimeInteractionSchema]**](RuntimeInteractionSchema.md) |  | [optional] 
**runtimeObjectives** | [**[RuntimeObjectiveSchema]**](RuntimeObjectiveSchema.md) |  | [optional] 


<a name="RuntimeSuccessStatusEnum"></a>
## Enum: RuntimeSuccessStatusEnum


* `UNKNOWN` (value: `"UNKNOWN"`)

* `PASSED` (value: `"PASSED"`)

* `FAILED` (value: `"FAILED"`)




