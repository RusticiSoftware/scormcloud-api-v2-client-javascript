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
    root.RusticiSoftwareCloudV2.InvitationJobStatusSchema = factory(root.RusticiSoftwareCloudV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InvitationJobStatusSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/InvitationJobStatusSchema
   * @version 2.0.1
   */

  /**
   * Constructs a new <code>InvitationJobStatusSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/InvitationJobStatusSchema
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InvitationJobStatusSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/InvitationJobStatusSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/InvitationJobStatusSchema} The populated <code>InvitationJobStatusSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], ['String']);
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
      if (data.hasOwnProperty('processed'))
        obj.processed = ApiClient.convertToType(data['processed'], 'Number');
    }
    return obj;
  }

  /**
   * The status of the job.
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/InvitationJobStatusSchema.StatusEnum} status
   */
  exports.prototype.status = undefined;

  /**
   * An array containing any errors which occurred.
   * @member {Array.<String>} errors
   */
  exports.prototype.errors = undefined;

  /**
   * The total number of private invitations to be sent.
   * @member {Number} total
   */
  exports.prototype.total = undefined;

  /**
   * The number of private invitations which have been sent.
   * @member {Number} processed
   */
  exports.prototype.processed = undefined;



  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "STARTED"
     * @const
     */
    STARTED: "STARTED",

    /**
     * value: "CANCELLED"
     * @const
     */
    CANCELLED: "CANCELLED",

    /**
     * value: "COMPLETE"
     * @const
     */
    COMPLETE: "COMPLETE",

    /**
     * value: "ERROR"
     * @const
     */
    ERROR: "ERROR"
  };

  return exports;

}));
