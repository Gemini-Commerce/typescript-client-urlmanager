/* tslint:disable */
/* eslint-disable */
/**
 * Url Manager Service
 * The URL Manager service provides a set of APIs for managing URL rewrites within your application. URL rewriting is a technique used to modify the appearance or structure of URLs while maintaining the functionality and accessibility of the underlying resources.  The URL Manager service offers various operations to create, retrieve, update, and delete URL rewrite configurations. These configurations allow you to define rules that map incoming URLs to different paths or destinations based on specific criteria. By using URL rewriting, you can enhance the user experience, improve SEO (Search Engine Optimization), and manage complex URL structures effectively.  To get started with the URL Manager service, you need to integrate the provided Proto API into your application. The API supports various programming languages and frameworks, making it easy to incorporate URL rewriting functionality into your existing codebase.  Once integrated, you can utilize the different API methods to create, manage, and query URL rewrite configurations based on your application\'s requirements.  Refer to the API documentation for detailed information on the request and response formats, authentication requirements, and example usage of each API method.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  RpcStatus,
  UrlmanagerChangeUrlRewriteRequestPathRequest,
  UrlmanagerCreateUrlRewriteRequest,
  UrlmanagerDeleteUrlRewriteRequest,
  UrlmanagerGetUrlRewriteRequest,
  UrlmanagerListUrlRewritesByTargetPathsRequest,
  UrlmanagerListUrlRewritesRequest,
  UrlmanagerListUrlRewritesResponse,
  UrlmanagerResolveUrlRewriteRequest,
  UrlmanagerUrlRewrite,
} from '../models/index';
import {
    RpcStatusFromJSON,
    RpcStatusToJSON,
    UrlmanagerChangeUrlRewriteRequestPathRequestFromJSON,
    UrlmanagerChangeUrlRewriteRequestPathRequestToJSON,
    UrlmanagerCreateUrlRewriteRequestFromJSON,
    UrlmanagerCreateUrlRewriteRequestToJSON,
    UrlmanagerDeleteUrlRewriteRequestFromJSON,
    UrlmanagerDeleteUrlRewriteRequestToJSON,
    UrlmanagerGetUrlRewriteRequestFromJSON,
    UrlmanagerGetUrlRewriteRequestToJSON,
    UrlmanagerListUrlRewritesByTargetPathsRequestFromJSON,
    UrlmanagerListUrlRewritesByTargetPathsRequestToJSON,
    UrlmanagerListUrlRewritesRequestFromJSON,
    UrlmanagerListUrlRewritesRequestToJSON,
    UrlmanagerListUrlRewritesResponseFromJSON,
    UrlmanagerListUrlRewritesResponseToJSON,
    UrlmanagerResolveUrlRewriteRequestFromJSON,
    UrlmanagerResolveUrlRewriteRequestToJSON,
    UrlmanagerUrlRewriteFromJSON,
    UrlmanagerUrlRewriteToJSON,
} from '../models/index';

export interface UrlManagerChangeUrlRewriteRequestPathRequest {
    body: UrlmanagerChangeUrlRewriteRequestPathRequest;
}

export interface UrlManagerChangeUrlRewriteRequestPath2Request {
    body: UrlmanagerChangeUrlRewriteRequestPathRequest;
}

export interface UrlManagerCreateUrlRewriteRequest {
    body: UrlmanagerCreateUrlRewriteRequest;
}

export interface UrlManagerCreateUrlRewrite2Request {
    body: UrlmanagerCreateUrlRewriteRequest;
}

export interface UrlManagerDeleteUrlRewriteRequest {
    body: UrlmanagerDeleteUrlRewriteRequest;
}

export interface UrlManagerDeleteUrlRewrite2Request {
    body: UrlmanagerDeleteUrlRewriteRequest;
}

export interface UrlManagerGetUrlRewriteRequest {
    body: UrlmanagerGetUrlRewriteRequest;
}

export interface UrlManagerGetUrlRewrite2Request {
    body: UrlmanagerGetUrlRewriteRequest;
}

export interface UrlManagerListUrlRewritesRequest {
    body: UrlmanagerListUrlRewritesRequest;
}

export interface UrlManagerListUrlRewrites2Request {
    body: UrlmanagerListUrlRewritesRequest;
}

export interface UrlManagerListUrlRewritesByTargetPathsRequest {
    body: UrlmanagerListUrlRewritesByTargetPathsRequest;
}

export interface UrlManagerListUrlRewritesByTargetPaths2Request {
    body: UrlmanagerListUrlRewritesByTargetPathsRequest;
}

export interface UrlManagerResolveUrlRewriteRequest {
    body: UrlmanagerResolveUrlRewriteRequest;
}

export interface UrlManagerResolveUrlRewrite2Request {
    body: UrlmanagerResolveUrlRewriteRequest;
}

/**
 * 
 */
