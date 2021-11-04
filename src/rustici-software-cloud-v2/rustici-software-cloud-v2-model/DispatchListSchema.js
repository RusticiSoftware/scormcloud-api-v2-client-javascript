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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/DispatchIdSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DispatchIdSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.DispatchListSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.DispatchIdSchema);
  }
}(this, function(ApiClient, DispatchIdSchema) {
  'use strict';

  /**
   * The DispatchListSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/DispatchListSchema
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>DispatchListSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/DispatchListSchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DispatchListSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/DispatchListSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/DispatchListSchema} The populated <code>DispatchListSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('dispatches'))
        obj.dispatches = ApiClient.convertToType(data['dispatches'], [DispatchIdSchema]);
      if (data.hasOwnProperty('more'))
        obj.more = ApiClient.convertToType(data['more'], 'String');
    }
    return obj;
  }

  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/DispatchIdSchema>} dispatches
   */
  exports.prototype.dispatches = undefined;

  /**
   * Token for getting the next set of results, from the prior set of results.
   * @member {String} more
   */
  exports.prototype.more = undefined;


  return exports;

}));
