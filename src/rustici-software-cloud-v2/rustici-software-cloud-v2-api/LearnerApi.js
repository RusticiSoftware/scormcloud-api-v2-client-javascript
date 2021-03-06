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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/BatchTagsSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/LearnerSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/MessageSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/TagListSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../rustici-software-cloud-v2-model/BatchTagsSchema'), require('../rustici-software-cloud-v2-model/LearnerSchema'), require('../rustici-software-cloud-v2-model/MessageSchema'), require('../rustici-software-cloud-v2-model/TagListSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.LearnerApi = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.BatchTagsSchema, root.RusticiSoftwareCloudV2.LearnerSchema, root.RusticiSoftwareCloudV2.MessageSchema, root.RusticiSoftwareCloudV2.TagListSchema);
  }
}(this, function(ApiClient, BatchTagsSchema, LearnerSchema, MessageSchema, TagListSchema) {
  'use strict';

  /**
   * Learner service.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-api/LearnerApi
   * @version 1.0.0
   */

  /**
   * Constructs a new LearnerApi. 
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/LearnerApi
   * @class
   * @param {module:rustici-software-cloud-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:rustici-software-cloud-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteAllLearnerData operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/LearnerApi~deleteAllLearnerDataCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes all of the information associated with a learner in an application, by learner id. 
     * Deletes all of the information associated with a learner in an application, by learner id. This is meant for use with complying with GDPR requests from learners. 
     * @param {String} learnerId The id of the learner for which to remove all data from an application
     * @param {String} userEmail The email of the user initiating this request on behalf of the learner being deleted. This must be a valid primary email address for a SCORM Cloud realm which this application is in.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/LearnerApi~deleteAllLearnerDataCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteAllLearnerData = function(learnerId, userEmail, callback) {
      var postBody = null;

      // verify the required parameter 'learnerId' is set
      if (learnerId == undefined || learnerId == null) {
        throw new Error("Missing the required parameter 'learnerId' when calling deleteAllLearnerData");
      }

      // verify the required parameter 'userEmail' is set
      if (userEmail == undefined || userEmail == null) {
        throw new Error("Missing the required parameter 'userEmail' when calling deleteAllLearnerData");
      }


      var pathParams = {
        'learnerId': learnerId
      };
      var queryParams = {
        'userEmail': userEmail
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/learner/{learnerId}/delete-information', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLearnerTags operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/LearnerApi~deleteLearnerTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the tags for this learner 
     * Delete the tags for this learner 
     * @param {String} learnerId The id of the learner for which to remove all data from an application
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/TagListSchema} tags 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/LearnerApi~deleteLearnerTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteLearnerTags = function(learnerId, tags, callback) {
      var postBody = tags;

      // verify the required parameter 'learnerId' is set
      if (learnerId == undefined || learnerId == null) {
        throw new Error("Missing the required parameter 'learnerId' when calling deleteLearnerTags");
      }

      // verify the required parameter 'tags' is set
      if (tags == undefined || tags == null) {
        throw new Error("Missing the required parameter 'tags' when calling deleteLearnerTags");
      }


      var pathParams = {
        'learnerId': learnerId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/learner/{learnerId}/tags', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLearnerTags operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/LearnerApi~getLearnerTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/TagListSchema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for this learner 
     * Get the tags for this learner 
     * @param {String} learnerId The id of the learner for which to remove all data from an application
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/LearnerApi~getLearnerTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/TagListSchema}
     */
    this.getLearnerTags = function(learnerId, callback) {
      var postBody = null;

      // verify the required parameter 'learnerId' is set
      if (learnerId == undefined || learnerId == null) {
        throw new Error("Missing the required parameter 'learnerId' when calling getLearnerTags");
      }


      var pathParams = {
        'learnerId': learnerId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TagListSchema;

      return this.apiClient.callApi(
        '/learner/{learnerId}/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putLearnerTags operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/LearnerApi~putLearnerTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the tags for this learner 
     * Set the tags for this learner 
     * @param {String} learnerId The id of the learner for which to remove all data from an application
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/TagListSchema} tags 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/LearnerApi~putLearnerTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putLearnerTags = function(learnerId, tags, callback) {
      var postBody = tags;

      // verify the required parameter 'learnerId' is set
      if (learnerId == undefined || learnerId == null) {
        throw new Error("Missing the required parameter 'learnerId' when calling putLearnerTags");
      }

      // verify the required parameter 'tags' is set
      if (tags == undefined || tags == null) {
        throw new Error("Missing the required parameter 'tags' when calling putLearnerTags");
      }


      var pathParams = {
        'learnerId': learnerId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/learner/{learnerId}/tags', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putLearnerTagsBatch operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/LearnerApi~putLearnerTagsBatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sets all of the provided tags on all of the provided learners
     * Sets all of the provided tags on all of the provided learners 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/BatchTagsSchema} batch Object representing an array of ids to apply an array of tags to.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/LearnerApi~putLearnerTagsBatchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putLearnerTagsBatch = function(batch, callback) {
      var postBody = batch;

      // verify the required parameter 'batch' is set
      if (batch == undefined || batch == null) {
        throw new Error("Missing the required parameter 'batch' when calling putLearnerTagsBatch");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/learner/tags', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLearnerInfo operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/LearnerApi~updateLearnerInfoCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a learner&#39;s info on all of their registrations.
     * A learner in SCORM Cloud is not an entity on its own.  In fact, learners only exist as information on individual registrations. This method will update the information on each of the registrations that the provided &#x60;learnerId&#x60; is attached to.  You may update any of the values available in the LearnerSchema which is posted.  Any values you do not wish to alter, omit from the post.  Depending on the field, providing something like an empty string may have unintended consequences.  Lastly, it&#39;s important to note that this method is asynchronous.  A success status will be returned, and that signifies that a background process has been spun up to alter the learner&#39;s info.  As such, you may find a short period of delay in seeing the changes shown on all registrations. 
     * @param {String} learnerId The id of the learner to be updated
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/LearnerSchema} learnerInfo 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/LearnerApi~updateLearnerInfoCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateLearnerInfo = function(learnerId, learnerInfo, callback) {
      var postBody = learnerInfo;

      // verify the required parameter 'learnerId' is set
      if (learnerId == undefined || learnerId == null) {
        throw new Error("Missing the required parameter 'learnerId' when calling updateLearnerInfo");
      }

      // verify the required parameter 'learnerInfo' is set
      if (learnerInfo == undefined || learnerInfo == null) {
        throw new Error("Missing the required parameter 'learnerInfo' when calling updateLearnerInfo");
      }


      var pathParams = {
        'learnerId': learnerId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/learner/{learnerId}/updateInfo', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
