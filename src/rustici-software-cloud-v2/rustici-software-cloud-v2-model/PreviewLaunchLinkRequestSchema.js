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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/ItemValuePairSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ItemValuePairSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.PreviewLaunchLinkRequestSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.ItemValuePairSchema);
  }
}(this, function(ApiClient, ItemValuePairSchema) {
  'use strict';

  /**
   * The PreviewLaunchLinkRequestSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/PreviewLaunchLinkRequestSchema
   */

  /**
   * Constructs a new <code>PreviewLaunchLinkRequestSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PreviewLaunchLinkRequestSchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PreviewLaunchLinkRequestSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PreviewLaunchLinkRequestSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/PreviewLaunchLinkRequestSchema} The populated <code>PreviewLaunchLinkRequestSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('expiry'))
        obj.expiry = ApiClient.convertToType(data['expiry'], 'Number');
      if (data.hasOwnProperty('redirectOnExitUrl'))
        obj.redirectOnExitUrl = ApiClient.convertToType(data['redirectOnExitUrl'], 'String');
      if (data.hasOwnProperty('startSco'))
        obj.startSco = ApiClient.convertToType(data['startSco'], 'String');
      if (data.hasOwnProperty('culture'))
        obj.culture = ApiClient.convertToType(data['culture'], 'String');
      if (data.hasOwnProperty('cssUrl'))
        obj.cssUrl = ApiClient.convertToType(data['cssUrl'], 'String');
      if (data.hasOwnProperty('additionalvalues'))
        obj.additionalvalues = ApiClient.convertToType(data['additionalvalues'], [ItemValuePairSchema]);
    }
    return obj;
  }

  /**
   * Number of seconds from now this link will expire in. Defaults to 120s. Range 10s:300s
   * @member {Number} expiry
   * @default 120
   */
  exports.prototype.expiry = 120;

  /**
   * The URL the application should redirect to when the learner exits a course.  Alternatively one of the following keywords can be used to redirect to: - `closer` - A page that automatically tries to close the browser tab/window - `blank` - A blank page - `message` - A page with a message about the course being complete  If an empty string is specified, the configured setting will be used (default www.scorm.com). If an invalid url is specified, the Message.html page will be loaded. 
   * @member {String} redirectOnExitUrl
   */
  exports.prototype.redirectOnExitUrl = undefined;

  /**
   * For SCORM, SCO identifier to override launch, overriding the normal sequencing.
   * @member {String} startSco
   */
  exports.prototype.startSco = undefined;

  /**
   * This parameter should specify a culture code. If specified, and supported, the navigation and alerts in the player will be displayed in the associated language. If not specified, the locale of the user’s browser will be used.
   * @member {String} culture
   */
  exports.prototype.culture = undefined;

  /**
   * A url pointing to custom CSS for the player to use.
   * @member {String} cssUrl
   */
  exports.prototype.cssUrl = undefined;

  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ItemValuePairSchema>} additionalvalues
   */
  exports.prototype.additionalvalues = undefined;


  return exports;

}));
