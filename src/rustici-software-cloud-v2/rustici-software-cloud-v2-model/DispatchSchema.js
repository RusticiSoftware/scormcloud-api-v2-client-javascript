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
    define(['rustici-software-cloud-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.DispatchSchema = factory(root.RusticiSoftwareCloudV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DispatchSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/DispatchSchema
   * @version 2.0.1
   */

  /**
   * Constructs a new <code>DispatchSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/DispatchSchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DispatchSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/DispatchSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/DispatchSchema} The populated <code>DispatchSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('destinationId'))
        obj.destinationId = ApiClient.convertToType(data['destinationId'], 'String');
      if (data.hasOwnProperty('destinationName'))
        obj.destinationName = ApiClient.convertToType(data['destinationName'], 'String');
      if (data.hasOwnProperty('courseId'))
        obj.courseId = ApiClient.convertToType(data['courseId'], 'String');
      if (data.hasOwnProperty('courseTitle'))
        obj.courseTitle = ApiClient.convertToType(data['courseTitle'], 'String');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'Date');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Date');
      if (data.hasOwnProperty('allowNewRegistrations'))
        obj.allowNewRegistrations = ApiClient.convertToType(data['allowNewRegistrations'], 'Boolean');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('instanced'))
        obj.instanced = ApiClient.convertToType(data['instanced'], 'Boolean');
      if (data.hasOwnProperty('registrationCap'))
        obj.registrationCap = ApiClient.convertToType(data['registrationCap'], 'Number');
      if (data.hasOwnProperty('registrationCount'))
        obj.registrationCount = ApiClient.convertToType(data['registrationCount'], 'Number');
      if (data.hasOwnProperty('expirationDate'))
        obj.expirationDate = ApiClient.convertToType(data['expirationDate'], 'Date');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], ['String']);
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('notes'))
        obj.notes = ApiClient.convertToType(data['notes'], 'String');
    }
    return obj;
  }

  /**
   * Destination ID.
   * @member {String} destinationId
   */
  exports.prototype.destinationId = undefined;

  /**
   * Name of the destination housing this dispatch
   * @member {String} destinationName
   */
  exports.prototype.destinationName = undefined;

  /**
   * Serialized external package ID.
   * @member {String} courseId
   */
  exports.prototype.courseId = undefined;

  /**
   * Title of this dispatched course
   * @member {String} courseTitle
   */
  exports.prototype.courseTitle = undefined;

  /**
   * @member {Date} updated
   */
  exports.prototype.updated = undefined;

  /**
   * @member {Date} created
   */
  exports.prototype.created = undefined;

  /**
   * If true, then new registrations can be created for this dispatch. 
   * @member {Boolean} allowNewRegistrations
   */
  exports.prototype.allowNewRegistrations = undefined;

  /**
   * If false, the dispatch can not be launched.
   * @member {Boolean} enabled
   */
  exports.prototype.enabled = undefined;

  /**
   * If true, then a new registration instance will be created if the client LMS doesn't provide launch data for an existing one. Otherwise, the same instance will always be used for the given cmi.learner_id. 
   * @member {Boolean} instanced
   */
  exports.prototype.instanced = undefined;

  /**
   * The maximum number of registrations that can be created for this dispatch, where '0' means 'unlimited registrations'. 
   * @member {Number} registrationCap
   */
  exports.prototype.registrationCap = undefined;

  /**
   * The current number of registrations that have been created for this dispatch. 
   * @member {Number} registrationCount
   */
  exports.prototype.registrationCount = undefined;

  /**
   * The ISO 8601 TimeStamp (defaults to UTC) after which this dispatch will be disabled. An empty value will represent no expiration date. 
   * @member {Date} expirationDate
   */
  exports.prototype.expirationDate = undefined;

  /**
   * The tags to associate with this Dispatch.
   * @member {Array.<String>} tags
   */
  exports.prototype.tags = undefined;

  /**
   * SCORM Cloud user e-mail associated with this dispatch. If this is not provided, it will default to the owner of the Realm. 
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * Any provided notes about this dispatch.
   * @member {String} notes
   */
  exports.prototype.notes = undefined;


  return exports;

}));
