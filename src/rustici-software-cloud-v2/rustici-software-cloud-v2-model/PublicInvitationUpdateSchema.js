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
    root.RusticiSoftwareCloudV2.PublicInvitationUpdateSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.PostBackSchema);
  }
}(this, function(ApiClient, PostBackSchema) {
  'use strict';

  /**
   * The PublicInvitationUpdateSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/PublicInvitationUpdateSchema
   * @version 2.1.0
   */

  /**
   * Constructs a new <code>PublicInvitationUpdateSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PublicInvitationUpdateSchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PublicInvitationUpdateSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PublicInvitationUpdateSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PublicInvitationUpdateSchema} The populated <code>PublicInvitationUpdateSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('allowLaunch'))
        obj.allowLaunch = ApiClient.convertToType(data['allowLaunch'], 'Boolean');
      if (data.hasOwnProperty('allowNewRegistrations'))
        obj.allowNewRegistrations = ApiClient.convertToType(data['allowNewRegistrations'], 'Boolean');
      if (data.hasOwnProperty('postBack'))
        obj.postBack = PostBackSchema.constructFromObject(data['postBack']);
      if (data.hasOwnProperty('expirationDate'))
        obj.expirationDate = ApiClient.convertToType(data['expirationDate'], 'Date');
      if (data.hasOwnProperty('registrationCap'))
        obj.registrationCap = ApiClient.convertToType(data['registrationCap'], 'Number');
    }
    return obj;
  }

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


  return exports;

}));
