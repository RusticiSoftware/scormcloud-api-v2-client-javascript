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
    root.RusticiSoftwareCloudV2.UpdateConnectorSchema = factory(root.RusticiSoftwareCloudV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UpdateConnectorSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/UpdateConnectorSchema
   */

  /**
   * Constructs a new <code>UpdateConnectorSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/UpdateConnectorSchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateConnectorSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/UpdateConnectorSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/UpdateConnectorSchema} The populated <code>UpdateConnectorSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('configuration'))
        obj.configuration = ApiClient.convertToType(data['configuration'], Object);
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
    }
    return obj;
  }

  /**
   * configuration for this content connector, format is implementation specific
   * @member {Object} configuration
   */
  exports.prototype.configuration = undefined;

  /**
   * is this connector enabled
   * @member {Boolean} enabled
   */
  exports.prototype.enabled = undefined;


  return exports;

}));
