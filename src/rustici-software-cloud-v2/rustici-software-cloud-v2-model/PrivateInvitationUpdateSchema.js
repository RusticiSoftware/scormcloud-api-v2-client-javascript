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
    root.RusticiSoftwareCloudV2.PrivateInvitationUpdateSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.InvitationEmailSchema, root.RusticiSoftwareCloudV2.PostBackSchema);
  }
}(this, function(ApiClient, InvitationEmailSchema, PostBackSchema) {
  'use strict';

  /**
   * The PrivateInvitationUpdateSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/PrivateInvitationUpdateSchema
   */

  /**
   * Constructs a new <code>PrivateInvitationUpdateSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PrivateInvitationUpdateSchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PrivateInvitationUpdateSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PrivateInvitationUpdateSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PrivateInvitationUpdateSchema} The populated <code>PrivateInvitationUpdateSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('allowLaunch'))
        obj.allowLaunch = ApiClient.convertToType(data['allowLaunch'], 'Boolean');
      if (data.hasOwnProperty('invitationEmail'))
        obj.invitationEmail = InvitationEmailSchema.constructFromObject(data['invitationEmail']);
      if (data.hasOwnProperty('postBack'))
        obj.postBack = PostBackSchema.constructFromObject(data['postBack']);
      if (data.hasOwnProperty('expirationDate'))
        obj.expirationDate = ApiClient.convertToType(data['expirationDate'], 'Date');
    }
    return obj;
  }

  /**
   * Determines if learners are allowed to launch the invitation. If false, the invitation is disabled and no new or existing learners are allowed to launch it. 
   * @member {Boolean} allowLaunch
   */
  exports.prototype.allowLaunch = undefined;

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


  return exports;

}));
