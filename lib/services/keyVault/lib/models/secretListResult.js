/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the SecretListResult class.
 * @constructor
 * The secret list result
 * @member {array} [value] A response message containing a list of secrets in
 * the vault along with a link to the next page of secrets
 * 
 * @member {string} [nextLink] The URL to get the next set of secrets.
 * 
 */
function SecretListResult() {
}

util.inherits(SecretListResult, Array);

/**
 * Defines the metadata of SecretListResult
 *
 * @returns {object} metadata of SecretListResult
 *
 */
SecretListResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'SecretListResult',
    type: {
      name: 'Composite',
      className: 'SecretListResult',
      modelProperties: {
        value: {
          required: false,
          readOnly: true,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'SecretItemElementType',
                type: {
                  name: 'Composite',
                  className: 'SecretItem'
                }
            }
          }
        },
        nextLink: {
          required: false,
          readOnly: true,
          serializedName: 'nextLink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = SecretListResult;