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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/SettingsIndividualSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SettingsIndividualSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.SettingsPostSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.SettingsIndividualSchema);
  }
}(this, function(ApiClient, SettingsIndividualSchema) {
  'use strict';




  /**
   * The SettingsPostSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/SettingsPostSchema
   * @version 1.1.0-beta
   */

  /**
   * Constructs a new <code>SettingsPostSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/SettingsPostSchema
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SettingsPostSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/SettingsPostSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/SettingsPostSchema} The populated <code>SettingsPostSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('settings')) {
        obj['settings'] = ApiClient.convertToType(data['settings'], [SettingsIndividualSchema]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/SettingsIndividualSchema>} settings
   */
  exports.prototype['settings'] = undefined;



  return exports;
}));

