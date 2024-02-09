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
    root.RusticiSoftwareCloudV2.LaunchHistorySchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.ScoreSchema);
  }
}(this, function(ApiClient, ScoreSchema) {
  'use strict';

  /**
   * The LaunchHistorySchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/LaunchHistorySchema
   */

  /**
   * Constructs a new <code>LaunchHistorySchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/LaunchHistorySchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LaunchHistorySchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/LaunchHistorySchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/LaunchHistorySchema} The populated <code>LaunchHistorySchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('instance'))
        obj.instance = ApiClient.convertToType(data['instance'], 'Number');
      if (data.hasOwnProperty('score'))
        obj.score = ScoreSchema.constructFromObject(data['score']);
      if (data.hasOwnProperty('completionStatus'))
        obj.completionStatus = ApiClient.convertToType(data['completionStatus'], 'String');
      if (data.hasOwnProperty('successStatus'))
        obj.successStatus = ApiClient.convertToType(data['successStatus'], 'String');
      if (data.hasOwnProperty('historyLog'))
        obj.historyLog = ApiClient.convertToType(data['historyLog'], 'String');
      if (data.hasOwnProperty('totalSecondsTracked'))
        obj.totalSecondsTracked = ApiClient.convertToType(data['totalSecondsTracked'], 'Number');
      if (data.hasOwnProperty('launchTime'))
        obj.launchTime = ApiClient.convertToType(data['launchTime'], 'Date');
      if (data.hasOwnProperty('exitTime'))
        obj.exitTime = ApiClient.convertToType(data['exitTime'], 'Date');
      if (data.hasOwnProperty('lastRuntimeUpdate'))
        obj.lastRuntimeUpdate = ApiClient.convertToType(data['lastRuntimeUpdate'], 'Date');
      if (data.hasOwnProperty('launchHistoryId'))
        obj.launchHistoryId = ApiClient.convertToType(data['launchHistoryId'], 'String');
    }
    return obj;
  }

  /**
   * Identifier for the registration associated with this record
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Number} instance
   */
  exports.prototype.instance = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ScoreSchema} score
   */
  exports.prototype.score = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/LaunchHistorySchema.CompletionStatusEnum} completionStatus
   * @default 'UNKNOWN'
   */
  exports.prototype.completionStatus = 'UNKNOWN';

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/LaunchHistorySchema.SuccessStatusEnum} successStatus
   * @default 'UNKNOWN'
   */
  exports.prototype.successStatus = 'UNKNOWN';

  /**
   * @member {String} historyLog
   */
  exports.prototype.historyLog = undefined;

  /**
   * @member {Number} totalSecondsTracked
   */
  exports.prototype.totalSecondsTracked = undefined;

  /**
   * The time of the launch in UTC
   * @member {Date} launchTime
   */
  exports.prototype.launchTime = undefined;

  /**
   * The time of the exit in UTC
   * @member {Date} exitTime
   */
  exports.prototype.exitTime = undefined;

  /**
   * The time of the last runtime update in UTC
   * @member {Date} lastRuntimeUpdate
   */
  exports.prototype.lastRuntimeUpdate = undefined;

  /**
   * A unique identifier for this launch history record
   * @member {String} launchHistoryId
   */
  exports.prototype.launchHistoryId = undefined;



  /**
   * Allowed values for the <code>completionStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CompletionStatusEnum = {
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
   * Allowed values for the <code>successStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SuccessStatusEnum = {
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
