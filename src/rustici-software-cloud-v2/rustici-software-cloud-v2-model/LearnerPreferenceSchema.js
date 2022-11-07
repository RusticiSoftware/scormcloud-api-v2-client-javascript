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
    root.RusticiSoftwareCloudV2.LearnerPreferenceSchema = factory(root.RusticiSoftwareCloudV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LearnerPreferenceSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/LearnerPreferenceSchema
   */

  /**
   * Constructs a new <code>LearnerPreferenceSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/LearnerPreferenceSchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LearnerPreferenceSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/LearnerPreferenceSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/LearnerPreferenceSchema} The populated <code>LearnerPreferenceSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('audioLevel'))
        obj.audioLevel = ApiClient.convertToType(data['audioLevel'], 'Number');
      if (data.hasOwnProperty('language'))
        obj.language = ApiClient.convertToType(data['language'], 'String');
      if (data.hasOwnProperty('deliverySpeed'))
        obj.deliverySpeed = ApiClient.convertToType(data['deliverySpeed'], 'Number');
      if (data.hasOwnProperty('audioCaptioning'))
        obj.audioCaptioning = ApiClient.convertToType(data['audioCaptioning'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} audioLevel
   */
  exports.prototype.audioLevel = undefined;

  /**
   * @member {String} language
   */
  exports.prototype.language = undefined;

  /**
   * @member {Number} deliverySpeed
   */
  exports.prototype.deliverySpeed = undefined;

  /**
   * @member {Number} audioCaptioning
   */
  exports.prototype.audioCaptioning = undefined;


  return exports;

}));
