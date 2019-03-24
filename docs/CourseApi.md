# RusticiSoftwareCloudV2.CourseApi

All URIs are relative to *https://dev.cloud.scorm.com/api/v2/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buildCoursePreviewLaunchLink**](CourseApi.md#buildCoursePreviewLaunchLink) | **POST** /courses/{courseId}/preview | Returns the launch link to use to preview this course
[**buildCoursePreviewLaunchLinkWithVersion**](CourseApi.md#buildCoursePreviewLaunchLinkWithVersion) | **POST** /courses/{courseId}/versions/{versionId}/preview | Returns the link to use to preview this course
[**createFetchAndImportCourseJob**](CourseApi.md#createFetchAndImportCourseJob) | **POST** /courses/importJobs | Start a job to fetch and import a course.
[**createUploadAndImportCourseJob**](CourseApi.md#createUploadAndImportCourseJob) | **POST** /courses/importJobs/upload | Upload a course and start an import job for it.
[**deleteCourse**](CourseApi.md#deleteCourse) | **DELETE** /courses/{courseId} | Delete &#x60;courseId&#x60;
[**deleteCourseConfigurationSetting**](CourseApi.md#deleteCourseConfigurationSetting) | **DELETE** /courses/{courseId}/configuration/{settingId} | Clears the &#x60;settingId&#x60; value for this course
[**deleteCourseVersion**](CourseApi.md#deleteCourseVersion) | **DELETE** /courses/{courseId}/versions/{versionId} | Delete version &#x60;versionId&#x60; of &#x60;courseId&#x60;
[**deleteCourseVersionConfigurationSetting**](CourseApi.md#deleteCourseVersionConfigurationSetting) | **DELETE** /courses/{courseId}/versions/{versionId}/configuration/{settingId} | Clears the &#x60;settingId&#x60; value for this course and version.
[**getCourse**](CourseApi.md#getCourse) | **GET** /courses/{courseId} | Get information about &#x60;courseId&#x60;
[**getCourseConfiguration**](CourseApi.md#getCourseConfiguration) | **GET** /courses/{courseId}/configuration | Returns all configuration settings for this course
[**getCourseStatements**](CourseApi.md#getCourseStatements) | **GET** /courses/{courseId}/xAPIStatements | Get xAPI statements for &#x60;courseId&#x60;
[**getCourseVersionConfiguration**](CourseApi.md#getCourseVersionConfiguration) | **GET** /courses/{courseId}/versions/{versionId}/configuration | Returns all configuration settings for this course and version.
[**getCourseVersionInfo**](CourseApi.md#getCourseVersionInfo) | **GET** /courses/{courseId}/versions/{versionId} | Get version &#x60;versionId&#x60; of &#x60;courseId&#x60;
[**getCourseVersionStatements**](CourseApi.md#getCourseVersionStatements) | **GET** /courses/{courseId}/versions/{versionId}/xAPIStatements | Get xAPI statements for version &#x60;versionId&#x60; of &#x60;courseId&#x60;
[**getCourseVersions**](CourseApi.md#getCourseVersions) | **GET** /courses/{courseId}/versions | Get all versions of &#x60;courseId&#x60;
[**getCourses**](CourseApi.md#getCourses) | **GET** /courses | Get all courses for &#x60;appId&#x60;
[**getImportJobStatus**](CourseApi.md#getImportJobStatus) | **GET** /courses/importJobs/{importJobId} | Check the status of an import job.
[**setCourseConfiguration**](CourseApi.md#setCourseConfiguration) | **POST** /courses/{courseId}/configuration | Set configuration settings for this course.
[**setCourseTitle**](CourseApi.md#setCourseTitle) | **PUT** /courses/{courseId}/title | Sets the course title for &#x60;courseId&#x60;
[**setCourseVersionConfiguration**](CourseApi.md#setCourseVersionConfiguration) | **POST** /courses/{courseId}/versions/{versionId}/configuration | Set configuration settings for this course and version.


<a name="buildCoursePreviewLaunchLink"></a>
# **buildCoursePreviewLaunchLink**
> LaunchLinkSchema buildCoursePreviewLaunchLink(courseIdlaunchLinkRequest, opts)

Returns the launch link to use to preview this course

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.default;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.CourseApi();

var courseId = "courseId_example"; // String | 

var launchLinkRequest = new RusticiSoftwareCloudV2.LaunchLinkRequestSchema(); // LaunchLinkRequestSchema | 

var opts = { 
  'cssUrl': "cssUrl_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.buildCoursePreviewLaunchLink(courseIdlaunchLinkRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**|  | 
 **launchLinkRequest** | [**LaunchLinkRequestSchema**](LaunchLinkRequestSchema.md)|  | 
 **cssUrl** | **String**|  | [optional] 

### Return type

[**LaunchLinkSchema**](LaunchLinkSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="buildCoursePreviewLaunchLinkWithVersion"></a>
# **buildCoursePreviewLaunchLinkWithVersion**
> LaunchLinkSchema buildCoursePreviewLaunchLinkWithVersion(courseIdversionIdlaunchLinkRequest)

Returns the link to use to preview this course

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.default;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.CourseApi();

var courseId = "courseId_example"; // String | 

var versionId = 56; // Integer | The course version

var launchLinkRequest = new RusticiSoftwareCloudV2.LaunchLinkRequestSchema(); // LaunchLinkRequestSchema | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.buildCoursePreviewLaunchLinkWithVersion(courseIdversionIdlaunchLinkRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**|  | 
 **versionId** | **Integer**| The course version | 
 **launchLinkRequest** | [**LaunchLinkRequestSchema**](LaunchLinkRequestSchema.md)|  | 

### Return type

[**LaunchLinkSchema**](LaunchLinkSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createFetchAndImportCourseJob"></a>
# **createFetchAndImportCourseJob**
> StringResultSchema createFetchAndImportCourseJob(courseIdimportRequest, opts)

Start a job to fetch and import a course.

An import job will be started to fetch and import the referenced file, and the import job ID will be returned. If the import is successful, the imported course will be registered using the courseId provided.\&quot;

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.default;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.CourseApi();

var courseId = "courseId_example"; // String | A unique identifier your application will use to identify the course after import. Your application is responsible both for generating this unique ID and for keeping track of the ID for later use.

var importRequest = new RusticiSoftwareCloudV2.ImportFetchRequestSchema(); // ImportFetchRequestSchema | 

var opts = { 
  'mayCreateNewVersion': false, // Boolean | Is it OK to create a new version of this course? If this is set to false and the course already exists, the upload will fail. If true and the course already exists then a new version will be created. No effect if the course doesn't already exist.
  'postbackUrl': "postbackUrl_example" // String | An optional parameter that specifies a URL to send a postback to when the course has finished uploading.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createFetchAndImportCourseJob(courseIdimportRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**| A unique identifier your application will use to identify the course after import. Your application is responsible both for generating this unique ID and for keeping track of the ID for later use. | 
 **importRequest** | [**ImportFetchRequestSchema**](ImportFetchRequestSchema.md)|  | 
 **mayCreateNewVersion** | **Boolean**| Is it OK to create a new version of this course? If this is set to false and the course already exists, the upload will fail. If true and the course already exists then a new version will be created. No effect if the course doesn&#39;t already exist. | [optional] [default to false]
 **postbackUrl** | **String**| An optional parameter that specifies a URL to send a postback to when the course has finished uploading. | [optional] 

### Return type

[**StringResultSchema**](StringResultSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUploadAndImportCourseJob"></a>
# **createUploadAndImportCourseJob**
> StringResultSchema createUploadAndImportCourseJob(courseId, opts)

Upload a course and start an import job for it.

An import job will be started to import the posted file, and the import job ID will be returned. If the import is successful, the imported course will be registered using the courseId provided.

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.default;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.CourseApi();

var courseId = "courseId_example"; // String | A unique identifier your application will use to identify the course after import. Your application is responsible both for generating this unique ID and for keeping track of the ID for later use.

var opts = { 
  'mayCreateNewVersion': false, // Boolean | Is it OK to create a new version of this course? If this is set to false and the course already exists, the upload will fail. If true and the course already exists then a new version will be created. No effect if the course doesn't already exist.
  'file': "/path/to/file.txt", // File | The zip file of the course contents to import.
  'postbackUrl': "postbackUrl_example" // String | An optional parameter that specifies a URL to send a postback to when the course has finished uploading.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUploadAndImportCourseJob(courseId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**| A unique identifier your application will use to identify the course after import. Your application is responsible both for generating this unique ID and for keeping track of the ID for later use. | 
 **mayCreateNewVersion** | **Boolean**| Is it OK to create a new version of this course? If this is set to false and the course already exists, the upload will fail. If true and the course already exists then a new version will be created. No effect if the course doesn&#39;t already exist. | [optional] [default to false]
 **file** | **File**| The zip file of the course contents to import. | [optional] 
 **postbackUrl** | **String**| An optional parameter that specifies a URL to send a postback to when the course has finished uploading. | [optional] 

### Return type

[**StringResultSchema**](StringResultSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="deleteCourse"></a>
# **deleteCourse**
> deleteCourse(courseId)

Delete &#x60;courseId&#x60;

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.default;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.CourseApi();

var courseId = "courseId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCourse(courseId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCourseConfigurationSetting"></a>
# **deleteCourseConfigurationSetting**
> deleteCourseConfigurationSetting(courseIdsettingId)

Clears the &#x60;settingId&#x60; value for this course

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.default;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.CourseApi();

var courseId = "courseId_example"; // String | 

var settingId = "settingId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCourseConfigurationSetting(courseIdsettingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**|  | 
 **settingId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCourseVersion"></a>
# **deleteCourseVersion**
> deleteCourseVersion(courseIdversionId)

Delete version &#x60;versionId&#x60; of &#x60;courseId&#x60;

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.default;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.CourseApi();

var courseId = "courseId_example"; // String | 

var versionId = 56; // Integer | The course version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCourseVersion(courseIdversionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**|  | 
 **versionId** | **Integer**| The course version | 

### Return type

null (empty response body)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCourseVersionConfigurationSetting"></a>
# **deleteCourseVersionConfigurationSetting**
> deleteCourseVersionConfigurationSetting(courseIdversionIdsettingId)

Clears the &#x60;settingId&#x60; value for this course and version.

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.default;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.CourseApi();

var courseId = "courseId_example"; // String | 

var versionId = 56; // Integer | The course version

var settingId = "settingId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCourseVersionConfigurationSetting(courseIdversionIdsettingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**|  | 
 **versionId** | **Integer**| The course version | 
 **settingId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCourse"></a>
# **getCourse**
> CourseSchema getCourse(courseId, opts)

Get information about &#x60;courseId&#x60;

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.default;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.CourseApi();

var courseId = "courseId_example"; // String | 

var opts = { 
  'includeRegistrationCount': false, // Boolean | Include the registration count in the results
  'includeCourseMetadata': false // Boolean | Include course metadata in the results. If the course has no metadata, adding this parameter has no effect.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCourse(courseId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**|  | 
 **includeRegistrationCount** | **Boolean**| Include the registration count in the results | [optional] [default to false]
 **includeCourseMetadata** | **Boolean**| Include course metadata in the results. If the course has no metadata, adding this parameter has no effect. | [optional] [default to false]

### Return type

[**CourseSchema**](CourseSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCourseConfiguration"></a>
# **getCourseConfiguration**
> SettingListSchema getCourseConfiguration(courseId, opts)

Returns all configuration settings for this course

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.default;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.CourseApi();

var courseId = "courseId_example"; // String | 

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
apiInstance.getCourseConfiguration(courseId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**|  | 
 **includeMetadata** | **Boolean**|  | [optional] [default to false]

### Return type

[**SettingListSchema**](SettingListSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCourseStatements"></a>
# **getCourseStatements**
> XapiStatementResult getCourseStatements(courseId, opts)

Get xAPI statements for &#x60;courseId&#x60;

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.default;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.CourseApi();

var courseId = "courseId_example"; // String | 

var opts = { 
  'learnerId': "learnerId_example", // String | Only entries for the specified learner id will be included.
  'since': new Date("2013-10-20T19:20:30+01:00"), // Date | Only items updated since the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used.
  'until': new Date("2013-10-20T19:20:30+01:00"), // Date | Only items updated before the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used.
  'more': "more_example" // String | Value for this parameter will be provided in the 'more' property of registration lists, where needed. An opaque value, construction and parsing may change without notice.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCourseStatements(courseId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**|  | 
 **learnerId** | **String**| Only entries for the specified learner id will be included. | [optional] 
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

<a name="getCourseVersionConfiguration"></a>
# **getCourseVersionConfiguration**
> SettingListSchema getCourseVersionConfiguration(courseIdversionId, opts)

Returns all configuration settings for this course and version.

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.default;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.CourseApi();

var courseId = "courseId_example"; // String | 

var versionId = 56; // Integer | The course version

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
apiInstance.getCourseVersionConfiguration(courseIdversionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**|  | 
 **versionId** | **Integer**| The course version | 
 **includeMetadata** | **Boolean**|  | [optional] [default to false]

### Return type

[**SettingListSchema**](SettingListSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCourseVersionInfo"></a>
# **getCourseVersionInfo**
> CourseSchema getCourseVersionInfo(courseIdversionId, opts)

Get version &#x60;versionId&#x60; of &#x60;courseId&#x60;

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.default;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.CourseApi();

var courseId = "courseId_example"; // String | 

var versionId = 56; // Integer | The course version

var opts = { 
  'includeRegistrationCount': false, // Boolean | Include the registration count in the results
  'includeCourseMetadata': false // Boolean | Include course metadata in the results. If the course has no metadata, adding this parameter has no effect.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCourseVersionInfo(courseIdversionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**|  | 
 **versionId** | **Integer**| The course version | 
 **includeRegistrationCount** | **Boolean**| Include the registration count in the results | [optional] [default to false]
 **includeCourseMetadata** | **Boolean**| Include course metadata in the results. If the course has no metadata, adding this parameter has no effect. | [optional] [default to false]

### Return type

[**CourseSchema**](CourseSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCourseVersionStatements"></a>
# **getCourseVersionStatements**
> XapiStatementResult getCourseVersionStatements(courseIdversionId, opts)

Get xAPI statements for version &#x60;versionId&#x60; of &#x60;courseId&#x60;

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.default;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.CourseApi();

var courseId = "courseId_example"; // String | 

var versionId = 56; // Integer | The course version

var opts = { 
  'learnerId': "learnerId_example", // String | Only entries for the specified learner id will be included.
  'since': new Date("2013-10-20T19:20:30+01:00"), // Date | Only items updated since the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used.
  'until': new Date("2013-10-20T19:20:30+01:00"), // Date | Only items updated before the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used.
  'more': "more_example" // String | Value for this parameter will be provided in the 'more' property of registration lists, where needed. An opaque value, construction and parsing may change without notice.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCourseVersionStatements(courseIdversionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**|  | 
 **versionId** | **Integer**| The course version | 
 **learnerId** | **String**| Only entries for the specified learner id will be included. | [optional] 
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

<a name="getCourseVersions"></a>
# **getCourseVersions**
> CourseListNonPagedSchema getCourseVersions(courseId, opts)

Get all versions of &#x60;courseId&#x60;

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.default;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.CourseApi();

var courseId = "courseId_example"; // String | 

var opts = { 
  'since': new Date("2013-10-20T19:20:30+01:00"), // Date | Only items updated since the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used.
  'until': new Date("2013-10-20T19:20:30+01:00"), // Date | Only items updated before the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used.
  'includeRegistrationCount': false, // Boolean | Include the registration count in the results
  'includeCourseMetadata': false // Boolean | Include course metadata in the results. If the course has no metadata, adding this parameter has no effect.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCourseVersions(courseId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**|  | 
 **since** | **Date**| Only items updated since the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used. | [optional] 
 **until** | **Date**| Only items updated before the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used. | [optional] 
 **includeRegistrationCount** | **Boolean**| Include the registration count in the results | [optional] [default to false]
 **includeCourseMetadata** | **Boolean**| Include course metadata in the results. If the course has no metadata, adding this parameter has no effect. | [optional] [default to false]

### Return type

[**CourseListNonPagedSchema**](CourseListNonPagedSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCourses"></a>
# **getCourses**
> CourseListSchema getCourses(opts)

Get all courses for &#x60;appId&#x60;

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.default;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.CourseApi();

var opts = { 
  'more': "more_example" // String | Value for this parameter will be provided in the 'more' property of registration lists, where needed. An opaque value, construction and parsing may change without notice.
  'since': new Date("2013-10-20T19:20:30+01:00"), // Date | Only items updated since the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used.
  'until': new Date("2013-10-20T19:20:30+01:00"), // Date | Only items updated before the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used.
  'filter': "filter_example", // String | Optional string which filters results by a specified field (described by filterBy).
  'filterBy': "filterBy_example", // String | Optional enum parameter for specifying the field on which to run the filter.  Defaults to course_id.
  'orderBy': "orderBy_example", // String | Optional enum parameter for specifying the field and order by which to sort the results.  Defaults to creation_date_desc.
  'includeRegistrationCount': false, // Boolean | Include the registration count in the results
  'includeCourseMetadata': false // Boolean | Include course metadata in the results. If the course has no metadata, adding this parameter has no effect.
  'tags': ["tags_example"] // [String] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCourses(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **more** | **String**| Value for this parameter will be provided in the &#39;more&#39; property of registration lists, where needed. An opaque value, construction and parsing may change without notice. | [optional] 
 **since** | **Date**| Only items updated since the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used. | [optional] 
 **until** | **Date**| Only items updated before the specified ISO 8601 TimeStamp (inclusive) are included. If a time zone is not specified, UTC time zone will be used. | [optional] 
 **filter** | **String**| Optional string which filters results by a specified field (described by filterBy). | [optional] 
 **filterBy** | **String**| Optional enum parameter for specifying the field on which to run the filter.  Defaults to course_id. | [optional] 
 **orderBy** | **String**| Optional enum parameter for specifying the field and order by which to sort the results.  Defaults to creation_date_desc. | [optional] 
 **includeRegistrationCount** | **Boolean**| Include the registration count in the results | [optional] [default to false]
 **includeCourseMetadata** | **Boolean**| Include course metadata in the results. If the course has no metadata, adding this parameter has no effect. | [optional] [default to false]
 **tags** | [**[String]**](String.md)|  | [optional] 

### Return type

[**CourseListSchema**](CourseListSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getImportJobStatus"></a>
# **getImportJobStatus**
> ImportResultSchema getImportJobStatus(importJobId)

Check the status of an import job.

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.default;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.CourseApi();

var importJobId = "importJobId_example"; // String | Id received when the import job was submitted to the importJobs resource.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getImportJobStatus(importJobId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **importJobId** | **String**| Id received when the import job was submitted to the importJobs resource. | 

### Return type

[**ImportResultSchema**](ImportResultSchema.md)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setCourseConfiguration"></a>
# **setCourseConfiguration**
> setCourseConfiguration(courseIdconfigurationSettings)

Set configuration settings for this course.

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.default;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.CourseApi();

var courseId = "courseId_example"; // String | 

var configurationSettings = new RusticiSoftwareCloudV2.SettingsPostSchema(); // SettingsPostSchema | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setCourseConfiguration(courseIdconfigurationSettings, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**|  | 
 **configurationSettings** | [**SettingsPostSchema**](SettingsPostSchema.md)|  | 

### Return type

null (empty response body)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setCourseTitle"></a>
# **setCourseTitle**
> &#39;String&#39; setCourseTitle(courseIdtitle)

Sets the course title for &#x60;courseId&#x60;

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.default;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.CourseApi();

var courseId = "courseId_example"; // String | 

var title = new RusticiSoftwareCloudV2.TitleSchema(); // TitleSchema | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setCourseTitle(courseIdtitle, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**|  | 
 **title** | [**TitleSchema**](TitleSchema.md)|  | 

### Return type

**&#39;String&#39;**

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setCourseVersionConfiguration"></a>
# **setCourseVersionConfiguration**
> setCourseVersionConfiguration(courseIdversionIdconfigurationSettings)

Set configuration settings for this course and version.

### Example
```javascript
var RusticiSoftwareCloudV2 = require('rustici-software-cloud-v2');
var defaultClient = RusticiSoftwareCloudV2.ApiClient.default;

// Configure HTTP basic authorization: APP_NORMAL
var APP_NORMAL = defaultClient.authentications['APP_NORMAL'];
APP_NORMAL.username = 'YOUR USERNAME';
APP_NORMAL.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: OAUTH
var OAUTH = defaultClient.authentications['OAUTH'];
OAUTH.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new RusticiSoftwareCloudV2.CourseApi();

var courseId = "courseId_example"; // String | 

var versionId = 56; // Integer | The course version

var configurationSettings = new RusticiSoftwareCloudV2.SettingsPostSchema(); // SettingsPostSchema | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.setCourseVersionConfiguration(courseIdversionIdconfigurationSettings, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**|  | 
 **versionId** | **Integer**| The course version | 
 **configurationSettings** | [**SettingsPostSchema**](SettingsPostSchema.md)|  | 

### Return type

null (empty response body)

### Authorization

[APP_NORMAL](../README.md#APP_NORMAL), [OAUTH](../README.md#OAUTH)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

