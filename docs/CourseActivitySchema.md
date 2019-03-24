# RusticiSoftwareCloudV2.CourseActivitySchema

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalIdentifier** | **String** | An arbitrary identifier that the external LMS system can associate with this LearningObject to track it as it isreused across courses  | [optional] 
**itemIdentifier** | **String** | The string which identifies this activity in the context of its course | [optional] 
**resourceIdentifier** | **String** | The string which identifies this activity&#39;s resource in a course&#39;s manifest | [optional] 
**activityType** | **String** | The type of activity this is | [optional] 
**href** | **String** | The web path used to launch this activity | [optional] 
**scaledPassingScore** | **String** | The score required of a learner to pass this activity | [optional] 
**title** | **String** | The title of the activity | [optional] 
**children** | [**[CourseActivitySchema]**](CourseActivitySchema.md) |  | [optional] 


<a name="ActivityTypeEnum"></a>
## Enum: ActivityTypeEnum


* `UNKNOWN` (value: `"UNKNOWN"`)

* `AGGREGATION` (value: `"AGGREGATION"`)

* `SCO` (value: `"SCO"`)

* `ASSET` (value: `"ASSET"`)

* `OBJECTIVE` (value: `"OBJECTIVE"`)




