# RusticiSoftwareCloudV2.CreateRegistrationSchema

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**courseId** | **String** |  | 
**learner** | [**LearnerSchema**](LearnerSchema.md) |  | 
**registrationId** | **String** |  | 
**xapiRegistrationId** | **String** | The xapiRegistrationId to be associated with this registration. If not specified, the system will assign an xapiRegistrationId. As per the xApi specification, this must be a UUID. | [optional] 
**learnerTags** | **[String]** |  | [optional] 
**courseTags** | **[String]** |  | [optional] 
**registrationTags** | **[String]** |  | [optional] 
**postBack** | [**PostBackSchema**](PostBackSchema.md) | Specifies an optional override URL for which to post activity and status data in real time as the course is completed. By default all of these settings are read from your configuration. | [optional] 
**initialRegistrationState** | [**RegistrationSchema**](RegistrationSchema.md) |  | [optional] 
**initialSettings** | [**SettingsPostSchema**](SettingsPostSchema.md) |  | [optional] 


