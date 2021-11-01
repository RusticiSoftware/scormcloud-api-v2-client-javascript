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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/ActivityResultSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/CompletionAmountSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/ObjectiveSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/RuntimeSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/ScoreSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/StaticPropertiesSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActivityResultSchema'), require('./CompletionAmountSchema'), require('./ObjectiveSchema'), require('./RuntimeSchema'), require('./ScoreSchema'), require('./StaticPropertiesSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.ActivityResultSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.ActivityResultSchema, root.RusticiSoftwareCloudV2.CompletionAmountSchema, root.RusticiSoftwareCloudV2.ObjectiveSchema, root.RusticiSoftwareCloudV2.RuntimeSchema, root.RusticiSoftwareCloudV2.ScoreSchema, root.RusticiSoftwareCloudV2.StaticPropertiesSchema);
  }
}(this, function(ApiClient, ActivityResultSchema, CompletionAmountSchema, ObjectiveSchema, RuntimeSchema, ScoreSchema, StaticPropertiesSchema) {
  'use strict';

  /**
   * The ActivityResultSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/ActivityResultSchema
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>ActivityResultSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ActivityResultSchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ActivityResultSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ActivityResultSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ActivityResultSchema} The populated <code>ActivityResultSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('attempts'))
        obj.attempts = ApiClient.convertToType(data['attempts'], 'Number');
      if (data.hasOwnProperty('activityCompletion'))
        obj.activityCompletion = ApiClient.convertToType(data['activityCompletion'], 'String');
      if (data.hasOwnProperty('activitySuccess'))
        obj.activitySuccess = ApiClient.convertToType(data['activitySuccess'], 'String');
      if (data.hasOwnProperty('score'))
        obj.score = ScoreSchema.constructFromObject(data['score']);
      if (data.hasOwnProperty('timeTracked'))
        obj.timeTracked = ApiClient.convertToType(data['timeTracked'], 'String');
      if (data.hasOwnProperty('completionAmount'))
        obj.completionAmount = CompletionAmountSchema.constructFromObject(data['completionAmount']);
      if (data.hasOwnProperty('suspended'))
        obj.suspended = ApiClient.convertToType(data['suspended'], 'Boolean');
      if (data.hasOwnProperty('children'))
        obj.children = ApiClient.convertToType(data['children'], [ActivityResultSchema]);
      if (data.hasOwnProperty('objectives'))
        obj.objectives = ApiClient.convertToType(data['objectives'], [ObjectiveSchema]);
      if (data.hasOwnProperty('staticProperties'))
        obj.staticProperties = StaticPropertiesSchema.constructFromObject(data['staticProperties']);
      if (data.hasOwnProperty('runtime'))
        obj.runtime = RuntimeSchema.constructFromObject(data['runtime']);
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} title
   */
  exports.prototype.title = undefined;

  /**
   * @member {Number} attempts
   */
  exports.prototype.attempts = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ActivityResultSchema.ActivityCompletionEnum} activityCompletion
   */
  exports.prototype.activityCompletion = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ActivityResultSchema.ActivitySuccessEnum} activitySuccess
   */
  exports.prototype.activitySuccess = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ScoreSchema} score
   */
  exports.prototype.score = undefined;

  /**
   * @member {String} timeTracked
   */
  exports.prototype.timeTracked = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CompletionAmountSchema} completionAmount
   */
  exports.prototype.completionAmount = undefined;

  /**
   * @member {Boolean} suspended
   */
  exports.prototype.suspended = undefined;

  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ActivityResultSchema>} children
   */
  exports.prototype.children = undefined;

  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ObjectiveSchema>} objectives
   */
  exports.prototype.objectives = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/StaticPropertiesSchema} staticProperties
   */
  exports.prototype.staticProperties = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/RuntimeSchema} runtime
   */
  exports.prototype.runtime = undefined;



  /**
   * Allowed values for the <code>activityCompletion</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActivityCompletionEnum = {
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
   * Allowed values for the <code>activitySuccess</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActivitySuccessEnum = {
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
