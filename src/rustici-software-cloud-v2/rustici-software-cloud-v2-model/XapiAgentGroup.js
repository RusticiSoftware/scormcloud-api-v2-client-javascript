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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiAccount', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiAgentGroup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./XapiAccount'), require('./XapiAgentGroup'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.XapiAgentGroup = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.XapiAccount, root.RusticiSoftwareCloudV2.XapiAgentGroup);
  }
}(this, function(ApiClient, XapiAccount, XapiAgentGroup) {
  'use strict';

  /**
   * The XapiAgentGroup model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiAgentGroup
   */

  /**
   * Constructs a new <code>XapiAgentGroup</code>.
   * YAML 2.0 does not support oneOf so this is used when object can be an Agent or a Group.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiAgentGroup
   * @class
   * @param objectType {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiAgentGroup.ObjectTypeEnum} 
   */
  var exports = function(objectType) {
    this.objectType = objectType;
  };

  /**
   * Constructs a <code>XapiAgentGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiAgentGroup} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiAgentGroup} The populated <code>XapiAgentGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('objectType'))
        obj.objectType = ApiClient.convertToType(data['objectType'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('mbox'))
        obj.mbox = ApiClient.convertToType(data['mbox'], 'String');
      if (data.hasOwnProperty('mbox_sha1sum'))
        obj.mboxSha1sum = ApiClient.convertToType(data['mbox_sha1sum'], 'String');
      if (data.hasOwnProperty('openid'))
        obj.openid = ApiClient.convertToType(data['openid'], 'String');
      if (data.hasOwnProperty('account'))
        obj.account = XapiAccount.constructFromObject(data['account']);
      if (data.hasOwnProperty('member'))
        obj.member = ApiClient.convertToType(data['member'], [XapiAgentGroup]);
    }
    return obj;
  }

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiAgentGroup.ObjectTypeEnum} objectType
   */
  exports.prototype.objectType = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} mbox
   */
  exports.prototype.mbox = undefined;

  /**
   * @member {String} mboxSha1sum
   */
  exports.prototype.mboxSha1sum = undefined;

  /**
   * @member {String} openid
   */
  exports.prototype.openid = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiAccount} account
   */
  exports.prototype.account = undefined;

  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiAgentGroup>} member
   */
  exports.prototype.member = undefined;



  /**
   * Allowed values for the <code>objectType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectTypeEnum = {
    /**
     * value: "Agent"
     * @const
     */
    agent: "Agent",

    /**
     * value: "Group"
     * @const
     */
    group: "Group"
  };

  return exports;

}));
