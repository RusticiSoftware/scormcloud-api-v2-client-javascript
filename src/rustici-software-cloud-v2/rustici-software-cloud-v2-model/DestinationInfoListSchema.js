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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/DestinationInfoIdSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DestinationInfoIdSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.DestinationInfoListSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.DestinationInfoIdSchema);
  }
}(this, function(ApiClient, DestinationInfoIdSchema) {
  'use strict';

  /**
   * The DestinationInfoListSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/DestinationInfoListSchema
   */

  /**
   * Constructs a new <code>DestinationInfoListSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/DestinationInfoListSchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DestinationInfoListSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/DestinationInfoListSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/DestinationInfoListSchema} The populated <code>DestinationInfoListSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('destinations'))
        obj.destinations = ApiClient.convertToType(data['destinations'], [DestinationInfoIdSchema]);
      if (data.hasOwnProperty('more'))
        obj.more = ApiClient.convertToType(data['more'], 'String');
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/DestinationInfoIdSchema>} destinations
   */
  exports.prototype.destinations = undefined;

  /**
   * Token for getting the next set of results, from the prior set of results.
   * @member {String} more
   */
  exports.prototype.more = undefined;


  return exports;

}));
