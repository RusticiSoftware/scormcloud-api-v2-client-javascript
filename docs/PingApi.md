# RusticiSoftwareCloudV2.PingApi

All URIs are relative to *https://cloud.scorm.com/api/v2/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pingAppId**](PingApi.md#pingAppId) | **GET** /ping | Get back a message indicating that the API is working.


<a name="pingAppId"></a>
# **pingAppId**
> PingSchema pingAppId()

Get back a message indicating that the API is working.

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

var apiInstance = new RusticiSoftwareCloudV2.PingApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pingAppId(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PingSchema**](PingSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

