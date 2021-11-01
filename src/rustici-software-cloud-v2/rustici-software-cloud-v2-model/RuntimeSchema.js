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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/CommentSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/LearnerPreferenceSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/RuntimeInteractionSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/RuntimeObjectiveSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CommentSchema'), require('./LearnerPreferenceSchema'), require('./RuntimeInteractionSchema'), require('./RuntimeObjectiveSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.RuntimeSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.CommentSchema, root.RusticiSoftwareCloudV2.LearnerPreferenceSchema, root.RusticiSoftwareCloudV2.RuntimeInteractionSchema, root.RusticiSoftwareCloudV2.RuntimeObjectiveSchema);
  }
}(this, function(ApiClient, CommentSchema, LearnerPreferenceSchema, RuntimeInteractionSchema, RuntimeObjectiveSchema) {
  'use strict';

  /**
   * The RuntimeSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/RuntimeSchema
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>RuntimeSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/RuntimeSchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RuntimeSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/RuntimeSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/RuntimeSchema} The populated <code>RuntimeSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('completionStatus'))
        obj.completionStatus = ApiClient.convertToType(data['completionStatus'], 'String');
      if (data.hasOwnProperty('credit'))
        obj.credit = ApiClient.convertToType(data['credit'], 'String');
      if (data.hasOwnProperty('entry'))
        obj.entry = ApiClient.convertToType(data['entry'], 'String');
      if (data.hasOwnProperty('exit'))
        obj.exit = ApiClient.convertToType(data['exit'], 'String');
      if (data.hasOwnProperty('learnerPreference'))
        obj.learnerPreference = LearnerPreferenceSchema.constructFromObject(data['learnerPreference']);
      if (data.hasOwnProperty('location'))
        obj.location = ApiClient.convertToType(data['location'], 'String');
      if (data.hasOwnProperty('mode'))
        obj.mode = ApiClient.convertToType(data['mode'], 'String');
      if (data.hasOwnProperty('progressMeasure'))
        obj.progressMeasure = ApiClient.convertToType(data['progressMeasure'], 'String');
      if (data.hasOwnProperty('scoreScaled'))
        obj.scoreScaled = ApiClient.convertToType(data['scoreScaled'], 'String');
      if (data.hasOwnProperty('scoreRaw'))
        obj.scoreRaw = ApiClient.convertToType(data['scoreRaw'], 'String');
      if (data.hasOwnProperty('scoreMin'))
        obj.scoreMin = ApiClient.convertToType(data['scoreMin'], 'String');
      if (data.hasOwnProperty('scoreMax'))
        obj.scoreMax = ApiClient.convertToType(data['scoreMax'], 'String');
      if (data.hasOwnProperty('totalTime'))
        obj.totalTime = ApiClient.convertToType(data['totalTime'], 'String');
      if (data.hasOwnProperty('timeTracked'))
        obj.timeTracked = ApiClient.convertToType(data['timeTracked'], 'String');
      if (data.hasOwnProperty('runtimeSuccessStatus'))
        obj.runtimeSuccessStatus = ApiClient.convertToType(data['runtimeSuccessStatus'], 'String');
      if (data.hasOwnProperty('suspendData'))
        obj.suspendData = ApiClient.convertToType(data['suspendData'], 'String');
      if (data.hasOwnProperty('learnerComments'))
        obj.learnerComments = ApiClient.convertToType(data['learnerComments'], [CommentSchema]);
      if (data.hasOwnProperty('lmsComments'))
        obj.lmsComments = ApiClient.convertToType(data['lmsComments'], [CommentSchema]);
      if (data.hasOwnProperty('runtimeInteractions'))
        obj.runtimeInteractions = ApiClient.convertToType(data['runtimeInteractions'], [RuntimeInteractionSchema]);
      if (data.hasOwnProperty('runtimeObjectives'))
        obj.runtimeObjectives = ApiClient.convertToType(data['runtimeObjectives'], [RuntimeObjectiveSchema]);
    }
    return obj;
  }

  /**
   * @member {String} completionStatus
   */
  exports.prototype.completionStatus = undefined;

  /**
   * @member {String} credit
   */
  exports.prototype.credit = undefined;

  /**
   * @member {String} entry
   */
  exports.prototype.entry = undefined;

  /**
   * @member {String} exit
   */
  exports.prototype.exit = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/LearnerPreferenceSchema} learnerPreference
   */
  exports.prototype.learnerPreference = undefined;

  /**
   * @member {String} location
   */
  exports.prototype.location = undefined;

  /**
   * @member {String} mode
   */
  exports.prototype.mode = undefined;

  /**
   * @member {String} progressMeasure
   */
  exports.prototype.progressMeasure = undefined;

  /**
   * @member {String} scoreScaled
   */
  exports.prototype.scoreScaled = undefined;

  /**
   * @member {String} scoreRaw
   */
  exports.prototype.scoreRaw = undefined;

  /**
   * @member {String} scoreMin
   */
  exports.prototype.scoreMin = undefined;

  /**
   * @member {String} scoreMax
   */
  exports.prototype.scoreMax = undefined;

  /**
   * @member {String} totalTime
   */
  exports.prototype.totalTime = undefined;

  /**
   * @member {String} timeTracked
   */
  exports.prototype.timeTracked = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/RuntimeSchema.RuntimeSuccessStatusEnum} runtimeSuccessStatus
   * @default 'UNKNOWN'
   */
  exports.prototype.runtimeSuccessStatus = 'UNKNOWN';

  /**
   * @member {String} suspendData
   */
  exports.prototype.suspendData = undefined;

  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CommentSchema>} learnerComments
   */
  exports.prototype.learnerComments = undefined;

  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CommentSchema>} lmsComments
   */
  exports.prototype.lmsComments = undefined;

  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/RuntimeInteractionSchema>} runtimeInteractions
   */
  exports.prototype.runtimeInteractions = undefined;

  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/RuntimeObjectiveSchema>} runtimeObjectives
   */
  exports.prototype.runtimeObjectives = undefined;



  /**
   * Allowed values for the <code>runtimeSuccessStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RuntimeSuccessStatusEnum = {
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

  return exports;

}));
