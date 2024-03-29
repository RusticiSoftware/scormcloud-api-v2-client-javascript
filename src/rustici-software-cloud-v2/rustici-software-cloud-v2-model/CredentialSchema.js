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
    define(['rustici-software-cloud-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.CredentialSchema = factory(root.RusticiSoftwareCloudV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CredentialSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/CredentialSchema
   */

  /**
   * Constructs a new <code>CredentialSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CredentialSchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CredentialSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CredentialSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CredentialSchema} The populated <code>CredentialSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('credential'))
        obj.credential = ApiClient.convertToType(data['credential'], 'String');
      if (data.hasOwnProperty('pensCredential'))
        obj.pensCredential = ApiClient.convertToType(data['pensCredential'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Date');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'Date');
    }
    return obj;
  }

  /**
   * id for this credential
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * name for this credential
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The newly created API credential
   * @member {String} credential
   */
  exports.prototype.credential = undefined;

  /**
   * The PENS key for this credential
   * @member {String} pensCredential
   */
  exports.prototype.pensCredential = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * The time the API credential was created in UTC
   * @member {Date} created
   */
  exports.prototype.created = undefined;

  /**
   * The time the API credential was last updated in UTC
   * @member {Date} updated
   */
  exports.prototype.updated = undefined;


  return exports;

}));
