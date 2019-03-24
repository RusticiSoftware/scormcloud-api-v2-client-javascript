# RusticiSoftwareCloudV2.RegistrationSchema

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**instance** | **Integer** |  | [optional] 
**xapiRegistrationId** | **String** | xAPI registration id associated with this registration | [optional] 
**dispatchId** | **String** | Dispatch ID for this registration, if applicable | [optional] 
**updated** | **Date** |  | [optional] 
**registrationCompletion** | [**RegistrationCompletion**](RegistrationCompletion.md) |  | [optional] 
**registrationCompletionAmount** | **Number** |  | [optional] 
**registrationSuccess** | [**RegistrationSuccess**](RegistrationSuccess.md) |  | [optional] 
**score** | [**ScoreSchema**](ScoreSchema.md) |  | [optional] 
**totalSecondsTracked** | **Number** |  | [optional] 
**firstAccessDate** | **Date** |  | [optional] 
**lastAccessDate** | **Date** |  | [optional] 
**completedDate** | **Date** |  | [optional] 
**createdDate** | **Date** |  | [optional] 
**course** | [**CourseReferenceSchema**](CourseReferenceSchema.md) |  | [optional] 
**learner** | [**LearnerSchema**](LearnerSchema.md) |  | [optional] 
**globalObjectives** | [**[ObjectiveSchema]**](ObjectiveSchema.md) |  | [optional] 
**sharedData** | [**[SharedDataEntrySchema]**](SharedDataEntrySchema.md) |  | [optional] 
**suspendedActivityId** | **String** |  | [optional] 
**activityDetails** | [**ActivityResultSchema**](ActivityResultSchema.md) |  | [optional] 


