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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/ReportageAccountInfoUsageSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportageAccountInfoUsageSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.ReportageAccountInfoSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.ReportageAccountInfoUsageSchema);
  }
}(this, function(ApiClient, ReportageAccountInfoUsageSchema) {
  'use strict';

  /**
   * The ReportageAccountInfoSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/ReportageAccountInfoSchema
   */

  /**
   * Constructs a new <code>ReportageAccountInfoSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ReportageAccountInfoSchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ReportageAccountInfoSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ReportageAccountInfoSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ReportageAccountInfoSchema} The populated <code>ReportageAccountInfoSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('firstName'))
        obj.firstName = ApiClient.convertToType(data['firstName'], 'String');
      if (data.hasOwnProperty('lastName'))
        obj.lastName = ApiClient.convertToType(data['lastName'], 'String');
      if (data.hasOwnProperty('company'))
        obj.company = ApiClient.convertToType(data['company'], 'String');
      if (data.hasOwnProperty('accountType'))
        obj.accountType = ApiClient.convertToType(data['accountType'], 'String');
      if (data.hasOwnProperty('regLimit'))
        obj.regLimit = ApiClient.convertToType(data['regLimit'], 'Number');
      if (data.hasOwnProperty('strictLimit'))
        obj.strictLimit = ApiClient.convertToType(data['strictLimit'], 'Boolean');
      if (data.hasOwnProperty('createDate'))
        obj.createDate = ApiClient.convertToType(data['createDate'], 'Date');
      if (data.hasOwnProperty('usage'))
        obj.usage = ReportageAccountInfoUsageSchema.constructFromObject(data['usage']);
    }
    return obj;
  }

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {String} firstName
   */
  exports.prototype.firstName = undefined;

  /**
   * @member {String} lastName
   */
  exports.prototype.lastName = undefined;

  /**
   * @member {String} company
   */
  exports.prototype.company = undefined;

  /**
   * @member {String} accountType
   */
  exports.prototype.accountType = undefined;

  /**
   * @member {Number} regLimit
   */
  exports.prototype.regLimit = undefined;

  /**
   * @member {Boolean} strictLimit
   */
  exports.prototype.strictLimit = undefined;

  /**
   * @member {Date} createDate
   */
  exports.prototype.createDate = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ReportageAccountInfoUsageSchema} usage
   */
  exports.prototype.usage = undefined;


  return exports;

}));
