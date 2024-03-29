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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiActivity', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiAgentGroup', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiAttachment', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiContext', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiResult', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatement', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatementReference', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiVerb'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./XapiActivity'), require('./XapiAgentGroup'), require('./XapiAttachment'), require('./XapiContext'), require('./XapiResult'), require('./XapiStatement'), require('./XapiStatementReference'), require('./XapiVerb'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.XapiStatement = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.XapiActivity, root.RusticiSoftwareCloudV2.XapiAgentGroup, root.RusticiSoftwareCloudV2.XapiAttachment, root.RusticiSoftwareCloudV2.XapiContext, root.RusticiSoftwareCloudV2.XapiResult, root.RusticiSoftwareCloudV2.XapiStatement, root.RusticiSoftwareCloudV2.XapiStatementReference, root.RusticiSoftwareCloudV2.XapiVerb);
  }
}(this, function(ApiClient, XapiActivity, XapiAgentGroup, XapiAttachment, XapiContext, XapiResult, XapiStatement, XapiStatementReference, XapiVerb) {
  'use strict';

  /**
   * The XapiStatement model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatement
   */

  /**
   * Constructs a new <code>XapiStatement</code>.
   * https://github.com/adlnet/xAPI-Spec/blob/1.0.2/xAPI.md#41-statement-properties
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatement
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>XapiStatement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatement} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatement} The populated <code>XapiStatement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('actor'))
        obj.actor = XapiAgentGroup.constructFromObject(data['actor']);
      if (data.hasOwnProperty('verb'))
        obj.verb = XapiVerb.constructFromObject(data['verb']);
      if (data.hasOwnProperty('objectActivity'))
        obj.objectActivity = XapiActivity.constructFromObject(data['objectActivity']);
      if (data.hasOwnProperty('objectAgentGroup'))
        obj.objectAgentGroup = XapiAgentGroup.constructFromObject(data['objectAgentGroup']);
      if (data.hasOwnProperty('objectStatementReference'))
        obj.objectStatementReference = XapiStatementReference.constructFromObject(data['objectStatementReference']);
      if (data.hasOwnProperty('objectSubStatement'))
        obj.objectSubStatement = XapiStatement.constructFromObject(data['objectSubStatement']);
      if (data.hasOwnProperty('result'))
        obj.result = XapiResult.constructFromObject(data['result']);
      if (data.hasOwnProperty('context'))
        obj.context = XapiContext.constructFromObject(data['context']);
      if (data.hasOwnProperty('timestamp'))
        obj.timestamp = ApiClient.convertToType(data['timestamp'], 'Date');
      if (data.hasOwnProperty('stored'))
        obj.stored = ApiClient.convertToType(data['stored'], 'Date');
      if (data.hasOwnProperty('authority'))
        obj.authority = XapiAgentGroup.constructFromObject(data['authority']);
      if (data.hasOwnProperty('attachments'))
        obj.attachments = ApiClient.convertToType(data['attachments'], [XapiAttachment]);
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiAgentGroup} actor
   */
  exports.prototype.actor = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiVerb} verb
   */
  exports.prototype.verb = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiActivity} objectActivity
   */
  exports.prototype.objectActivity = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiAgentGroup} objectAgentGroup
   */
  exports.prototype.objectAgentGroup = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatementReference} objectStatementReference
   */
  exports.prototype.objectStatementReference = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatement} objectSubStatement
   */
  exports.prototype.objectSubStatement = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiResult} result
   */
  exports.prototype.result = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiContext} context
   */
  exports.prototype.context = undefined;

  /**
   * @member {Date} timestamp
   */
  exports.prototype.timestamp = undefined;

  /**
   * @member {Date} stored
   */
  exports.prototype.stored = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiAgentGroup} authority
   */
  exports.prototype.authority = undefined;

  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiAttachment>} attachments
   */
  exports.prototype.attachments = undefined;


  return exports;

}));
