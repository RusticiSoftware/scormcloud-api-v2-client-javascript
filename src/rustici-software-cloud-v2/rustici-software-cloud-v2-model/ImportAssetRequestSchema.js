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
    root.RusticiSoftwareCloudV2.ImportAssetRequestSchema = factory(root.RusticiSoftwareCloudV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ImportAssetRequestSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportAssetRequestSchema
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>ImportAssetRequestSchema</code>.
   * Request schema to import a course asset file by fetching it from a url 
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportAssetRequestSchema
   * @class
   * @param fetchUrl {String} URL path to the asset file to import.
   * @param destination {String} Relative path from the course's base directory where the asset file will be imported. `/Etiquette/Course.html` will upload the file into the Etiquette folder of the course. 
   */
  var exports = function(fetchUrl, destination) {
    this.fetchUrl = fetchUrl;
    this.destination = destination;
  };

  /**
   * Constructs a <code>ImportAssetRequestSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportAssetRequestSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ImportAssetRequestSchema} The populated <code>ImportAssetRequestSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('fetchUrl'))
        obj.fetchUrl = ApiClient.convertToType(data['fetchUrl'], 'String');
      if (data.hasOwnProperty('destination'))
        obj.destination = ApiClient.convertToType(data['destination'], 'String');
    }
    return obj;
  }

  /**
   * URL path to the asset file to import.
   * @member {String} fetchUrl
   */
  exports.prototype.fetchUrl = undefined;

  /**
   * Relative path from the course's base directory where the asset file will be imported. `/Etiquette/Course.html` will upload the file into the Etiquette folder of the course. 
   * @member {String} destination
   */
  exports.prototype.destination = undefined;


  return exports;

}));