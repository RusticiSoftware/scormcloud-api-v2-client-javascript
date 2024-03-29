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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/PostBackSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PostBackSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.CreateDispatchSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.PostBackSchema);
  }
}(this, function(ApiClient, PostBackSchema) {
  'use strict';

  /**
   * The CreateDispatchSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/CreateDispatchSchema
   */

  /**
   * Constructs a new <code>CreateDispatchSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CreateDispatchSchema
   * @class
   * @param destinationId {String} Id of the destination this dispatch will belong to.
   * @param courseId {String} Id of the course to be dispatched.
   */
  var exports = function(destinationId, courseId) {
    this.destinationId = destinationId;
    this.courseId = courseId;
  };

  /**
   * Constructs a <code>CreateDispatchSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CreateDispatchSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CreateDispatchSchema} The populated <code>CreateDispatchSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('destinationId'))
        obj.destinationId = ApiClient.convertToType(data['destinationId'], 'String');
      if (data.hasOwnProperty('courseId'))
        obj.courseId = ApiClient.convertToType(data['courseId'], 'String');
      if (data.hasOwnProperty('allowNewRegistrations'))
        obj.allowNewRegistrations = ApiClient.convertToType(data['allowNewRegistrations'], 'Boolean');
      if (data.hasOwnProperty('instanced'))
        obj.instanced = ApiClient.convertToType(data['instanced'], 'Boolean');
      if (data.hasOwnProperty('registrationCap'))
        obj.registrationCap = ApiClient.convertToType(data['registrationCap'], 'Number');
      if (data.hasOwnProperty('expirationDate'))
        obj.expirationDate = ApiClient.convertToType(data['expirationDate'], 'Date');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], ['String']);
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('notes'))
        obj.notes = ApiClient.convertToType(data['notes'], 'String');
      if (data.hasOwnProperty('postBack'))
        obj.postBack = PostBackSchema.constructFromObject(data['postBack']);
    }
    return obj;
  }

  /**
   * Id of the destination this dispatch will belong to.
   * @member {String} destinationId
   */
  exports.prototype.destinationId = undefined;

  /**
   * Id of the course to be dispatched.
   * @member {String} courseId
   */
  exports.prototype.courseId = undefined;

  /**
   * If true, then new registrations can be created for this dispatch.
   * @member {Boolean} allowNewRegistrations
   * @default true
   */
  exports.prototype.allowNewRegistrations = true;

  /**
   * If true, then a new registration instance will be created if the client LMS doesn't provide launch data for an existing one. Otherwise, the same instance will always be used for the given cmi.learner_id. 
   * @member {Boolean} instanced
   * @default true
   */
  exports.prototype.instanced = true;

  /**
   * The maximum number of registrations that can be created for this dispatch, where '0' means 'unlimited registrations'. 
   * @member {Number} registrationCap
   * @default 0
   */
  exports.prototype.registrationCap = 0;

  /**
   * The ISO 8601 TimeStamp (defaults to UTC) after which this dispatch will be disabled. An empty value will represent no expiration date. 
   * @member {Date} expirationDate
   */
  exports.prototype.expirationDate = undefined;

  /**
   * If true, then this dispatch can be launched.
   * @member {Boolean} enabled
   * @default true
   */
  exports.prototype.enabled = true;

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

  /**
   * The postback information for this Dispatch.
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PostBackSchema} postBack
   */
  exports.prototype.postBack = undefined;


  return exports;

}));
