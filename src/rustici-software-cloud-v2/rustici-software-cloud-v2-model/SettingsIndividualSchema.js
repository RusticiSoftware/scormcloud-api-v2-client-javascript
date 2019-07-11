/**
 * SCORM Cloud Rest API
 * REST API used for SCORM Cloud integrations.
 *
 * OpenAPI spec version: 2.0 beta
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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
    root.RusticiSoftwareCloudV2.SettingsIndividualSchema = factory(root.RusticiSoftwareCloudV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SettingsIndividualSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/SettingsIndividualSchema
   * @version 1.1.0-beta
   */

  /**
   * Constructs a new <code>SettingsIndividualSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/SettingsIndividualSchema
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>SettingsIndividualSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/SettingsIndividualSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/SettingsIndividualSchema} The populated <code>SettingsIndividualSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('settingId')) {
        obj['settingId'] = ApiClient.convertToType(data['settingId'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('explicit')) {
        obj['explicit'] = ApiClient.convertToType(data['explicit'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} settingId
   */
  exports.prototype['settingId'] = undefined;
  /**
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * @member {Boolean} explicit
   * @default false
   */
  exports.prototype['explicit'] = false;



  return exports;
}));

