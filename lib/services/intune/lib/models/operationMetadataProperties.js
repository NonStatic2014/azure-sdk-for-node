/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the OperationMetadataProperties class.
 * @constructor
 * @member {string} name
 * 
 * @member {string} value
 * 
 */
function OperationMetadataProperties() {
}

/**
 * Defines the metadata of OperationMetadataProperties
 *
 * @returns {object} metadata of OperationMetadataProperties
 *
 */
OperationMetadataProperties.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'operationMetadataProperties',
    type: {
      name: 'Composite',
      className: 'OperationMetadataProperties',
      modelProperties: {
        name: {
          required: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        value: {
          required: true,
          serializedName: 'value',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = OperationMetadataProperties;