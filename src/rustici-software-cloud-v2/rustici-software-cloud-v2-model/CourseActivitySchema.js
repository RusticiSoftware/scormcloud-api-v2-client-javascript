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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/CourseActivitySchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CourseActivitySchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.CourseActivitySchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.CourseActivitySchema);
  }
}(this, function(ApiClient, CourseActivitySchema) {
  'use strict';

  /**
   * The CourseActivitySchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/CourseActivitySchema
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>CourseActivitySchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CourseActivitySchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CourseActivitySchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CourseActivitySchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CourseActivitySchema} The populated <code>CourseActivitySchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('externalIdentifier'))
        obj.externalIdentifier = ApiClient.convertToType(data['externalIdentifier'], 'String');
      if (data.hasOwnProperty('itemIdentifier'))
        obj.itemIdentifier = ApiClient.convertToType(data['itemIdentifier'], 'String');
      if (data.hasOwnProperty('resourceIdentifier'))
        obj.resourceIdentifier = ApiClient.convertToType(data['resourceIdentifier'], 'String');
      if (data.hasOwnProperty('activityType'))
        obj.activityType = ApiClient.convertToType(data['activityType'], 'String');
      if (data.hasOwnProperty('href'))
        obj.href = ApiClient.convertToType(data['href'], 'String');
      if (data.hasOwnProperty('scaledPassingScore'))
        obj.scaledPassingScore = ApiClient.convertToType(data['scaledPassingScore'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('children'))
        obj.children = ApiClient.convertToType(data['children'], [CourseActivitySchema]);
    }
    return obj;
  }

  /**
   * An arbitrary identifier that the external LMS system can associate with this LearningObject to track it as it isreused across courses 
   * @member {String} externalIdentifier
   */
  exports.prototype.externalIdentifier = undefined;

  /**
   * The string which identifies this activity in the context of its course
   * @member {String} itemIdentifier
   */
  exports.prototype.itemIdentifier = undefined;

  /**
   * The string which identifies this activity's resource in a course's manifest
   * @member {String} resourceIdentifier
   */
  exports.prototype.resourceIdentifier = undefined;

  /**
   * The type of activity this is
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CourseActivitySchema.ActivityTypeEnum} activityType
   */
  exports.prototype.activityType = undefined;

  /**
   * The web path used to launch this activity
   * @member {String} href
   */
  exports.prototype.href = undefined;

  /**
   * The score required of a learner to pass this activity
   * @member {String} scaledPassingScore
   */
  exports.prototype.scaledPassingScore = undefined;

  /**
   * The title of the activity
   * @member {String} title
   */
  exports.prototype.title = undefined;

  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CourseActivitySchema>} children
   */
  exports.prototype.children = undefined;



  /**
   * Allowed values for the <code>activityType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActivityTypeEnum = {
    /**
     * value: "UNKNOWN"
     * @const
     */
    UNKNOWN: "UNKNOWN",

    /**
     * value: "AGGREGATION"
     * @const
     */
    AGGREGATION: "AGGREGATION",

    /**
     * value: "SCO"
     * @const
     */
    SCO: "SCO",

    /**
     * value: "ASSET"
     * @const
     */
    ASSET: "ASSET",

    /**
     * value: "OBJECTIVE"
     * @const
     */
    OBJECTIVE: "OBJECTIVE"
  };

  return exports;

}));
