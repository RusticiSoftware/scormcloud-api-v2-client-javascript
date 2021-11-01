/*
 * SCORM Cloud Rest API
 * REST API used for SCORM Cloud integrations.
 *
 * OpenAPI spec version: 2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/AboutSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../rustici-software-cloud-v2-model/AboutSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.AboutApi = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.AboutSchema);
  }
}(this, function(ApiClient, AboutSchema) {
  'use strict';

  /**
   * About service.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-api/AboutApi
   * @version 2.0.0
   */

  /**
   * Constructs a new AboutApi. 
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/AboutApi
   * @class
   * @param {module:rustici-software-cloud-v2/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:rustici-software-cloud-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAbout operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/AboutApi~getAboutCallback
     * @param {String} error Error message, if any.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/AboutSchema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get back the API version and Application name 
     * Get back the API version and application name.  The return value for this method will never change. This method largely exists for API parity with our on-premise or Managed Hosting products, which may return different release numbers from this endpoint.  For SCORM Cloud, this is effectively equal to the `/ping` resource. 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/AboutApi~getAboutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/AboutSchema}
     */
    this.getAbout = function(callback) {
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
      var returnType = AboutSchema;

      return this.apiClient.callApi(
        '/about', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
