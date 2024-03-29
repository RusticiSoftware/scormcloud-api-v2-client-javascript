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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/RegistrationSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RegistrationSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.RegistrationListSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.RegistrationSchema);
  }
}(this, function(ApiClient, RegistrationSchema) {
  'use strict';

  /**
   * The RegistrationListSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/RegistrationListSchema
   */

  /**
   * Constructs a new <code>RegistrationListSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/RegistrationListSchema
   * @class
   * @param registrations {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/RegistrationSchema>} 
   */
  var exports = function(registrations) {
    this.registrations = registrations;
  };

  /**
   * Constructs a <code>RegistrationListSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/RegistrationListSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/RegistrationListSchema} The populated <code>RegistrationListSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('registrations'))
        obj.registrations = ApiClient.convertToType(data['registrations'], [RegistrationSchema]);
      if (data.hasOwnProperty('more'))
        obj.more = ApiClient.convertToType(data['more'], 'String');
    }
    return obj;
  }

  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/RegistrationSchema>} registrations
   */
  exports.prototype.registrations = undefined;

  /**
   * Token for getting the next set of results, from the prior set of results.
   * @member {String} more
   */
  exports.prototype.more = undefined;


  return exports;

}));
