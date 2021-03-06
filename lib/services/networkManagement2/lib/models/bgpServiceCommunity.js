/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the BgpServiceCommunity class.
 * @constructor
 * Service Community Properties.
 *
 * @member {array} [communities] Get a list of bgp communities.
 *
 */
function BgpServiceCommunity() {
  BgpServiceCommunity['super_'].call(this);
}

util.inherits(BgpServiceCommunity, models['Resource']);

/**
 * Defines the metadata of BgpServiceCommunity
 *
 * @returns {object} metadata of BgpServiceCommunity
 *
 */
BgpServiceCommunity.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'BgpServiceCommunity',
    type: {
      name: 'Composite',
      className: 'BgpServiceCommunity',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          readOnly: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          readOnly: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        location: {
          required: false,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        communities: {
          required: false,
          serializedName: 'properties.communities',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'BGPCommunityElementType',
                type: {
                  name: 'Composite',
                  className: 'BGPCommunity'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = BgpServiceCommunity;
