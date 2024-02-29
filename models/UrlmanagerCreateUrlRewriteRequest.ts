/**
 * Url Manager Service
 * The URL Manager service provides a set of APIs for managing URL rewrites within your application. URL rewriting is a technique used to modify the appearance or structure of URLs while maintaining the functionality and accessibility of the underlying resources.  The URL Manager service offers various operations to create, retrieve, update, and delete URL rewrite configurations. These configurations allow you to define rules that map incoming URLs to different paths or destinations based on specific criteria. By using URL rewriting, you can enhance the user experience, improve SEO (Search Engine Optimization), and manage complex URL structures effectively.  To get started with the URL Manager service, you need to integrate the provided Proto API into your application. The API supports various programming languages and frameworks, making it easy to incorporate URL rewriting functionality into your existing codebase.  Once integrated, you can utilize the different API methods to create, manage, and query URL rewrite configurations based on your application\'s requirements.  Refer to the API documentation for detailed information on the request and response formats, authentication requirements, and example usage of each API method.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UrlRewriteLinkRel } from '../models/UrlRewriteLinkRel';
import { UrlRewriteRedirectType } from '../models/UrlRewriteRedirectType';
import { HttpFile } from '../http/http';

export class UrlmanagerCreateUrlRewriteRequest {
    /**
    * Required.
    */
    'tenantId'?: string;
    /**
    * Required.
    */
    'context'?: string;
    /**
    * Required.
    */
    'requestPath'?: string;
    /**
    * Required.
    */
    'targetPath'?: string;
    'redirectType'?: UrlRewriteRedirectType;
    'linkRel'?: UrlRewriteLinkRel;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "string",
            "format": ""
        },
        {
            "name": "requestPath",
            "baseName": "requestPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "targetPath",
            "baseName": "targetPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "redirectType",
            "baseName": "redirectType",
            "type": "UrlRewriteRedirectType",
            "format": ""
        },
        {
            "name": "linkRel",
            "baseName": "linkRel",
            "type": "UrlRewriteLinkRel",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UrlmanagerCreateUrlRewriteRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



