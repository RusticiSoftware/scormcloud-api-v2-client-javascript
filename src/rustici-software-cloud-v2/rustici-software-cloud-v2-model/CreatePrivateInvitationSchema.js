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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/InvitationEmailSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/PostBackSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InvitationEmailSchema'), require('./PostBackSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.CreatePrivateInvitationSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.InvitationEmailSchema, root.RusticiSoftwareCloudV2.PostBackSchema);
  }
}(this, function(ApiClient, InvitationEmailSchema, PostBackSchema) {
  'use strict';

  /**
   * The CreatePrivateInvitationSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/CreatePrivateInvitationSchema
   */

  /**
   * Constructs a new <code>CreatePrivateInvitationSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CreatePrivateInvitationSchema
   * @class
   * @param courseId {String} The id of the course for which to create an invitation.
   * @param creatingUserEmail {String} The email of the user who is creating the invitation.
   * @param invitationEmail {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/InvitationEmailSchema} 
   */
  var exports = function(courseId, creatingUserEmail, invitationEmail) {
    this.courseId = courseId;
    this.creatingUserEmail = creatingUserEmail;
    this.invitationEmail = invitationEmail;
  };

  /**
   * Constructs a <code>CreatePrivateInvitationSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CreatePrivateInvitationSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CreatePrivateInvitationSchema} The populated <code>CreatePrivateInvitationSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('courseId'))
        obj.courseId = ApiClient.convertToType(data['courseId'], 'String');
      if (data.hasOwnProperty('creatingUserEmail'))
        obj.creatingUserEmail = ApiClient.convertToType(data['creatingUserEmail'], 'String');
      if (data.hasOwnProperty('invitationEmail'))
        obj.invitationEmail = InvitationEmailSchema.constructFromObject(data['invitationEmail']);
      if (data.hasOwnProperty('postBack'))
        obj.postBack = PostBackSchema.constructFromObject(data['postBack']);
      if (data.hasOwnProperty('expirationDate'))
        obj.expirationDate = ApiClient.convertToType(data['expirationDate'], 'Date');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], ['String']);
      if (data.hasOwnProperty('duplicateRegistrationOption'))
        obj.duplicateRegistrationOption = ApiClient.convertToType(data['duplicateRegistrationOption'], 'String');
    }
    return obj;
  }

  /**
   * The id of the course for which to create an invitation.
   * @member {String} courseId
   */
  exports.prototype.courseId = undefined;

  /**
   * The email of the user who is creating the invitation.
   * @member {String} creatingUserEmail
   */
  exports.prototype.creatingUserEmail = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/InvitationEmailSchema} invitationEmail
   */
  exports.prototype.invitationEmail = undefined;

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
   * Optional tags to be applied to this invitation.
   * @member {Array.<String>} tags
   */
  exports.prototype.tags = undefined;

  /**
   * Represents the possible values that determine how existing registrations will be handled when an invitation is sent to an email address that has already received an invitation:   - `FAIL`: Do not create a new invitation, do not send an email, and do nothing with registrations   - `INSTANCE_EXISTING`: Create a new instance of the existing registration and send it with the invitation   - `SEND_EXISTING`: Re-send the existing registration with the new invitation   - `CREATE_NEW`: Create a new registration for the invitation 
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CreatePrivateInvitationSchema.DuplicateRegistrationOptionEnum} duplicateRegistrationOption
   * @default 'SEND_EXISTING'
   */
  exports.prototype.duplicateRegistrationOption = 'SEND_EXISTING';



  /**
   * Allowed values for the <code>duplicateRegistrationOption</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DuplicateRegistrationOptionEnum = {
    /**
     * value: "FAIL"
     * @const
     */
    FAIL: "FAIL",

    /**
     * value: "INSTANCE_EXISTING"
     * @const
     */
    INSTANCE_EXISTING: "INSTANCE_EXISTING",

    /**
     * value: "SEND_EXISTING"
     * @const
     */
    SEND_EXISTING: "SEND_EXISTING",

    /**
     * value: "CREATE_NEW"
     * @const
     */
    CREATE_NEW: "CREATE_NEW"
  };

  return exports;

}));
