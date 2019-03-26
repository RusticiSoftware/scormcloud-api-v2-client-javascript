# RusticiSoftwareCloudV2.CourseSchema

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**title** | **String** |  | [optional] 
**xapiActivityId** | **String** | xAPI activity id associated with this course | [optional] 
**created** | **Date** |  | [optional] 
**updated** | **Date** |  | [optional] 
**version** | **Number** |  | [optional] 
**registrationCount** | **Number** |  | [optional] 
**activityId** | **String** |  | [optional] 
**courseLearningStandard** | **String** |  | [optional] 
**tags** | **[String]** |  | [optional] 
**dispatched** | **Boolean** |  | [optional] 
**metadata** | [**MetadataSchema**](MetadataSchema.md) |  | [optional] 
**rootActivity** | [**CourseActivitySchema**](CourseActivitySchema.md) |  | [optional] 


<a name="CourseLearningStandardEnum"></a>
## Enum: CourseLearningStandardEnum


* `UNKNOWN` (value: `"UNKNOWN"`)

* `SCORM11` (value: `"SCORM11"`)

* `SCORM12` (value: `"SCORM12"`)

* `SCORM20042NDEDITION` (value: `"SCORM20042NDEDITION"`)

* `SCORM20043RDEDITION` (value: `"SCORM20043RDEDITION"`)

* `SCORM20044THEDITION` (value: `"SCORM20044THEDITION"`)

* `AICC` (value: `"AICC"`)

* `XAPI` (value: `"XAPI"`)

* `CMI5` (value: `"CMI5"`)




