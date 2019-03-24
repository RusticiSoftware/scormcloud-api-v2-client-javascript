# RusticiSoftwareCloudV2.ObjectiveSchema

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**primary** | **Boolean** |  | [optional] 
**score** | [**ScoreSchema**](ScoreSchema.md) |  | [optional] 
**scoreMax** | **Number** |  | [optional] 
**scoreMin** | **Number** |  | [optional] 
**scoreRaw** | **Number** |  | [optional] 
**previousScoreScaled** | **Number** |  | [optional] 
**firstScoreScaled** | **Number** |  | [optional] 
**progressMeasure** | **Number** |  | [optional] 
**firstSuccessTimeStamp** | **String** |  | [optional] 
**objectiveCompletion** | **String** |  | [optional] [default to &#39;UNKNOWN&#39;]
**objectiveSuccess** | **String** |  | [optional] [default to &#39;UNKNOWN&#39;]
**previousObjectiveSuccess** | **String** |  | [optional] [default to &#39;UNKNOWN&#39;]


<a name="ObjectiveCompletionEnum"></a>
## Enum: ObjectiveCompletionEnum


* `UNKNOWN` (value: `"UNKNOWN"`)

* `COMPLETED` (value: `"COMPLETED"`)

* `INCOMPLETE` (value: `"INCOMPLETE"`)




<a name="ObjectiveSuccessEnum"></a>
## Enum: ObjectiveSuccessEnum


* `UNKNOWN` (value: `"UNKNOWN"`)

* `PASSED` (value: `"PASSED"`)

* `FAILED` (value: `"FAILED"`)




<a name="PreviousObjectiveSuccessEnum"></a>
## Enum: PreviousObjectiveSuccessEnum


* `UNKNOWN` (value: `"UNKNOWN"`)

* `PASSED` (value: `"PASSED"`)

* `FAILED` (value: `"FAILED"`)




