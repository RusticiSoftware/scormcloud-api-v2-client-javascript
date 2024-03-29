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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/ScoreSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ScoreSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.ObjectiveSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.ScoreSchema);
  }
}(this, function(ApiClient, ScoreSchema) {
  'use strict';

  /**
   * The ObjectiveSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/ObjectiveSchema
   */

  /**
   * Constructs a new <code>ObjectiveSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ObjectiveSchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ObjectiveSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ObjectiveSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ObjectiveSchema} The populated <code>ObjectiveSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('primary'))
        obj.primary = ApiClient.convertToType(data['primary'], 'Boolean');
      if (data.hasOwnProperty('score'))
        obj.score = ScoreSchema.constructFromObject(data['score']);
      if (data.hasOwnProperty('scoreMax'))
        obj.scoreMax = ApiClient.convertToType(data['scoreMax'], 'Number');
      if (data.hasOwnProperty('scoreMin'))
        obj.scoreMin = ApiClient.convertToType(data['scoreMin'], 'Number');
      if (data.hasOwnProperty('scoreRaw'))
        obj.scoreRaw = ApiClient.convertToType(data['scoreRaw'], 'Number');
      if (data.hasOwnProperty('previousScoreScaled'))
        obj.previousScoreScaled = ApiClient.convertToType(data['previousScoreScaled'], 'Number');
      if (data.hasOwnProperty('firstScoreScaled'))
        obj.firstScoreScaled = ApiClient.convertToType(data['firstScoreScaled'], 'Number');
      if (data.hasOwnProperty('progressMeasure'))
        obj.progressMeasure = ApiClient.convertToType(data['progressMeasure'], 'Number');
      if (data.hasOwnProperty('firstSuccessTimeStamp'))
        obj.firstSuccessTimeStamp = ApiClient.convertToType(data['firstSuccessTimeStamp'], 'String');
      if (data.hasOwnProperty('objectiveCompletion'))
        obj.objectiveCompletion = ApiClient.convertToType(data['objectiveCompletion'], 'String');
      if (data.hasOwnProperty('objectiveSuccess'))
        obj.objectiveSuccess = ApiClient.convertToType(data['objectiveSuccess'], 'String');
      if (data.hasOwnProperty('previousObjectiveSuccess'))
        obj.previousObjectiveSuccess = ApiClient.convertToType(data['previousObjectiveSuccess'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Boolean} primary
   */
  exports.prototype.primary = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ScoreSchema} score
   */
  exports.prototype.score = undefined;

  /**
   * @member {Number} scoreMax
   */
  exports.prototype.scoreMax = undefined;

  /**
   * @member {Number} scoreMin
   */
  exports.prototype.scoreMin = undefined;

  /**
   * @member {Number} scoreRaw
   */
  exports.prototype.scoreRaw = undefined;

  /**
   * @member {Number} previousScoreScaled
   */
  exports.prototype.previousScoreScaled = undefined;

  /**
   * @member {Number} firstScoreScaled
   */
  exports.prototype.firstScoreScaled = undefined;

  /**
   * @member {Number} progressMeasure
   */
  exports.prototype.progressMeasure = undefined;

  /**
   * @member {String} firstSuccessTimeStamp
   */
  exports.prototype.firstSuccessTimeStamp = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ObjectiveSchema.ObjectiveCompletionEnum} objectiveCompletion
   * @default 'UNKNOWN'
   */
  exports.prototype.objectiveCompletion = 'UNKNOWN';

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ObjectiveSchema.ObjectiveSuccessEnum} objectiveSuccess
   * @default 'UNKNOWN'
   */
  exports.prototype.objectiveSuccess = 'UNKNOWN';

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ObjectiveSchema.PreviousObjectiveSuccessEnum} previousObjectiveSuccess
   * @default 'UNKNOWN'
   */
  exports.prototype.previousObjectiveSuccess = 'UNKNOWN';



  /**
   * Allowed values for the <code>objectiveCompletion</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectiveCompletionEnum = {
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
    INCOMPLETE: "INCOMPLETE"
  };


  /**
   * Allowed values for the <code>objectiveSuccess</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectiveSuccessEnum = {
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
   * Allowed values for the <code>previousObjectiveSuccess</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PreviousObjectiveSuccessEnum = {
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
