# RusticiSoftwareCloudV2.RegistrationApi

All URIs are relative to *https://cloud.scorm.com/api/v2/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNewRegistrationInstance**](RegistrationApi.md#createNewRegistrationInstance) | **POST** /registrations/{registrationId}/instances | Create a new instance for this registration specified by the registration ID
[**createRegistration**](RegistrationApi.md#createRegistration) | **POST** /registrations | Create a registration.
[**deleteRegistration**](RegistrationApi.md#deleteRegistration) | **DELETE** /registrations/{registrationId} | Delete &#x60;registrationId&#x60;
[**deleteRegistrationConfigurationSetting**](RegistrationApi.md#deleteRegistrationConfigurationSetting) | **DELETE** /registrations/{registrationId}/configuration/{settingId} | Clears the &#x60;settingId&#x60; value for this registration
[**deleteRegistrationInstanceConfigurationSetting**](RegistrationApi.md#deleteRegistrationInstanceConfigurationSetting) | **DELETE** /registrations/{registrationId}/instances/{instanceId}/configuration/{settingId} | Clears the &#x60;settingId&#x60; value for this registration instance
[**deleteRegistrationProgress**](RegistrationApi.md#deleteRegistrationProgress) | **DELETE** /registrations/{registrationId}/progress | Delete registration progress (clear registration)
[**deleteRegistrationTags**](RegistrationApi.md#deleteRegistrationTags) | **DELETE** /registrations/{registrationId}/tags | Delete tags for this registration
[**deleteRegistrationsGlobalData**](RegistrationApi.md#deleteRegistrationsGlobalData) | **DELETE** /registrations/{registrationId}/globalData | Delete global data associated with &#x60;registrationId&#x60;
[**getRegistrationConfiguration**](RegistrationApi.md#getRegistrationConfiguration) | **GET** /registrations/{registrationId}/configuration | Returns all configuration settings for this registration
[**getRegistrationInstanceConfiguration**](RegistrationApi.md#getRegistrationInstanceConfiguration) | **GET** /registrations/{registrationId}/instances/{instanceId}/configuration | Returns all configuration settings for this registration instance
[**getRegistrationInstanceLaunchHistory**](RegistrationApi.md#getRegistrationInstanceLaunchHistory) | **GET** /registrations/{registrationId}/instances/{instanceId}/launchHistory | Returns history of this registration&#39;s launches
[**getRegistrationInstanceProgress**](RegistrationApi.md#getRegistrationInstanceProgress) | **GET** /registrations/{registrationId}/instances/{instanceId} | Get registration progress for instance &#x60;instanceId&#x60; of &#x60;registrationId&#x60;
[**getRegistrationInstanceStatements**](RegistrationApi.md#getRegistrationInstanceStatements) | **GET** /registrations/{registrationId}/instances/{instanceId}/xAPIStatements | Get xAPI statements for instance &#x60;instanceId&#x60; of &#x60;registrationId&#x60;
[**getRegistrationInstances**](RegistrationApi.md#getRegistrationInstances) | **GET** /registrations/{registrationId}/instances | Get all the instances of this the registration specified by the registration ID
[**getRegistrationLaunchHistory**](RegistrationApi.md#getRegistrationLaunchHistory) | **GET** /registrations/{registrationId}/launchHistory | Returns history of this registration&#39;s launches
[**getRegistrationLaunchLink**](RegistrationApi.md#getRegistrationLaunchLink) | **POST** /registrations/{registrationId}/launchLink | Returns the link to use to launch this registration
[**getRegistrationProgress**](RegistrationApi.md#getRegistrationProgress) | **GET** /registrations/{registrationId} | Get registration progress for &#x60;registrationId&#x60;
[**getRegistrationStatements**](RegistrationApi.md#getRegistrationStatements) | **GET** /registrations/{registrationId}/xAPIStatements | Get xAPI statements for &#x60;registrationId&#x60;
[**getRegistrationTags**](RegistrationApi.md#getRegistrationTags) | **GET** /registrations/{registrationId}/tags | Get the tags for this registration
[**getRegistrations**](RegistrationApi.md#getRegistrations) | **GET** /registrations | Gets a list of registrations including a summary of the status of each registration.
[**putRegistrationTags**](RegistrationApi.md#putRegistrationTags) | **PUT** /registrations/{registrationId}/tags | Set the tags for this registration
[**putRegistrationTagsBatch**](RegistrationApi.md#putRegistrationTagsBatch) | **PUT** /registrations/tags | Sets all of the provided tags on all of the provided registrations
[**registrationExists**](RegistrationApi.md#registrationExists) | **HEAD** /registrations/{registrationId} | Does this registration exist?
[**setRegistrationConfiguration**](RegistrationApi.md#setRegistrationConfiguration) | **POST** /registrations/{registrationId}/configuration | Set configuration settings for this registration.
[**setRegistrationInstanceConfiguration**](RegistrationApi.md#setRegistrationInstanceConfiguration) | **POST** /registrations/{registrationId}/instances/{instanceId}/configuration | Set configuration settings for this registration instance.


<a name="createNewRegistrationInstance"></a>
# **createNewRegistrationInstance**
> createNewRegistrationInstance(registrationId, )

Create a new instance for this registration specified by the registration ID

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var registrationId = "registrationId_example"; // String | id for this registration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createNewRegistrationInstance(registrationId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| id for this registration | 

### Return type

null (empty response body)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRegistration"></a>
# **createRegistration**
> createRegistration(registration, opts)

Create a registration.

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var registration = new RusticiSoftwareCloudV2.CreateRegistrationSchema(); // CreateRegistrationSchema | 

var opts = { 
  'courseVersion': 56 // Number | The version of the course you want to create the registration for. Unless you have a reason for using this you probably do not need to.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createRegistration(registration, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registration** | [**CreateRegistrationSchema**](CreateRegistrationSchema.md)|  | 
 **courseVersion** | **Number**| The version of the course you want to create the registration for. Unless you have a reason for using this you probably do not need to. | [optional] 

### Return type

null (empty response body)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRegistration"></a>
# **deleteRegistration**
> deleteRegistration(registrationId, )

Delete &#x60;registrationId&#x60;

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var registrationId = "registrationId_example"; // String | id for this registration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRegistration(registrationId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| id for this registration | 

### Return type

null (empty response body)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRegistrationConfigurationSetting"></a>
# **deleteRegistrationConfigurationSetting**
> deleteRegistrationConfigurationSetting(registrationId, settingId)

Clears the &#x60;settingId&#x60; value for this registration

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var registrationId = "registrationId_example"; // String | id for this registration

var settingId = "settingId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRegistrationConfigurationSetting(registrationId, settingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| id for this registration | 
 **settingId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRegistrationInstanceConfigurationSetting"></a>
# **deleteRegistrationInstanceConfigurationSetting**
> deleteRegistrationInstanceConfigurationSetting(registrationId, instanceId, settingId)

Clears the &#x60;settingId&#x60; value for this registration instance

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var registrationId = "registrationId_example"; // String | id for this registration

var instanceId = 56; // Number | The instance of this registration

var settingId = "settingId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRegistrationInstanceConfigurationSetting(registrationId, instanceId, settingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| id for this registration | 
 **instanceId** | **Number**| The instance of this registration | 
 **settingId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRegistrationProgress"></a>
# **deleteRegistrationProgress**
> deleteRegistrationProgress(registrationId, )

Delete registration progress (clear registration)

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var registrationId = "registrationId_example"; // String | id for this registration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRegistrationProgress(registrationId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| id for this registration | 

### Return type

null (empty response body)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRegistrationTags"></a>
# **deleteRegistrationTags**
> deleteRegistrationTags(registrationId, tags)

Delete tags for this registration

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var registrationId = "registrationId_example"; // String | id for this registration

var tags = new RusticiSoftwareCloudV2.TagListSchema(); // TagListSchema | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRegistrationTags(registrationId, tags, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| id for this registration | 
 **tags** | [**TagListSchema**](TagListSchema.md)|  | 

### Return type

null (empty response body)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRegistrationsGlobalData"></a>
# **deleteRegistrationsGlobalData**
> deleteRegistrationsGlobalData(registrationId, )

Delete global data associated with &#x60;registrationId&#x60;

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var registrationId = "registrationId_example"; // String | id for this registration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRegistrationsGlobalData(registrationId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| id for this registration | 

### Return type

null (empty response body)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRegistrationConfiguration"></a>
# **getRegistrationConfiguration**
> SettingListSchema getRegistrationConfiguration(registrationId, , opts)

Returns all configuration settings for this registration

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var registrationId = "registrationId_example"; // String | id for this registration

var opts = { 
  'includeMetadata': false // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRegistrationConfiguration(registrationId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| id for this registration | 
 **includeMetadata** | **Boolean**|  | [optional] [default to false]

### Return type

[**SettingListSchema**](SettingListSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRegistrationInstanceConfiguration"></a>
# **getRegistrationInstanceConfiguration**
> SettingListSchema getRegistrationInstanceConfiguration(registrationId, instanceId, , opts)

Returns all configuration settings for this registration instance

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var registrationId = "registrationId_example"; // String | id for this registration

var instanceId = 56; // Number | The instance of this registration

var opts = { 
  'includeMetadata': false // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRegistrationInstanceConfiguration(registrationId, instanceId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| id for this registration | 
 **instanceId** | **Number**| The instance of this registration | 
 **includeMetadata** | **Boolean**|  | [optional] [default to false]

### Return type

[**SettingListSchema**](SettingListSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRegistrationInstanceLaunchHistory"></a>
# **getRegistrationInstanceLaunchHistory**
> LaunchHistoryListSchema getRegistrationInstanceLaunchHistory(registrationId, instanceId, , opts)

Returns history of this registration&#39;s launches

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var registrationId = "registrationId_example"; // String | id for this registration

var instanceId = 56; // Number | The instance of this registration

var opts = { 
  'includeHistoryLog': false // Boolean | Whether to include the history log in the launch history
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRegistrationInstanceLaunchHistory(registrationId, instanceId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| id for this registration | 
 **instanceId** | **Number**| The instance of this registration | 
 **includeHistoryLog** | **Boolean**| Whether to include the history log in the launch history | [optional] [default to false]

### Return type

[**LaunchHistoryListSchema**](LaunchHistoryListSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRegistrationInstanceProgress"></a>
# **getRegistrationInstanceProgress**
> RegistrationSchema getRegistrationInstanceProgress(registrationId, instanceId, , opts)

Get registration progress for instance &#x60;instanceId&#x60; of &#x60;registrationId&#x60;

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var registrationId = "registrationId_example"; // String | id for this registration

var instanceId = 56; // Number | The instance of this registration

var opts = { 
  'includeChildResults': false, // Boolean | Include information about each learning object, not just the top level in the results
  'includeInteractionsAndObjectives': false, // Boolean | Include interactions and objectives in the results
  'includeRuntime': false // Boolean | Include runtime details in the results
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRegistrationInstanceProgress(registrationId, instanceId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| id for this registration | 
 **instanceId** | **Number**| The instance of this registration | 
 **includeChildResults** | **Boolean**| Include information about each learning object, not just the top level in the results | [optional] [default to false]
 **includeInteractionsAndObjectives** | **Boolean**| Include interactions and objectives in the results | [optional] [default to false]
 **includeRuntime** | **Boolean**| Include runtime details in the results | [optional] [default to false]

### Return type

[**RegistrationSchema**](RegistrationSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRegistrationInstanceStatements"></a>
# **getRegistrationInstanceStatements**
> XapiStatementResult getRegistrationInstanceStatements(registrationId, instanceId, , opts)

Get xAPI statements for instance &#x60;instanceId&#x60; of &#x60;registrationId&#x60;

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var registrationId = "registrationId_example"; // String | id for this registration

var instanceId = 56; // Number | The instance of this registration

var opts = { 
  'since': new Date("2013-10-20T19:20:30+01:00"), // Date | Only items updated since the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used.
  'until': new Date("2013-10-20T19:20:30+01:00"), // Date | Only items updated before the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used.
  'more': "more_example", // String | Value for this parameter will be provided in the 'more' property of registration lists, where needed. An opaque value, construction and parsing may change without notice.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRegistrationInstanceStatements(registrationId, instanceId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| id for this registration | 
 **instanceId** | **Number**| The instance of this registration | 
 **since** | **Date**| Only items updated since the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used. | [optional] 
 **until** | **Date**| Only items updated before the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used. | [optional] 
 **more** | **String**| Value for this parameter will be provided in the &#39;more&#39; property of registration lists, where needed. An opaque value, construction and parsing may change without notice. | [optional] 

### Return type

[**XapiStatementResult**](XapiStatementResult.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRegistrationInstances"></a>
# **getRegistrationInstances**
> RegistrationListSchema getRegistrationInstances(registrationId, , opts)

Get all the instances of this the registration specified by the registration ID

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var registrationId = "registrationId_example"; // String | id for this registration

var opts = { 
  'until': new Date("2013-10-20T19:20:30+01:00"), // Date | Only items updated before the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used.
  'since': new Date("2013-10-20T19:20:30+01:00"), // Date | Only items updated since the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used.
  'more': "more_example", // String | Value for this parameter will be provided in the 'more' property of registration lists, where needed. An opaque value, construction and parsing may change without notice.
  'includeChildResults': false, // Boolean | Include information about each learning object, not just the top level in the results
  'includeInteractionsAndObjectives': false, // Boolean | Include interactions and objectives in the results
  'includeRuntime': false // Boolean | Include runtime details in the results
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRegistrationInstances(registrationId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| id for this registration | 
 **until** | **Date**| Only items updated before the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used. | [optional] 
 **since** | **Date**| Only items updated since the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used. | [optional] 
 **more** | **String**| Value for this parameter will be provided in the &#39;more&#39; property of registration lists, where needed. An opaque value, construction and parsing may change without notice. | [optional] 
 **includeChildResults** | **Boolean**| Include information about each learning object, not just the top level in the results | [optional] [default to false]
 **includeInteractionsAndObjectives** | **Boolean**| Include interactions and objectives in the results | [optional] [default to false]
 **includeRuntime** | **Boolean**| Include runtime details in the results | [optional] [default to false]

### Return type

[**RegistrationListSchema**](RegistrationListSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRegistrationLaunchHistory"></a>
# **getRegistrationLaunchHistory**
> LaunchHistoryListSchema getRegistrationLaunchHistory(registrationId, , opts)

Returns history of this registration&#39;s launches

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var registrationId = "registrationId_example"; // String | id for this registration

var opts = { 
  'includeHistoryLog': false // Boolean | Whether to include the history log in the launch history
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRegistrationLaunchHistory(registrationId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| id for this registration | 
 **includeHistoryLog** | **Boolean**| Whether to include the history log in the launch history | [optional] [default to false]

### Return type

[**LaunchHistoryListSchema**](LaunchHistoryListSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRegistrationLaunchLink"></a>
# **getRegistrationLaunchLink**
> LaunchLinkSchema getRegistrationLaunchLink(registrationId, launchLinkRequest)

Returns the link to use to launch this registration

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var registrationId = "registrationId_example"; // String | id for this registration

var launchLinkRequest = new RusticiSoftwareCloudV2.LaunchLinkRequestSchema(); // LaunchLinkRequestSchema | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRegistrationLaunchLink(registrationId, launchLinkRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| id for this registration | 
 **launchLinkRequest** | [**LaunchLinkRequestSchema**](LaunchLinkRequestSchema.md)|  | 

### Return type

[**LaunchLinkSchema**](LaunchLinkSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRegistrationProgress"></a>
# **getRegistrationProgress**
> RegistrationSchema getRegistrationProgress(registrationId, , opts)

Get registration progress for &#x60;registrationId&#x60;

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var registrationId = "registrationId_example"; // String | id for this registration

var opts = { 
  'includeChildResults': false, // Boolean | Include information about each learning object, not just the top level in the results
  'includeInteractionsAndObjectives': false, // Boolean | Include interactions and objectives in the results
  'includeRuntime': false // Boolean | Include runtime details in the results
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRegistrationProgress(registrationId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| id for this registration | 
 **includeChildResults** | **Boolean**| Include information about each learning object, not just the top level in the results | [optional] [default to false]
 **includeInteractionsAndObjectives** | **Boolean**| Include interactions and objectives in the results | [optional] [default to false]
 **includeRuntime** | **Boolean**| Include runtime details in the results | [optional] [default to false]

### Return type

[**RegistrationSchema**](RegistrationSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRegistrationStatements"></a>
# **getRegistrationStatements**
> XapiStatementResult getRegistrationStatements(registrationId, , opts)

Get xAPI statements for &#x60;registrationId&#x60;

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var registrationId = "registrationId_example"; // String | id for this registration

var opts = { 
  'since': new Date("2013-10-20T19:20:30+01:00"), // Date | Only items updated since the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used.
  'until': new Date("2013-10-20T19:20:30+01:00"), // Date | Only items updated before the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used.
  'more': "more_example", // String | Value for this parameter will be provided in the 'more' property of registration lists, where needed. An opaque value, construction and parsing may change without notice.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRegistrationStatements(registrationId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| id for this registration | 
 **since** | **Date**| Only items updated since the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used. | [optional] 
 **until** | **Date**| Only items updated before the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used. | [optional] 
 **more** | **String**| Value for this parameter will be provided in the &#39;more&#39; property of registration lists, where needed. An opaque value, construction and parsing may change without notice. | [optional] 

### Return type

[**XapiStatementResult**](XapiStatementResult.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRegistrationTags"></a>
# **getRegistrationTags**
> TagListSchema getRegistrationTags(registrationId, )

Get the tags for this registration

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var registrationId = "registrationId_example"; // String | id for this registration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRegistrationTags(registrationId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| id for this registration | 

### Return type

[**TagListSchema**](TagListSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRegistrations"></a>
# **getRegistrations**
> RegistrationListSchema getRegistrations(opts)

Gets a list of registrations including a summary of the status of each registration.

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var opts = { 
  'courseId': "courseId_example", // String | Only registrations for the specified course id will be included.
  'learnerId': "learnerId_example", // String | Only registrations for the specified learner id will be included.
  'since': new Date("2013-10-20T19:20:30+01:00"), // Date | Only items updated since the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used.
  'until': new Date("2013-10-20T19:20:30+01:00"), // Date | Only items updated before the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used.
  'more': "more_example", // String | Value for this parameter will be provided in the 'more' property of registration lists, where needed. An opaque value, construction and parsing may change without notice.
  'includeChildResults': false, // Boolean | Include information about each learning object, not just the top level in the results
  'includeInteractionsAndObjectives': false, // Boolean | Include interactions and objectives in the results
  'includeRuntime': false // Boolean | Include runtime details in the results
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRegistrations(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**| Only registrations for the specified course id will be included. | [optional] 
 **learnerId** | **String**| Only registrations for the specified learner id will be included. | [optional] 
 **since** | **Date**| Only items updated since the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used. | [optional] 
 **until** | **Date**| Only items updated before the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used. | [optional] 
 **more** | **String**| Value for this parameter will be provided in the &#39;more&#39; property of registration lists, where needed. An opaque value, construction and parsing may change without notice. | [optional] 
 **includeChildResults** | **Boolean**| Include information about each learning object, not just the top level in the results | [optional] [default to false]
 **includeInteractionsAndObjectives** | **Boolean**| Include interactions and objectives in the results | [optional] [default to false]
 **includeRuntime** | **Boolean**| Include runtime details in the results | [optional] [default to false]

### Return type

[**RegistrationListSchema**](RegistrationListSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putRegistrationTags"></a>
# **putRegistrationTags**
> putRegistrationTags(registrationId, tags)

Set the tags for this registration

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var registrationId = "registrationId_example"; // String | id for this registration

var tags = new RusticiSoftwareCloudV2.TagListSchema(); // TagListSchema | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putRegistrationTags(registrationId, tags, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| id for this registration | 
 **tags** | [**TagListSchema**](TagListSchema.md)|  | 

### Return type

null (empty response body)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putRegistrationTagsBatch"></a>
# **putRegistrationTagsBatch**
> putRegistrationTagsBatch(batch)

Sets all of the provided tags on all of the provided registrations

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var batch = new RusticiSoftwareCloudV2.RegistrationTagsBatchSchema(); // RegistrationTagsBatchSchema | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putRegistrationTagsBatch(batch, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch** | [**RegistrationTagsBatchSchema**](RegistrationTagsBatchSchema.md)|  | 

### Return type

null (empty response body)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registrationExists"></a>
# **registrationExists**
> registrationExists(registrationId, )

Does this registration exist?

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var registrationId = "registrationId_example"; // String | id for this registration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.registrationExists(registrationId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| id for this registration | 

### Return type

null (empty response body)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setRegistrationConfiguration"></a>
# **setRegistrationConfiguration**
> setRegistrationConfiguration(registrationId, configurationSettings)

Set configuration settings for this registration.

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var registrationId = "registrationId_example"; // String | id for this registration

var configurationSettings = new RusticiSoftwareCloudV2.SettingsPostSchema(); // SettingsPostSchema | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setRegistrationConfiguration(registrationId, configurationSettings, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| id for this registration | 
 **configurationSettings** | [**SettingsPostSchema**](SettingsPostSchema.md)|  | 

### Return type

null (empty response body)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setRegistrationInstanceConfiguration"></a>
# **setRegistrationInstanceConfiguration**
> setRegistrationInstanceConfiguration(registrationId, instanceId, configurationSettings)

Set configuration settings for this registration instance.

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.RegistrationApi();

var registrationId = "registrationId_example"; // String | id for this registration

var instanceId = 56; // Number | The instance of this registration

var configurationSettings = new RusticiSoftwareCloudV2.SettingsPostSchema(); // SettingsPostSchema | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setRegistrationInstanceConfiguration(registrationId, instanceId, configurationSettings, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| id for this registration | 
 **instanceId** | **Number**| The instance of this registration | 
 **configurationSettings** | [**SettingsPostSchema**](SettingsPostSchema.md)|  | 

### Return type

null (empty response body)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

