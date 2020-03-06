/**
 * SCORM Cloud Rest API
 * REST API used for SCORM Cloud integrations.
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiEndpointSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./XapiEndpointSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.XapiStatementPipePutSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.XapiEndpointSchema);
  }
}(this, function(ApiClient, XapiEndpointSchema) {
  'use strict';




  /**
   * The XapiStatementPipePutSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatementPipePutSchema
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>XapiStatementPipePutSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatementPipePutSchema
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>XapiStatementPipePutSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatementPipePutSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatementPipePutSchema} The populated <code>XapiStatementPipePutSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('source')) {
        obj['source'] = XapiEndpointSchema.constructFromObject(data['source']);
      }
      if (data.hasOwnProperty('target')) {
        obj['target'] = XapiEndpointSchema.constructFromObject(data['target']);
      }
    }
    return obj;
  }

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiEndpointSchema} source
   */
  exports.prototype['source'] = undefined;
  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiEndpointSchema} target
   */
  exports.prototype['target'] = undefined;



  return exports;
}));

