# RusticiSoftwareCloudV2.AuthenticationApi

All URIs are relative to *https://dev.cloud.scorm.com/api/v2/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAppToken**](AuthenticationApi.md#getAppToken) | **POST** /oauth/authenticate/application/token | Authenticates for a oauth token


<a name="getAppToken"></a>
# **getAppToken**
> ApplicationToken getAppToken(scope, opts)

Authenticates for a oauth token

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.default;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

var apiInstance = new RusticiSoftwareCloudV2.AuthenticationApi();

var scope = "scope_example"; // String | 

var opts = { 
  'expiration': 300 // Integer | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAppToken(scope, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **String**|  | 
 **expiration** | **Integer**|  | [optional] [default to 300]

### Return type

[**ApplicationToken**](ApplicationToken.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

