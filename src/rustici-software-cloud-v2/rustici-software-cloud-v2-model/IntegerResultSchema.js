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
    root.RusticiSoftwareCloudV2.IntegerResultSchema = factory(root.RusticiSoftwareCloudV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The IntegerResultSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/IntegerResultSchema
   */

  /**
   * Constructs a new <code>IntegerResultSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/IntegerResultSchema
   * @class
   * @param result {Number} 
   */
  var exports = function(result) {
    this.result = result;
  };

  /**
   * Constructs a <code>IntegerResultSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/IntegerResultSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/IntegerResultSchema} The populated <code>IntegerResultSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('result'))
        obj.result = ApiClient.convertToType(data['result'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} result
   */
  exports.prototype.result = undefined;


  return exports;

}));
