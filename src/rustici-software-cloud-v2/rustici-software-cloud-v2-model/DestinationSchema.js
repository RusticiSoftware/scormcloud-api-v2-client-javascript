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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/LaunchAuthSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LaunchAuthSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.DestinationSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.LaunchAuthSchema);
  }
}(this, function(ApiClient, LaunchAuthSchema) {
  'use strict';

  /**
   * The DestinationSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/DestinationSchema
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>DestinationSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/DestinationSchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>DestinationSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/DestinationSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/DestinationSchema} The populated <code>DestinationSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], ['String']);
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('notes'))
        obj.notes = ApiClient.convertToType(data['notes'], 'String');
      if (data.hasOwnProperty('launchAuth'))
        obj.launchAuth = LaunchAuthSchema.constructFromObject(data['launchAuth']);
    }
    return obj;
  }

  /**
   * The destination's name.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Optional array of tags.
   * @member {Array.<String>} tags
   */
  exports.prototype.tags = undefined;

  /**
   * SCORM Cloud user e-mail associated with this destination. If this is not provided, it will default to the owner of the Realm. 
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * Any provided notes about this Destination
   * @member {String} notes
   */
  exports.prototype.notes = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/LaunchAuthSchema} launchAuth
   */
  exports.prototype.launchAuth = undefined;


  return exports;

}));
