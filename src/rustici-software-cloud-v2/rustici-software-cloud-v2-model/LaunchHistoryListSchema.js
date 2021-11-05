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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/LaunchHistorySchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LaunchHistorySchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.LaunchHistoryListSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.LaunchHistorySchema);
  }
}(this, function(ApiClient, LaunchHistorySchema) {
  'use strict';

  /**
   * The LaunchHistoryListSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/LaunchHistoryListSchema
   * @version 2.0.1
   */

  /**
   * Constructs a new <code>LaunchHistoryListSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/LaunchHistoryListSchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LaunchHistoryListSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/LaunchHistoryListSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/LaunchHistoryListSchema} The populated <code>LaunchHistoryListSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('launchHistory'))
        obj.launchHistory = ApiClient.convertToType(data['launchHistory'], [LaunchHistorySchema]);
    }
    return obj;
  }

  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/LaunchHistorySchema>} launchHistory
   */
  exports.prototype.launchHistory = undefined;


  return exports;

}));
