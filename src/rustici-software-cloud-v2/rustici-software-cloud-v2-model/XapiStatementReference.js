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
    define(['rustici-software-cloud-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.XapiStatementReference = factory(root.RusticiSoftwareCloudV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The XapiStatementReference model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatementReference
   * @version 2.0.1
   */

  /**
   * Constructs a new <code>XapiStatementReference</code>.
   * https://github.com/adlnet/xAPI-Spec/blob/1.0.2/xAPI.md#statement-references
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatementReference
   * @class
   * @param objectType {String} 
   * @param id {String} 
   */
  var exports = function(objectType, id) {
    this.objectType = objectType;
    this.id = id;
  };

  /**
   * Constructs a <code>XapiStatementReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatementReference} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatementReference} The populated <code>XapiStatementReference</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('objectType'))
        obj.objectType = ApiClient.convertToType(data['objectType'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} objectType
   * @default 'StatementRef'
   */
  exports.prototype.objectType = 'StatementRef';

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;


  return exports;

}));
