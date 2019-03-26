# RusticiSoftwareCloudV2.SettingMetadata

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_default** | **String** | Default value of this setting | [optional] 
**dataType** | **String** | The data type of this setting | [optional] 
**settingDescription** | **String** | description of this setting | [optional] 
**level** | **String** | The level this setting will be applied at, which limits where it can be set. For example, WebPathToContentRoot is applied at the application level, so it&#39;s not valid to set it for a registration. | [optional] 
**learningStandards** | **[String]** | The list of learning standards this setting applies to. If not present, this setting is not limited to certain learning standards. | [optional] 
**learningStandardVariant** | **String** | Does this setting apply to only single-SCO packages, only multi-SCO, or either? | [optional] [default to &#39;either&#39;]
**fallback** | **String** | A setting that will be used instead of this setting if no value is provided for this setting (This is similar to a default, except that the the value of another setting is being used instead of a fixed default value). | [optional] 
**validValues** | [**[SettingValidValue]**](SettingValidValue.md) | For settings with a fixed list of valid values, the list of those values | [optional] 


<a name="LearningStandardVariantEnum"></a>
## Enum: LearningStandardVariantEnum


* `singleScoOnly` (value: `"singleScoOnly"`)

* `multiScoOnly` (value: `"multiScoOnly"`)

* `either` (value: `"either"`)




