# RusticiSoftwareCloudV2.SettingItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**effectiveValue** | **String** | The value of this setting that would be used if read at this level, including defaults, fallback, and values set at less specific levels. | [optional] 
**effectiveValueSource** | **String** | The source of this effective value, default, fallback, or the level the value was set at. | [optional] 
**explicitValue** | **String** | The value of this setting that is explicitly set at this level. If not present, the setting is not specified at this level. | [optional] 
**metadata** | [**SettingMetadata**](SettingMetadata.md) |  | [optional] 


<a name="EffectiveValueSourceEnum"></a>
## Enum: EffectiveValueSourceEnum


* `default` (value: `"default"`)

* `fallback` (value: `"fallback"`)

* `base` (value: `"base"`)

* `system` (value: `"system"`)

* `learningStandard` (value: `"learningStandard"`)

* `application` (value: `"application"`)

* `learningStandardForApplication` (value: `"learningStandardForApplication"`)

* `dispatchDestination` (value: `"dispatchDestination"`)

* `course` (value: `"course"`)

* `dispatchDestinationForCourse` (value: `"dispatchDestinationForCourse"`)

* `registration` (value: `"registration"`)




