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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/PaginatedList', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/PublicInvitationSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaginatedList'), require('./PublicInvitationSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.PublicInvitationList = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.PaginatedList, root.RusticiSoftwareCloudV2.PublicInvitationSchema);
  }
}(this, function(ApiClient, PaginatedList, PublicInvitationSchema) {
  'use strict';

  /**
   * The PublicInvitationList model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/PublicInvitationList
   */

  /**
   * Constructs a new <code>PublicInvitationList</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PublicInvitationList
   * @class
   * @extends module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PaginatedList
   */
  var exports = function() {
    PaginatedList.call(this);
  };

  /**
   * Constructs a <code>PublicInvitationList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PublicInvitationList} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PublicInvitationList} The populated <code>PublicInvitationList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      PaginatedList.constructFromObject(data, obj);
      if (data.hasOwnProperty('invitations'))
        obj.invitations = ApiClient.convertToType(data['invitations'], [PublicInvitationSchema]);
    }
    return obj;
  }

  exports.prototype = Object.create(PaginatedList.prototype);
  exports.prototype.constructor = exports;
  /**
   * A list of public invitation objects.
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PublicInvitationSchema>} invitations
   */
  exports.prototype.invitations = undefined;


  return exports;

}));
