# RusticiSoftwareCloudV2.ApplicationManagementApi

All URIs are relative to *https://cloud.scorm.com/api/v2/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplication**](ApplicationManagementApi.md#createApplication) | **PUT** /appManagement/applications/{applicationName} | Create a new application
[**createCredential**](ApplicationManagementApi.md#createCredential) | **POST** /appManagement/{childAppId}/credentials | Create credential
[**createToken**](ApplicationManagementApi.md#createToken) | **POST** /appManagement/token | Create token
[**deleteApplication**](ApplicationManagementApi.md#deleteApplication) | **DELETE** /appManagement/applications/{childAppId} | Delete an application.  If the application contains content, it must first be manually removed before calling this method, else an error will be thrown.
[**deleteCredential**](ApplicationManagementApi.md#deleteCredential) | **DELETE** /appManagement/{childAppId}/credentials/{credentialId} | Removes &#x60;credentialId&#x60; credentials
[**getApplicationConfiguration**](ApplicationManagementApi.md#getApplicationConfiguration) | **GET** /appManagement/configuration | Returns all configuration settings for this level
[**getApplicationList**](ApplicationManagementApi.md#getApplicationList) | **GET** /appManagement/applications | Get list of all applications in this realm.
[**getCredentials**](ApplicationManagementApi.md#getCredentials) | **GET** /appManagement/{childAppId}/credentials | List of credentials
[**setApplicationConfiguration**](ApplicationManagementApi.md#setApplicationConfiguration) | **POST** /appManagement/configuration | Set configuration settings for this level.
[**updateCredential**](ApplicationManagementApi.md#updateCredential) | **PUT** /appManagement/{childAppId}/credentials/{credentialId} | Update the name or status associated with &#x60;credentialId&#x60;


<a name="createApplication"></a>
# **createApplication**
> ApplicationSchema createApplication(applicationName)

Create a new application

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

var apiInstance = new RusticiSoftwareCloudV2.ApplicationManagementApi();

var applicationName = "applicationName_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createApplication(applicationName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationName** | **String**|  | 

### Return type

[**ApplicationSchema**](ApplicationSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCredential"></a>
# **createCredential**
> CredentialCreatedSchema createCredential(childAppId, credentialRequest)

Create credential

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

var apiInstance = new RusticiSoftwareCloudV2.ApplicationManagementApi();

var childAppId = "childAppId_example"; // String | 

var credentialRequest = new RusticiSoftwareCloudV2.CredentialRequestSchema(); // CredentialRequestSchema | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCredential(childAppId, credentialRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childAppId** | **String**|  | 
 **credentialRequest** | [**CredentialRequestSchema**](CredentialRequestSchema.md)|  | 

### Return type

[**CredentialCreatedSchema**](CredentialCreatedSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createToken"></a>
# **createToken**
> StringResultSchema createToken(tokenRequest)

Create token

Creates, signs and returns a token based on the provided permissions, if the credentials used to request the token have the permissions being requested. Note: the token is not stored and therefore can not be modified or deleted. The requested permissions are encoded in the token which is then signed. As long as the secret used to create it is not changed the token will be valid until it expires.

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.instance;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

var apiInstance = new RusticiSoftwareCloudV2.ApplicationManagementApi();

var tokenRequest = new RusticiSoftwareCloudV2.TokenRequestSchema(); // TokenRequestSchema | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createToken(tokenRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenRequest** | [**TokenRequestSchema**](TokenRequestSchema.md)|  | 

### Return type

[**StringResultSchema**](StringResultSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteApplication"></a>
# **deleteApplication**
> deleteApplication(childAppId, )

Delete an application.  If the application contains content, it must first be manually removed before calling this method, else an error will be thrown.

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

var apiInstance = new RusticiSoftwareCloudV2.ApplicationManagementApi();

var childAppId = "childAppId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteApplication(childAppId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childAppId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCredential"></a>
# **deleteCredential**
> deleteCredential(childAppId, credentialId)

Removes &#x60;credentialId&#x60; credentials

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

var apiInstance = new RusticiSoftwareCloudV2.ApplicationManagementApi();

var childAppId = "childAppId_example"; // String | 

var credentialId = "credentialId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCredential(childAppId, credentialId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childAppId** | **String**|  | 
 **credentialId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApplicationConfiguration"></a>
# **getApplicationConfiguration**
> SettingListSchema getApplicationConfiguration(opts)

Returns all configuration settings for this level

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

var apiInstance = new RusticiSoftwareCloudV2.ApplicationManagementApi();

var opts = { 
  'learningStandard': "learningStandard_example", // String | If specified, the request will be scoped to the provided learning standard.
  'singleSco': true // Boolean | Required if learningStandard is specified. Scopes settings to whether a package has only one SCO or assignable unit within it or not. To apply a configuration setting to a learning standard for single and multi-SCO content, it must be set for both scopes.
  'includeMetadata': false // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getApplicationConfiguration(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **learningStandard** | **String**| If specified, the request will be scoped to the provided learning standard. | [optional] 
 **singleSco** | **Boolean**| Required if learningStandard is specified. Scopes settings to whether a package has only one SCO or assignable unit within it or not. To apply a configuration setting to a learning standard for single and multi-SCO content, it must be set for both scopes. | [optional] 
 **includeMetadata** | **Boolean**|  | [optional] [default to false]

### Return type

[**SettingListSchema**](SettingListSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getApplicationList"></a>
# **getApplicationList**
> ApplicationListSchema getApplicationList()

Get list of all applications in this realm.

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

var apiInstance = new RusticiSoftwareCloudV2.ApplicationManagementApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getApplicationList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ApplicationListSchema**](ApplicationListSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCredentials"></a>
# **getCredentials**
> CredentialListSchema getCredentials(childAppId, )

List of credentials

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

var apiInstance = new RusticiSoftwareCloudV2.ApplicationManagementApi();

var childAppId = "childAppId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCredentials(childAppId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childAppId** | **String**|  | 

### Return type

[**CredentialListSchema**](CredentialListSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setApplicationConfiguration"></a>
# **setApplicationConfiguration**
> setApplicationConfiguration(configurationSettings, opts)

Set configuration settings for this level.

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

var apiInstance = new RusticiSoftwareCloudV2.ApplicationManagementApi();

var configurationSettings = new RusticiSoftwareCloudV2.SettingsPostSchema(); // SettingsPostSchema | 

var opts = { 
  'learningStandard': "learningStandard_example", // String | If specified, the request will be scoped to the provided learning standard.
  'singleSco': true // Boolean | Required if learningStandard is specified. Scopes settings to whether a package has only one SCO or assignable unit within it or not. To apply a configuration setting to a learning standard for single and multi-SCO content, it must be set for both scopes.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setApplicationConfiguration(configurationSettings, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configurationSettings** | [**SettingsPostSchema**](SettingsPostSchema.md)|  | 
 **learningStandard** | **String**| If specified, the request will be scoped to the provided learning standard. | [optional] 
 **singleSco** | **Boolean**| Required if learningStandard is specified. Scopes settings to whether a package has only one SCO or assignable unit within it or not. To apply a configuration setting to a learning standard for single and multi-SCO content, it must be set for both scopes. | [optional] 

### Return type

null (empty response body)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCredential"></a>
# **updateCredential**
> updateCredential(childAppId, credentialIdcredentialUpdate)

Update the name or status associated with &#x60;credentialId&#x60;

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

var apiInstance = new RusticiSoftwareCloudV2.ApplicationManagementApi();

var childAppId = "childAppId_example"; // String | 

var credentialId = "credentialId_example"; // String | 

var credentialUpdate = new RusticiSoftwareCloudV2.CredentialRequestSchema(); // CredentialRequestSchema | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCredential(childAppId, credentialIdcredentialUpdate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childAppId** | **String**|  | 
 **credentialId** | **String**|  | 
 **credentialUpdate** | [**CredentialRequestSchema**](CredentialRequestSchema.md)|  | 

### Return type

null (empty response body)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

