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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiAgentGroup', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiContextActivity', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatementReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./XapiAgentGroup'), require('./XapiContextActivity'), require('./XapiStatementReference'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.XapiContext = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.XapiAgentGroup, root.RusticiSoftwareCloudV2.XapiContextActivity, root.RusticiSoftwareCloudV2.XapiStatementReference);
  }
}(this, function(ApiClient, XapiAgentGroup, XapiContextActivity, XapiStatementReference) {
  'use strict';

  /**
   * The XapiContext model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiContext
   * @version 2.1.0
   */

  /**
   * Constructs a new <code>XapiContext</code>.
   * https://github.com/adlnet/xAPI-Spec/blob/1.0.2/xAPI.md#416-context
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiContext
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>XapiContext</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiContext} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiContext} The populated <code>XapiContext</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('registration'))
        obj.registration = ApiClient.convertToType(data['registration'], 'String');
      if (data.hasOwnProperty('instructor'))
        obj.instructor = XapiAgentGroup.constructFromObject(data['instructor']);
      if (data.hasOwnProperty('team'))
        obj.team = XapiAgentGroup.constructFromObject(data['team']);
      if (data.hasOwnProperty('contextActivities'))
        obj.contextActivities = XapiContextActivity.constructFromObject(data['contextActivities']);
      if (data.hasOwnProperty('revision'))
        obj.revision = ApiClient.convertToType(data['revision'], 'String');
      if (data.hasOwnProperty('platform'))
        obj.platform = ApiClient.convertToType(data['platform'], 'String');
      if (data.hasOwnProperty('language'))
        obj.language = ApiClient.convertToType(data['language'], 'String');
      if (data.hasOwnProperty('statement'))
        obj.statement = XapiStatementReference.constructFromObject(data['statement']);
      if (data.hasOwnProperty('extensions'))
        obj.extensions = ApiClient.convertToType(data['extensions'], {'String': Object});
    }
    return obj;
  }

  /**
   * @member {String} registration
   */
  exports.prototype.registration = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiAgentGroup} instructor
   */
  exports.prototype.instructor = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiAgentGroup} team
   */
  exports.prototype.team = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiContextActivity} contextActivities
   */
  exports.prototype.contextActivities = undefined;

  /**
   * @member {String} revision
   */
  exports.prototype.revision = undefined;

  /**
   * @member {String} platform
   */
  exports.prototype.platform = undefined;

  /**
   * @member {String} language
   */
  exports.prototype.language = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatementReference} statement
   */
  exports.prototype.statement = undefined;

  /**
   * @member {Object.<String, Object>} extensions
   */
  exports.prototype.extensions = undefined;


  return exports;

}));
