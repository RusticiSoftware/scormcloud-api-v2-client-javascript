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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatementPipeSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./XapiStatementPipeSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.XapiStatementPipeListSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.XapiStatementPipeSchema);
  }
}(this, function(ApiClient, XapiStatementPipeSchema) {
  'use strict';

  /**
   * The XapiStatementPipeListSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatementPipeListSchema
   */

  /**
   * Constructs a new <code>XapiStatementPipeListSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatementPipeListSchema
   * @class
   * @param xapiStatementPipes {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatementPipeSchema>} 
   */
  var exports = function(xapiStatementPipes) {
    this.xapiStatementPipes = xapiStatementPipes;
  };

  /**
   * Constructs a <code>XapiStatementPipeListSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatementPipeListSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatementPipeListSchema} The populated <code>XapiStatementPipeListSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('xapiStatementPipes'))
        obj.xapiStatementPipes = ApiClient.convertToType(data['xapiStatementPipes'], [XapiStatementPipeSchema]);
    }
    return obj;
  }

  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiStatementPipeSchema>} xapiStatementPipes
   */
  exports.prototype.xapiStatementPipes = undefined;


  return exports;

}));
