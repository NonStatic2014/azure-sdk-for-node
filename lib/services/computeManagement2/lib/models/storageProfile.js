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

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the StorageProfile class.
 * @constructor
 * Describes a storage profile.
 * @member {object} [imageReference] Gets or sets the image reference.
 * 
 * @member {string} [imageReference.publisher] Gets or sets the image
 * publisher.
 * 
 * @member {string} [imageReference.offer] Gets or sets the image offer.
 * 
 * @member {string} [imageReference.sku] Gets or sets the image sku.
 * 
 * @member {string} [imageReference.version] Gets or sets the image version.
 * The allowed formats are Major.Minor.Build or 'latest'. Major, Minor and
 * Build being decimal numbers. Specify 'latest' to use the latest version of
 * image.
 * 
 * @member {object} [osDisk] Gets or sets the OS disk.
 * 
 * @member {string} [osDisk.osType] Gets or sets the Operating System type.
 * Possible values for this property include: 'Windows', 'Linux'.
 * 
 * @member {object} [osDisk.encryptionSettings] Gets or sets the disk
 * encryption settings.
 * 
 * @member {object} [osDisk.encryptionSettings.diskEncryptionKey] Gets or sets
 * the disk encryption key which is a KeyVault Secret.
 * 
 * @member {string} [osDisk.encryptionSettings.diskEncryptionKey.secretUrl]
 * Gets or sets the URL referencing a secret in a Key Vault.
 * 
 * @member {object} [osDisk.encryptionSettings.diskEncryptionKey.sourceVault]
 * Gets or sets the Relative URL of the Key Vault containing the secret.
 * 
 * @member {string}
 * [osDisk.encryptionSettings.diskEncryptionKey.sourceVault.id] Resource Id
 * 
 * @member {object} [osDisk.encryptionSettings.keyEncryptionKey] Gets or sets
 * the key encryption key which is KeyVault Key.
 * 
 * @member {string} [osDisk.encryptionSettings.keyEncryptionKey.keyUrl] Gets
 * or sets the URL referencing a key in a Key Vault.
 * 
 * @member {object} [osDisk.encryptionSettings.keyEncryptionKey.sourceVault]
 * Gets or sets the Relative URL of the Key Vault containing the key
 * 
 * @member {string}
 * [osDisk.encryptionSettings.keyEncryptionKey.sourceVault.id] Resource Id
 * 
 * @member {string} [osDisk.name] Gets or sets the disk name.
 * 
 * @member {object} [osDisk.vhd] Gets or sets the Virtual Hard Disk.
 * 
 * @member {string} [osDisk.vhd.uri] Gets or sets the virtual hard disk's uri.
 * It should be a valid Uri to a virtual hard disk.
 * 
 * @member {object} [osDisk.image] Gets or sets the Source User Image
 * VirtualHardDisk. This VirtualHardDisk will be copied before using it to
 * attach to the Virtual Machine.If SourceImage is provided, the destination
 * VirtualHardDisk should not exist.
 * 
 * @member {string} [osDisk.image.uri] Gets or sets the virtual hard disk's
 * uri. It should be a valid Uri to a virtual hard disk.
 * 
 * @member {string} [osDisk.caching] Gets or sets the caching type. Possible
 * values for this property include: 'None', 'ReadOnly', 'ReadWrite'.
 * 
 * @member {string} [osDisk.createOption] Gets or sets the create option.
 * Possible values for this property include: 'fromImage', 'empty', 'attach'.
 * 
 * @member {number} [osDisk.diskSizeGB] Gets or sets the initial disk size in
 * GB for blank data disks, and the new desired size for existing OS and Data
 * disks.
 * 
 * @member {array} [dataDisks] Gets or sets the data disks.
 * 
 */
function StorageProfile() {
}

/**
 * Defines the metadata of StorageProfile
 *
 * @returns {object} metadata of StorageProfile
 *
 */
StorageProfile.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'StorageProfile',
    type: {
      name: 'Composite',
      className: 'StorageProfile',
      modelProperties: {
        imageReference: {
          required: false,
          serializedName: 'imageReference',
          type: {
            name: 'Composite',
            className: 'ImageReference'
          }
        },
        osDisk: {
          required: false,
          serializedName: 'osDisk',
          type: {
            name: 'Composite',
            className: 'OSDisk'
          }
        },
        dataDisks: {
          required: false,
          serializedName: 'dataDisks',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'DataDiskElementType',
                type: {
                  name: 'Composite',
                  className: 'DataDisk'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = StorageProfile;