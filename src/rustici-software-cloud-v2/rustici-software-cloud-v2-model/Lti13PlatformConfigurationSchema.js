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
    define(['rustici-software-cloud-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.Lti13PlatformConfigurationSchema = factory(root.RusticiSoftwareCloudV2.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Lti13PlatformConfigurationSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/Lti13PlatformConfigurationSchema
   * @version 2.1.0
   */

  /**
   * Constructs a new <code>Lti13PlatformConfigurationSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/Lti13PlatformConfigurationSchema
   * @class
   * @param clientId {String} OAuth2 client Id for this tool
   * @param platformIssuerIdentifier {String} Issuer identifier identifying the learning platform
   * @param deploymentId {String} An unchanging identifier (locally unique within the platformIssuerIdentifier) for the platform-tool integration
   * @param oidcAuthorizationEndpoint {String} Endpoint that will initiate the OIDC Authentication Request
   * @param jsonWebKeySetUrl {String} Path to the platform's JSON Web Key Set
   */
  var exports = function(clientId, platformIssuerIdentifier, deploymentId, oidcAuthorizationEndpoint, jsonWebKeySetUrl) {
    this.clientId = clientId;
    this.platformIssuerIdentifier = platformIssuerIdentifier;
    this.deploymentId = deploymentId;
    this.oidcAuthorizationEndpoint = oidcAuthorizationEndpoint;
    this.jsonWebKeySetUrl = jsonWebKeySetUrl;
  };

  /**
   * Constructs a <code>Lti13PlatformConfigurationSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/Lti13PlatformConfigurationSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/Lti13PlatformConfigurationSchema} The populated <code>Lti13PlatformConfigurationSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('clientId'))
        obj.clientId = ApiClient.convertToType(data['clientId'], 'String');
      if (data.hasOwnProperty('platformIssuerIdentifier'))
        obj.platformIssuerIdentifier = ApiClient.convertToType(data['platformIssuerIdentifier'], 'String');
      if (data.hasOwnProperty('deploymentId'))
        obj.deploymentId = ApiClient.convertToType(data['deploymentId'], 'String');
      if (data.hasOwnProperty('oidcAuthorizationEndpoint'))
        obj.oidcAuthorizationEndpoint = ApiClient.convertToType(data['oidcAuthorizationEndpoint'], 'String');
      if (data.hasOwnProperty('jsonWebKeySetUrl'))
        obj.jsonWebKeySetUrl = ApiClient.convertToType(data['jsonWebKeySetUrl'], 'String');
      if (data.hasOwnProperty('accessTokenUrl'))
        obj.accessTokenUrl = ApiClient.convertToType(data['accessTokenUrl'], 'String');
    }
    return obj;
  }

  /**
   * OAuth2 client Id for this tool
   * @member {String} clientId
   */
  exports.prototype.clientId = undefined;

  /**
   * Issuer identifier identifying the learning platform
   * @member {String} platformIssuerIdentifier
   */
  exports.prototype.platformIssuerIdentifier = undefined;

  /**
   * An unchanging identifier (locally unique within the platformIssuerIdentifier) for the platform-tool integration
   * @member {String} deploymentId
   */
  exports.prototype.deploymentId = undefined;

  /**
   * Endpoint that will initiate the OIDC Authentication Request
   * @member {String} oidcAuthorizationEndpoint
   */
  exports.prototype.oidcAuthorizationEndpoint = undefined;

  /**
   * Path to the platform's JSON Web Key Set
   * @member {String} jsonWebKeySetUrl
   */
  exports.prototype.jsonWebKeySetUrl = undefined;

  /**
   * Endpoint that will return OAuth 2 access tokens for the platform
   * @member {String} accessTokenUrl
   */
  exports.prototype.accessTokenUrl = undefined;


  return exports;

}));
