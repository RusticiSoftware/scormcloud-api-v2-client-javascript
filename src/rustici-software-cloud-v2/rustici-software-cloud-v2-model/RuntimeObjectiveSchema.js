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
    root.RusticiSoftwareCloudV2.RuntimeObjectiveSchema = factory(root.RusticiSoftwareCloudV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RuntimeObjectiveSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/RuntimeObjectiveSchema
   */

  /**
   * Constructs a new <code>RuntimeObjectiveSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/RuntimeObjectiveSchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RuntimeObjectiveSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/RuntimeObjectiveSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/RuntimeObjectiveSchema} The populated <code>RuntimeObjectiveSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('scoreScaled'))
        obj.scoreScaled = ApiClient.convertToType(data['scoreScaled'], 'String');
      if (data.hasOwnProperty('scoreMin'))
        obj.scoreMin = ApiClient.convertToType(data['scoreMin'], 'String');
      if (data.hasOwnProperty('scoreMax'))
        obj.scoreMax = ApiClient.convertToType(data['scoreMax'], 'String');
      if (data.hasOwnProperty('scoreRaw'))
        obj.scoreRaw = ApiClient.convertToType(data['scoreRaw'], 'String');
      if (data.hasOwnProperty('runtimeObjectiveSuccessStatus'))
        obj.runtimeObjectiveSuccessStatus = ApiClient.convertToType(data['runtimeObjectiveSuccessStatus'], 'String');
      if (data.hasOwnProperty('runtimeObjectiveCompletionStatus'))
        obj.runtimeObjectiveCompletionStatus = ApiClient.convertToType(data['runtimeObjectiveCompletionStatus'], 'String');
      if (data.hasOwnProperty('progressMeasure'))
        obj.progressMeasure = ApiClient.convertToType(data['progressMeasure'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} scoreScaled
   */
  exports.prototype.scoreScaled = undefined;

  /**
   * @member {String} scoreMin
   */
  exports.prototype.scoreMin = undefined;

  /**
   * @member {String} scoreMax
   */
  exports.prototype.scoreMax = undefined;

  /**
   * @member {String} scoreRaw
   */
  exports.prototype.scoreRaw = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/RuntimeObjectiveSchema.RuntimeObjectiveSuccessStatusEnum} runtimeObjectiveSuccessStatus
   * @default 'UNKNOWN'
   */
  exports.prototype.runtimeObjectiveSuccessStatus = 'UNKNOWN';

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/RuntimeObjectiveSchema.RuntimeObjectiveCompletionStatusEnum} runtimeObjectiveCompletionStatus
   * @default 'UNKNOWN'
   */
  exports.prototype.runtimeObjectiveCompletionStatus = 'UNKNOWN';

  /**
   * @member {String} progressMeasure
   */
  exports.prototype.progressMeasure = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;



  /**
   * Allowed values for the <code>runtimeObjectiveSuccessStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RuntimeObjectiveSuccessStatusEnum = {
    /**
     * value: "UNKNOWN"
     * @const
     */
    UNKNOWN: "UNKNOWN",

    /**
     * value: "PASSED"
     * @const
     */
    PASSED: "PASSED",

    /**
     * value: "FAILED"
     * @const
     */
    FAILED: "FAILED"
  };


  /**
   * Allowed values for the <code>runtimeObjectiveCompletionStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RuntimeObjectiveCompletionStatusEnum = {
    /**
     * value: "UNKNOWN"
     * @const
     */
    UNKNOWN: "UNKNOWN",

    /**
     * value: "COMPLETED"
     * @const
     */
    COMPLETED: "COMPLETED",

    /**
     * value: "INCOMPLETE"
     * @const
     */
    INCOMPLETE: "INCOMPLETE",

    /**
     * value: "NOT_ATTEMPTED"
     * @const
     */
    NOT_ATTEMPTED: "NOT_ATTEMPTED",

    /**
     * value: "BROWSED"
     * @const
     */
    BROWSED: "BROWSED"
  };

  return exports;

}));
