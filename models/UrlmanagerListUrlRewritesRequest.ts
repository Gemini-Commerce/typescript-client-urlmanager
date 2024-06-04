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

import { ListUrlRewritesRequestFilter } from '../models/ListUrlRewritesRequestFilter';
import { HttpFile } from '../http/http';

export class UrlmanagerListUrlRewritesRequest {
    /**
    * Required.
    */
    'tenantId'?: string;
    'filter'?: ListUrlRewritesRequestFilter;
    /**
    * The maximum number of url rewrites to return. The service may return fewer than this value. If unspecified, at most 10 url rewrites will be returned. The maximum value is 200; values above 200 will be coerced to 200.
    */
    'pageSize'?: number;
    /**
    * A page token, received from a previous `ListUrlRewrites` call. Provide this to retrieve the subsequent page.   When paginating, all other parameters provided to `ListUrlRewrites` must match the call that provided the page token.
    */
    'pageToken'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "ListUrlRewritesRequestFilter",
            "format": ""
        },
        {
            "name": "pageSize",
            "baseName": "pageSize",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "pageToken",
            "baseName": "pageToken",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UrlmanagerListUrlRewritesRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

