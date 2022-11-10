/*
 * SCORM Cloud Rest API
 * REST API used for SCORM Cloud integrations.
 *
 * OpenAPI spec version: 2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.27
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/EnabledSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/MessageSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/StringResultSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/ZoomiCompanyId', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/ZoomiCourseOptionsSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../rustici-software-cloud-v2-model/EnabledSchema'), require('../rustici-software-cloud-v2-model/MessageSchema'), require('../rustici-software-cloud-v2-model/StringResultSchema'), require('../rustici-software-cloud-v2-model/ZoomiCompanyId'), require('../rustici-software-cloud-v2-model/ZoomiCourseOptionsSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.ZoomiApi = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.EnabledSchema, root.RusticiSoftwareCloudV2.MessageSchema, root.RusticiSoftwareCloudV2.StringResultSchema, root.RusticiSoftwareCloudV2.ZoomiCompanyId, root.RusticiSoftwareCloudV2.ZoomiCourseOptionsSchema);
  }
}(this, function(ApiClient, EnabledSchema, MessageSchema, StringResultSchema, ZoomiCompanyId, ZoomiCourseOptionsSchema) {
  'use strict';

  /**
   * Zoomi service.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-api/ZoomiApi
   */

  /**
   * Constructs a new ZoomiApi. 
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ZoomiApi
   * @class
   * @param {module:rustici-software-cloud-v2/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:rustici-software-cloud-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteApplicationZoomiKeys operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ZoomiApi~deleteApplicationZoomiKeysCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the Zoomi keys for an Application 
     * Deletes the Zoomi keys for an application. 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ZoomiApi~deleteApplicationZoomiKeysCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteApplicationZoomiKeys = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/zoomi/key', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteZoomiCourse operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ZoomiApi~deleteZoomiCourseCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the Course from Zoomi 
     * Deletes the course from Zoomi, but the course will remain in SCORM Cloud. 
     * @param {String} courseId 
     * @param {Number} versionId 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ZoomiApi~deleteZoomiCourseCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteZoomiCourse = function(courseId, versionId, callback) {
      var postBody = null;

      // verify the required parameter 'courseId' is set
      if (courseId === undefined || courseId === null) {
        throw new Error("Missing the required parameter 'courseId' when calling deleteZoomiCourse");
      }

      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling deleteZoomiCourse");
      }


      var pathParams = {
        'courseId': courseId,
        'versionId': versionId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/zoomi/course/{courseId}/version/{versionId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getApplicationZoomiCompanyId operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ZoomiApi~getApplicationZoomiCompanyIdCallback
     * @param {String} error Error message, if any.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/StringResultSchema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the Zoomi company ID of an Application 
     * Returns the Zoomi company ID of an application. 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ZoomiApi~getApplicationZoomiCompanyIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/StringResultSchema}
     */
    this.getApplicationZoomiCompanyId = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = StringResultSchema;

      return this.apiClient.callApi(
        '/zoomi', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getApplicationZoomiPublicKey operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ZoomiApi~getApplicationZoomiPublicKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/StringResultSchema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the Zoomi public key for an Application 
     * Returns the Zoomi public key for an application. 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ZoomiApi~getApplicationZoomiPublicKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/StringResultSchema}
     */
    this.getApplicationZoomiPublicKey = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = StringResultSchema;

      return this.apiClient.callApi(
        '/zoomi/key', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCourseZoomiEnabled operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ZoomiApi~getCourseZoomiEnabledCallback
     * @param {String} error Error message, if any.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/EnabledSchema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the Zoomi enabled value of a Course Version 
     * Returns the Zoomi enabled value of a course version. 
     * @param {String} courseId 
     * @param {Number} versionId 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ZoomiApi~getCourseZoomiEnabledCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/EnabledSchema}
     */
    this.getCourseZoomiEnabled = function(courseId, versionId, callback) {
      var postBody = null;

      // verify the required parameter 'courseId' is set
      if (courseId === undefined || courseId === null) {
        throw new Error("Missing the required parameter 'courseId' when calling getCourseZoomiEnabled");
      }

      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling getCourseZoomiEnabled");
      }


      var pathParams = {
        'courseId': courseId,
        'versionId': versionId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EnabledSchema;

      return this.apiClient.callApi(
        '/zoomi/course/{courseId}/version/{versionId}/enabled', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getZoomiCourseStatus operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ZoomiApi~getZoomiCourseStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/StringResultSchema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the status for a Course from Zoomi 
     * Returns the status for a course and starts the upload process to Zoomi if not started. 
     * @param {String} courseId 
     * @param {Number} versionId 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ZoomiApi~getZoomiCourseStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/StringResultSchema}
     */
    this.getZoomiCourseStatus = function(courseId, versionId, callback) {
      var postBody = null;

      // verify the required parameter 'courseId' is set
      if (courseId === undefined || courseId === null) {
        throw new Error("Missing the required parameter 'courseId' when calling getZoomiCourseStatus");
      }

      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling getZoomiCourseStatus");
      }


      var pathParams = {
        'courseId': courseId,
        'versionId': versionId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = StringResultSchema;

      return this.apiClient.callApi(
        '/zoomi/course/{courseId}/version/{versionId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the importCourseVersionToZoomi operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ZoomiApi~importCourseVersionToZoomiCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Begin the import process with Zoomi 
     * Begins the import process with Zoomi.  Must be followed up by a status call. 
     * @param {String} courseId 
     * @param {Number} versionId 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ZoomiCourseOptionsSchema} zoomiCourseOptions 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ZoomiApi~importCourseVersionToZoomiCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.importCourseVersionToZoomi = function(courseId, versionId, zoomiCourseOptions, callback) {
      var postBody = zoomiCourseOptions;

      // verify the required parameter 'courseId' is set
      if (courseId === undefined || courseId === null) {
        throw new Error("Missing the required parameter 'courseId' when calling importCourseVersionToZoomi");
      }

      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling importCourseVersionToZoomi");
      }

      // verify the required parameter 'zoomiCourseOptions' is set
      if (zoomiCourseOptions === undefined || zoomiCourseOptions === null) {
        throw new Error("Missing the required parameter 'zoomiCourseOptions' when calling importCourseVersionToZoomi");
      }


      var pathParams = {
        'courseId': courseId,
        'versionId': versionId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/zoomi/course/{courseId}/version/{versionId}/import', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setApplicationZoomiCompanyId operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ZoomiApi~setApplicationZoomiCompanyIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the Zoomi company ID of an Application 
     * Sets the Zoomi company ID value of an application. 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ZoomiCompanyId} zoomiCompanyId 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ZoomiApi~setApplicationZoomiCompanyIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setApplicationZoomiCompanyId = function(zoomiCompanyId, callback) {
      var postBody = zoomiCompanyId;

      // verify the required parameter 'zoomiCompanyId' is set
      if (zoomiCompanyId === undefined || zoomiCompanyId === null) {
        throw new Error("Missing the required parameter 'zoomiCompanyId' when calling setApplicationZoomiCompanyId");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/zoomi', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setCourseZoomiEnabled operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ZoomiApi~setCourseZoomiEnabledCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the Zoomi enabled value of a Course Version 
     * Sets the Zoomi enabled value of a course version. 
     * @param {String} courseId 
     * @param {Number} versionId 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/EnabledSchema} enabled 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/ZoomiApi~setCourseZoomiEnabledCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setCourseZoomiEnabled = function(courseId, versionId, enabled, callback) {
      var postBody = enabled;

      // verify the required parameter 'courseId' is set
      if (courseId === undefined || courseId === null) {
        throw new Error("Missing the required parameter 'courseId' when calling setCourseZoomiEnabled");
      }

      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling setCourseZoomiEnabled");
      }

      // verify the required parameter 'enabled' is set
      if (enabled === undefined || enabled === null) {
        throw new Error("Missing the required parameter 'enabled' when calling setCourseZoomiEnabled");
      }


      var pathParams = {
        'courseId': courseId,
        'versionId': versionId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/zoomi/course/{courseId}/version/{versionId}/enabled', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
