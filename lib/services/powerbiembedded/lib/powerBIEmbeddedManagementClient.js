/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var util = require('util');
var msRest = require('ms-rest');
var msRestAzure = require('ms-rest-azure');
var ServiceClient = msRestAzure.AzureServiceClient;
var WebResource = msRest.WebResource;

var models = require('./models');
var operations = require('./operations');

/**
 * @class
 * Initializes a new instance of the PowerBIEmbeddedManagementClient class.
 * @constructor
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} subscriptionId - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 *
 * @param {string} [baseUri] - The base URI of the service.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
function PowerBIEmbeddedManagementClient(credentials, subscriptionId, baseUri, options) {
  this.apiVersion = '2016-01-29';
  this.acceptLanguage = 'en-US';
  this.longRunningOperationRetryTimeout = 30;
  this.generateClientRequestId = true;
  if (credentials === null || credentials === undefined) {
    throw new Error('\'credentials\' cannot be null.');
  }
  if (subscriptionId === null || subscriptionId === undefined) {
    throw new Error('\'subscriptionId\' cannot be null.');
  }

  if (!options) options = {};

  PowerBIEmbeddedManagementClient['super_'].call(this, credentials, options);
  this.baseUri = baseUri;
  if (!this.baseUri) {
    this.baseUri = 'https://management.azure.com';
  }
  this.credentials = credentials;
  this.subscriptionId = subscriptionId;

  if(options.apiVersion !== null && options.apiVersion !== undefined) { 
    this.apiVersion = options.apiVersion;
  }
  if(options.acceptLanguage !== null && options.acceptLanguage !== undefined) { 
    this.acceptLanguage = options.acceptLanguage;
  }
  if(options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) { 
    this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
  }
  if(options.generateClientRequestId !== null && options.generateClientRequestId !== undefined) { 
    this.generateClientRequestId = options.generateClientRequestId;
  }
  this.workspaceCollections = new operations.WorkspaceCollections(this);
  this.workspaces = new operations.Workspaces(this);
  this.models = models;
  msRest.addSerializationMixin(this);
}

util.inherits(PowerBIEmbeddedManagementClient, ServiceClient);

/**
 * Indicates which operations can be performed by the Power BI Resource
 * Provider.
 *
 * @param {object} [options] Optional Parameters.
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object.
 *                      See {@link OperationList} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
PowerBIEmbeddedManagementClient.prototype.getAvailableOperations = function (options, callback) {
  var client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (this.apiVersion === null || this.apiVersion === undefined || typeof this.apiVersion.valueOf() !== 'string') {
      throw new Error('this.apiVersion cannot be null or undefined and it must be of type string.');
    }
    if (this.acceptLanguage !== null && this.acceptLanguage !== undefined && typeof this.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var requestUrl = this.baseUri +
                   '//providers/Microsoft.PowerBI/operations';
  var queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(this.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }
  // trim all duplicate forward slashes in the url
  var regex = /([^:]\/)\/+/gi;
  requestUrl = requestUrl.replace(regex, '$1');

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if (this.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.acceptLanguage !== undefined && this.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.acceptLanguage;
  }
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          var resultMapper = new client.models['ErrorModel']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = new client.models['OperationList']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
};

module.exports = PowerBIEmbeddedManagementClient;