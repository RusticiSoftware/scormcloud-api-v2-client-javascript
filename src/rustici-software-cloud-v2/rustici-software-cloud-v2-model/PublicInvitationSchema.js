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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/PostBackSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PostBackSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.PublicInvitationSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.PostBackSchema);
  }
}(this, function(ApiClient, PostBackSchema) {
  'use strict';

  /**
   * The PublicInvitationSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/PublicInvitationSchema
   * @version 2.0.1
   */

  /**
   * Constructs a new <code>PublicInvitationSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PublicInvitationSchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PublicInvitationSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PublicInvitationSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PublicInvitationSchema} The populated <code>PublicInvitationSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('courseId'))
        obj.courseId = ApiClient.convertToType(data['courseId'], 'String');
      if (data.hasOwnProperty('allowLaunch'))
        obj.allowLaunch = ApiClient.convertToType(data['allowLaunch'], 'Boolean');
      if (data.hasOwnProperty('allowNewRegistrations'))
        obj.allowNewRegistrations = ApiClient.convertToType(data['allowNewRegistrations'], 'Boolean');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('createDate'))
        obj.createDate = ApiClient.convertToType(data['createDate'], 'Date');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'Date');
      if (data.hasOwnProperty('postBack'))
        obj.postBack = PostBackSchema.constructFromObject(data['postBack']);
      if (data.hasOwnProperty('expirationDate'))
        obj.expirationDate = ApiClient.convertToType(data['expirationDate'], 'Date');
      if (data.hasOwnProperty('registrationCap'))
        obj.registrationCap = ApiClient.convertToType(data['registrationCap'], 'Number');
      if (data.hasOwnProperty('registrationCount'))
        obj.registrationCount = ApiClient.convertToType(data['registrationCount'], 'Number');
    }
    return obj;
  }

  /**
   * The invitationId for this invitation.
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Course Id for this Invitation.
   * @member {String} courseId
   */
  exports.prototype.courseId = undefined;

  /**
   * If true, then new registrations can be created for this invitation.
   * @member {Boolean} allowLaunch
   */
  exports.prototype.allowLaunch = undefined;

  /**
   * If true, then new registrations can be created for this invitation.
   * @member {Boolean} allowNewRegistrations
   */
  exports.prototype.allowNewRegistrations = undefined;

  /**
   * The launch URL for the invitation
   * @member {String} url
   */
  exports.prototype.url = undefined;

  /**
   * The create date for the invitation
   * @member {Date} createDate
   */
  exports.prototype.createDate = undefined;

  /**
   * @member {Date} updated
   */
  exports.prototype.updated = undefined;

  /**
   * Specifies a URL for which to post activity and status data in real time as the course is completed
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PostBackSchema} postBack
   */
  exports.prototype.postBack = undefined;

  /**
   * The ISO 8601 TimeStamp (defaults to UTC) after which this invitation will expire and can no longer be launched. An empty value will represent no expiration date. 
   * @member {Date} expirationDate
   */
  exports.prototype.expirationDate = undefined;

  /**
   * Integer value that limits the amount of registrations a public invitation can generate.
   * @member {Number} registrationCap
   * @default 0
   */
  exports.prototype.registrationCap = 0;

  /**
   * The count of registrations for this invitation
   * @member {Number} registrationCount
   */
  exports.prototype.registrationCount = undefined;


  return exports;

}));
