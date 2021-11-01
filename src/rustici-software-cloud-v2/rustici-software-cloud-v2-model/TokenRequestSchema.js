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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/PermissionsSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PermissionsSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.TokenRequestSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.PermissionsSchema);
  }
}(this, function(ApiClient, PermissionsSchema) {
  'use strict';

  /**
   * The TokenRequestSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/TokenRequestSchema
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>TokenRequestSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/TokenRequestSchema
   * @class
   * @param permissions {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PermissionsSchema} 
   * @param expiry {Date} Expiration of the token. This should not be set far in the future, as there is no way to invalidate an individual token.
   */
  var exports = function(permissions, expiry) {
    this.permissions = permissions;
    this.expiry = expiry;
  };

  /**
   * Constructs a <code>TokenRequestSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/TokenRequestSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/TokenRequestSchema} The populated <code>TokenRequestSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('permissions'))
        obj.permissions = PermissionsSchema.constructFromObject(data['permissions']);
      if (data.hasOwnProperty('expiry'))
        obj.expiry = ApiClient.convertToType(data['expiry'], 'Date');
    }
    return obj;
  }

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PermissionsSchema} permissions
   */
  exports.prototype.permissions = undefined;

  /**
   * Expiration of the token. This should not be set far in the future, as there is no way to invalidate an individual token.
   * @member {Date} expiry
   */
  exports.prototype.expiry = undefined;


  return exports;

}));
