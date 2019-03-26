# RusticiSoftwareCloudV2.LaunchLinkRequestSchema

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiry** | **Number** | Number of seconds from now this link will expire in. Defaults to 120s. Range 10s:300s | [optional] [default to 120]
**redirectOnExitUrl** | **String** | The URL the application should redirect to when the learner exits a course. If not specified, configured value will be used. | [optional] 
**tracking** | **Boolean** | Should this launch be tracked? If false, Engine will avoid tracking to the extent possible for the standard being used. | [optional] [default to true]
**startSco** | **String** | For SCORM, SCO identifier to override launch, overriding the normal sequencing. | [optional] 
**culture** | **String** | This parameter should specify a culture code. If specified, and supported, the navigation and alerts in the player will be displayed in the associated language. If not specified, the locale of the user’s browser will be used. | [optional] 
**cssUrl** | **String** | A Url pointing to custom css for the player to use. | [optional] 
**learnerTags** | **[String]** |  | [optional] 
**courseTags** | **[String]** |  | [optional] 
**registrationTags** | **[String]** |  | [optional] 
**additionalvalues** | [**[ItemValuePairSchema]**](ItemValuePairSchema.md) |  | [optional] 


