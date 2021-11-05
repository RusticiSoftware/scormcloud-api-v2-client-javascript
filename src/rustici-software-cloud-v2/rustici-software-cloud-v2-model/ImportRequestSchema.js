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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportFetchRequestSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportMediaFileReferenceRequestSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ImportFetchRequestSchema'), require('./ImportMediaFileReferenceRequestSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.ImportRequestSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.ImportFetchRequestSchema, root.RusticiSoftwareCloudV2.ImportMediaFileReferenceRequestSchema);
  }
}(this, function(ApiClient, ImportFetchRequestSchema, ImportMediaFileReferenceRequestSchema) {
  'use strict';

  /**
   * The ImportRequestSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportRequestSchema
   * @version 2.0.1
   */

  /**
   * Constructs a new <code>ImportRequestSchema</code>.
   * Request to import a new course. Exactly one of fetchRequest or mediaFileReferenceRequest must be supplied, depending on the desired import behavior. 
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportRequestSchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ImportRequestSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportRequestSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportRequestSchema} The populated <code>ImportRequestSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('fetchRequest'))
        obj.fetchRequest = ImportFetchRequestSchema.constructFromObject(data['fetchRequest']);
      if (data.hasOwnProperty('mediaFileReferenceRequest'))
        obj.mediaFileReferenceRequest = ImportMediaFileReferenceRequestSchema.constructFromObject(data['mediaFileReferenceRequest']);
    }
    return obj;
  }

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportFetchRequestSchema} fetchRequest
   */
  exports.prototype.fetchRequest = undefined;

  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportMediaFileReferenceRequestSchema} mediaFileReferenceRequest
   */
  exports.prototype.mediaFileReferenceRequest = undefined;


  return exports;

}));
