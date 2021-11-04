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
    define(['rustici-software-cloud-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.PingSchema = factory(root.RusticiSoftwareCloudV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PingSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/PingSchema
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>PingSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PingSchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PingSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PingSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PingSchema} The populated <code>PingSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('apiMessage'))
        obj.apiMessage = ApiClient.convertToType(data['apiMessage'], 'String');
      if (data.hasOwnProperty('currentTime'))
        obj.currentTime = ApiClient.convertToType(data['currentTime'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} apiMessage
   */
  exports.prototype.apiMessage = undefined;

  /**
   * @member {String} currentTime
   */
  exports.prototype.currentTime = undefined;


  return exports;

}));
