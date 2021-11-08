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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/PingSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../rustici-software-cloud-v2-model/PingSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.PingApi = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.PingSchema);
  }
}(this, function(ApiClient, PingSchema) {
  'use strict';

  /**
   * Ping service.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-api/PingApi
   * @version 2.0.1
   */

  /**
   * Constructs a new PingApi. 
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/PingApi
   * @class
   * @param {module:rustici-software-cloud-v2/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:rustici-software-cloud-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the pingAppId operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/PingApi~pingAppIdCallback
     * @param {String} error Error message, if any.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PingSchema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ping the API 
     * Get back a message indicating that the API is working. 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/PingApi~pingAppIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PingSchema}
     */
    this.pingAppId = function(callback) {
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
      var returnType = PingSchema;

      return this.apiClient.callApi(
        '/ping', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
