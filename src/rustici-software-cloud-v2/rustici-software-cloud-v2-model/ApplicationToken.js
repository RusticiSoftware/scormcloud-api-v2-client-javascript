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
    define(['rustici-software-cloud-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.ApplicationToken = factory(root.RusticiSoftwareCloudV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ApplicationToken model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/ApplicationToken
   */

  /**
   * Constructs a new <code>ApplicationToken</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ApplicationToken
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ApplicationToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ApplicationToken} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ApplicationToken} The populated <code>ApplicationToken</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('access_token'))
        obj.accessToken = ApiClient.convertToType(data['access_token'], 'String');
      if (data.hasOwnProperty('expires_in'))
        obj.expiresIn = ApiClient.convertToType(data['expires_in'], 'Number');
      if (data.hasOwnProperty('token_type'))
        obj.tokenType = ApiClient.convertToType(data['token_type'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} accessToken
   */
  exports.prototype.accessToken = undefined;

  /**
   * @member {Number} expiresIn
   */
  exports.prototype.expiresIn = undefined;

  /**
   * @member {String} tokenType
   */
  exports.prototype.tokenType = undefined;


  return exports;

}));
