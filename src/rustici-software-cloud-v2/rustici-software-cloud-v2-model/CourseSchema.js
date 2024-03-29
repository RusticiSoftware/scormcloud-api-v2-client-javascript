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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/CourseActivitySchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/MetadataSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CourseActivitySchema'), require('./MetadataSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.CourseSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.CourseActivitySchema, root.RusticiSoftwareCloudV2.MetadataSchema);
  }
}(this, function(ApiClient, CourseActivitySchema, MetadataSchema) {
  'use strict';

  /**
   * The CourseSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/CourseSchema
   */

  /**
   * Constructs a new <code>CourseSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CourseSchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CourseSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CourseSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CourseSchema} The populated <code>CourseSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('xapiActivityId'))
        obj.xapiActivityId = ApiClient.convertToType(data['xapiActivityId'], 'String');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Date');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'Date');
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'Number');
      if (data.hasOwnProperty('registrationCount'))
        obj.registrationCount = ApiClient.convertToType(data['registrationCount'], 'Number');
      if (data.hasOwnProperty('activityId'))
        obj.activityId = ApiClient.convertToType(data['activityId'], 'String');
      if (data.hasOwnProperty('courseLearningStandard'))
        obj.courseLearningStandard = ApiClient.convertToType(data['courseLearningStandard'], 'String');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], ['String']);
      if (data.hasOwnProperty('dispatched'))
        obj.dispatched = ApiClient.convertToType(data['dispatched'], 'Boolean');
      if (data.hasOwnProperty('metadata'))
        obj.metadata = MetadataSchema.constructFromObject(data['metadata']);
      if (data.hasOwnProperty('rootActivity'))
        obj.rootActivity = CourseActivitySchema.constructFromObject(data['rootActivity']);
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
   * xAPI activity id associated with this course
   * @member {String} xapiActivityId
   */
  exports.prototype.xapiActivityId = undefined;

  /**
   * @member {Date} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {Date} updated
   */
  exports.prototype.updated = undefined;

  /**
   * @member {Number} version
   */
  exports.prototype.version = undefined;

  /**
   * @member {Number} registrationCount
   */
  exports.prototype.registrationCount = undefined;

  /**
   * @member {String} activityId
   */
  exports.prototype.activityId = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CourseSchema.CourseLearningStandardEnum} courseLearningStandard
   */
  exports.prototype.courseLearningStandard = undefined;

  /**
   * @member {Array.<String>} tags
   */
  exports.prototype.tags = undefined;

  /**
   * @member {Boolean} dispatched
   */
  exports.prototype.dispatched = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/MetadataSchema} metadata
   */
  exports.prototype.metadata = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CourseActivitySchema} rootActivity
   */
  exports.prototype.rootActivity = undefined;



  /**
   * Allowed values for the <code>courseLearningStandard</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CourseLearningStandardEnum = {
    /**
     * value: "UNKNOWN"
     * @const
     */
    UNKNOWN: "UNKNOWN",

    /**
     * value: "SCORM11"
     * @const
     */
    sCORM11: "SCORM11",

    /**
     * value: "SCORM12"
     * @const
     */
    sCORM12: "SCORM12",

    /**
     * value: "SCORM20042NDEDITION"
     * @const
     */
    sCORM20042NDEDITION: "SCORM20042NDEDITION",

    /**
     * value: "SCORM20043RDEDITION"
     * @const
     */
    sCORM20043RDEDITION: "SCORM20043RDEDITION",

    /**
     * value: "SCORM20044THEDITION"
     * @const
     */
    sCORM20044THEDITION: "SCORM20044THEDITION",

    /**
     * value: "AICC"
     * @const
     */
    AICC: "AICC",

    /**
     * value: "XAPI"
     * @const
     */
    XAPI: "XAPI",

    /**
     * value: "CMI5"
     * @const
     */
    cMI5: "CMI5",

    /**
     * value: "LTI13"
     * @const
     */
    lTI13: "LTI13"
  };

  return exports;

}));