export class BasicOperationsApi extends runtime.BaseAPI {

    /**
     * Modify the request path of a specific URL rewrite configuration.
     * Change Url Rewrite Request Path
     */
    async urlManagerChangeUrlRewriteRequestPathRaw(requestParameters: UrlManagerChangeUrlRewriteRequestPathRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling urlManagerChangeUrlRewriteRequestPath.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/urlmanager/change_url_rewrite_request_path`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UrlmanagerChangeUrlRewriteRequestPathRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Modify the request path of a specific URL rewrite configuration.
     * Change Url Rewrite Request Path
     */
    async urlManagerChangeUrlRewriteRequestPath(requestParameters: UrlManagerChangeUrlRewriteRequestPathRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.urlManagerChangeUrlRewriteRequestPathRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Modify the request path of a specific URL rewrite configuration.
     * Change Url Rewrite Request Path
     */
    async urlManagerChangeUrlRewriteRequestPath2Raw(requestParameters: UrlManagerChangeUrlRewriteRequestPath2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling urlManagerChangeUrlRewriteRequestPath2.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/urlmanager.UrlManager/ChangeUrlRewriteRequestPath`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UrlmanagerChangeUrlRewriteRequestPathRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Modify the request path of a specific URL rewrite configuration.
     * Change Url Rewrite Request Path
     */
    async urlManagerChangeUrlRewriteRequestPath2(requestParameters: UrlManagerChangeUrlRewriteRequestPath2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.urlManagerChangeUrlRewriteRequestPath2Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a new URL rewrite configuration with customizable rules.
     * Create Url Rewrite
     */
    async urlManagerCreateUrlRewriteRaw(requestParameters: UrlManagerCreateUrlRewriteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UrlmanagerUrlRewrite>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling urlManagerCreateUrlRewrite.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/urlmanager/create_url_rewrite`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UrlmanagerCreateUrlRewriteRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UrlmanagerUrlRewriteFromJSON(jsonValue));
    }

    /**
     * Create a new URL rewrite configuration with customizable rules.
     * Create Url Rewrite
     */
    async urlManagerCreateUrlRewrite(requestParameters: UrlManagerCreateUrlRewriteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UrlmanagerUrlRewrite> {
        const response = await this.urlManagerCreateUrlRewriteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a new URL rewrite configuration with customizable rules.
     * Create Url Rewrite
     */
    async urlManagerCreateUrlRewrite2Raw(requestParameters: UrlManagerCreateUrlRewrite2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UrlmanagerUrlRewrite>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling urlManagerCreateUrlRewrite2.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/urlmanager.UrlManager/CreateUrlRewrite`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UrlmanagerCreateUrlRewriteRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UrlmanagerUrlRewriteFromJSON(jsonValue));
    }

    /**
     * Create a new URL rewrite configuration with customizable rules.
     * Create Url Rewrite
     */
    async urlManagerCreateUrlRewrite2(requestParameters: UrlManagerCreateUrlRewrite2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UrlmanagerUrlRewrite> {
        const response = await this.urlManagerCreateUrlRewrite2Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete an existing URL rewrite configuration.
     * Delete Url Rewrite
     */
    async urlManagerDeleteUrlRewriteRaw(requestParameters: UrlManagerDeleteUrlRewriteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling urlManagerDeleteUrlRewrite.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/urlmanager/delete_url_rewrite`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UrlmanagerDeleteUrlRewriteRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Delete an existing URL rewrite configuration.
     * Delete Url Rewrite
     */
    async urlManagerDeleteUrlRewrite(requestParameters: UrlManagerDeleteUrlRewriteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.urlManagerDeleteUrlRewriteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete an existing URL rewrite configuration.
     * Delete Url Rewrite
     */
    async urlManagerDeleteUrlRewrite2Raw(requestParameters: UrlManagerDeleteUrlRewrite2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling urlManagerDeleteUrlRewrite2.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/urlmanager.UrlManager/DeleteUrlRewrite`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UrlmanagerDeleteUrlRewriteRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Delete an existing URL rewrite configuration.
     * Delete Url Rewrite
     */
    async urlManagerDeleteUrlRewrite2(requestParameters: UrlManagerDeleteUrlRewrite2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.urlManagerDeleteUrlRewrite2Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve the details of a specific URL rewrite configuration.
     * Get Url Rewrite
     */
    async urlManagerGetUrlRewriteRaw(requestParameters: UrlManagerGetUrlRewriteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UrlmanagerUrlRewrite>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling urlManagerGetUrlRewrite.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/urlmanager/get_url_rewrite`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UrlmanagerGetUrlRewriteRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UrlmanagerUrlRewriteFromJSON(jsonValue));
    }

    /**
     * Retrieve the details of a specific URL rewrite configuration.
     * Get Url Rewrite
     */
    async urlManagerGetUrlRewrite(requestParameters: UrlManagerGetUrlRewriteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UrlmanagerUrlRewrite> {
        const response = await this.urlManagerGetUrlRewriteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve the details of a specific URL rewrite configuration.
     * Get Url Rewrite
     */
    async urlManagerGetUrlRewrite2Raw(requestParameters: UrlManagerGetUrlRewrite2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UrlmanagerUrlRewrite>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling urlManagerGetUrlRewrite2.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/urlmanager.UrlManager/GetUrlRewrite`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UrlmanagerGetUrlRewriteRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UrlmanagerUrlRewriteFromJSON(jsonValue));
    }

    /**
     * Retrieve the details of a specific URL rewrite configuration.
     * Get Url Rewrite
     */
    async urlManagerGetUrlRewrite2(requestParameters: UrlManagerGetUrlRewrite2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UrlmanagerUrlRewrite> {
        const response = await this.urlManagerGetUrlRewrite2Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of all URL rewrite configurations in your application.
     * List Url Rewrites
     */
    async urlManagerListUrlRewritesRaw(requestParameters: UrlManagerListUrlRewritesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UrlmanagerListUrlRewritesResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling urlManagerListUrlRewrites.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/urlmanager/list_url_rewrites`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UrlmanagerListUrlRewritesRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UrlmanagerListUrlRewritesResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of all URL rewrite configurations in your application.
     * List Url Rewrites
     */
    async urlManagerListUrlRewrites(requestParameters: UrlManagerListUrlRewritesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UrlmanagerListUrlRewritesResponse> {
        const response = await this.urlManagerListUrlRewritesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of all URL rewrite configurations in your application.
     * List Url Rewrites
     */
    async urlManagerListUrlRewrites2Raw(requestParameters: UrlManagerListUrlRewrites2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UrlmanagerListUrlRewritesResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling urlManagerListUrlRewrites2.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/urlmanager.UrlManager/ListUrlRewrites`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UrlmanagerListUrlRewritesRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UrlmanagerListUrlRewritesResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of all URL rewrite configurations in your application.
     * List Url Rewrites
     */
    async urlManagerListUrlRewrites2(requestParameters: UrlManagerListUrlRewrites2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UrlmanagerListUrlRewritesResponse> {
        const response = await this.urlManagerListUrlRewrites2Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve URL rewrite configurations based on target paths.
     * List Url Rewrites By Target Paths
     */
    async urlManagerListUrlRewritesByTargetPathsRaw(requestParameters: UrlManagerListUrlRewritesByTargetPathsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UrlmanagerListUrlRewritesByTargetPathsRequest >> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling urlManagerListUrlRewritesByTargetPaths.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/urlmanager/list_url_rewrites_by_target_paths`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UrlmanagerListUrlRewritesByTargetPathsRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UrlmanagerListUrlRewritesByTargetPathsRequest FromJSON(jsonValue));
    }

    /**
     * Retrieve URL rewrite configurations based on target paths.
     * List Url Rewrites By Target Paths
     */
    async urlManagerListUrlRewritesByTargetPaths(requestParameters: UrlManagerListUrlRewritesByTargetPathsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UrlmanagerListUrlRewritesByTargetPathsRequest > {
        const response = await this.urlManagerListUrlRewritesByTargetPathsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve URL rewrite configurations based on target paths.
     * List Url Rewrites By Target Paths
     */
    async urlManagerListUrlRewritesByTargetPaths2Raw(requestParameters: UrlManagerListUrlRewritesByTargetPaths2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UrlmanagerListUrlRewritesByTargetPathsRequest >> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling urlManagerListUrlRewritesByTargetPaths2.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/urlmanager.UrlManager/ListUrlRewritesByTargetPaths`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UrlmanagerListUrlRewritesByTargetPathsRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UrlmanagerListUrlRewritesByTargetPathsRequest FromJSON(jsonValue));
    }

    /**
     * Retrieve URL rewrite configurations based on target paths.
     * List Url Rewrites By Target Paths
     */
    async urlManagerListUrlRewritesByTargetPaths2(requestParameters: UrlManagerListUrlRewritesByTargetPaths2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UrlmanagerListUrlRewritesByTargetPathsRequest > {
        const response = await this.urlManagerListUrlRewritesByTargetPaths2Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Resolve and retrieve the rewritten URL for a given input URL.
     * Resolve Url Rewrite
     */
    async urlManagerResolveUrlRewriteRaw(requestParameters: UrlManagerResolveUrlRewriteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UrlmanagerUrlRewrite>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling urlManagerResolveUrlRewrite.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/urlmanager/resolve_url_rewrite`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UrlmanagerResolveUrlRewriteRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UrlmanagerUrlRewriteFromJSON(jsonValue));
    }

    /**
     * Resolve and retrieve the rewritten URL for a given input URL.
     * Resolve Url Rewrite
     */
    async urlManagerResolveUrlRewrite(requestParameters: UrlManagerResolveUrlRewriteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UrlmanagerUrlRewrite> {
        const response = await this.urlManagerResolveUrlRewriteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Resolve and retrieve the rewritten URL for a given input URL.
     * Resolve Url Rewrite
     */
    async urlManagerResolveUrlRewrite2Raw(requestParameters: UrlManagerResolveUrlRewrite2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UrlmanagerUrlRewrite>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling urlManagerResolveUrlRewrite2.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/urlmanager.UrlManager/ResolveUrlRewrite`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UrlmanagerResolveUrlRewriteRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UrlmanagerUrlRewriteFromJSON(jsonValue));
    }

    /**
     * Resolve and retrieve the rewritten URL for a given input URL.
     * Resolve Url Rewrite
     */
    async urlManagerResolveUrlRewrite2(requestParameters: UrlManagerResolveUrlRewrite2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UrlmanagerUrlRewrite> {
        const response = await this.urlManagerResolveUrlRewrite2Raw(requestParameters, initOverrides);
        return await response.value();
    }

}