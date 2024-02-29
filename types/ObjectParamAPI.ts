import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { GetUrlRewriteRequestCompoundIdentifier } from '../models/GetUrlRewriteRequestCompoundIdentifier';
import { ListUrlRewritesRequestFilter } from '../models/ListUrlRewritesRequestFilter';
import { ProtobufAny } from '../models/ProtobufAny';
import { RpcStatus } from '../models/RpcStatus';
import { UrlRewriteLinkRel } from '../models/UrlRewriteLinkRel';
import { UrlRewriteRedirectType } from '../models/UrlRewriteRedirectType';
import { UrlmanagerChangeUrlRewriteRequestPathRequest } from '../models/UrlmanagerChangeUrlRewriteRequestPathRequest';
import { UrlmanagerCreateUrlRewriteRequest } from '../models/UrlmanagerCreateUrlRewriteRequest';
import { UrlmanagerDeleteUrlRewriteRequest } from '../models/UrlmanagerDeleteUrlRewriteRequest';
import { UrlmanagerGetUrlRewriteRequest } from '../models/UrlmanagerGetUrlRewriteRequest';
import { UrlmanagerListUrlRewritesByTargetPathsRequest } from '../models/UrlmanagerListUrlRewritesByTargetPathsRequest';
import { UrlmanagerListUrlRewritesByTargetPathsResponse } from '../models/UrlmanagerListUrlRewritesByTargetPathsResponse';
import { UrlmanagerListUrlRewritesRequest } from '../models/UrlmanagerListUrlRewritesRequest';
import { UrlmanagerListUrlRewritesResponse } from '../models/UrlmanagerListUrlRewritesResponse';
import { UrlmanagerResolveUrlRewriteRequest } from '../models/UrlmanagerResolveUrlRewriteRequest';
import { UrlmanagerUrlRewrite } from '../models/UrlmanagerUrlRewrite';

import { ObservableBasicOperationsApi } from "./ObservableAPI";
import { BasicOperationsApiRequestFactory, BasicOperationsApiResponseProcessor} from "../apis/BasicOperationsApi";

export interface BasicOperationsApiUrlManagerChangeUrlRewriteRequestPathRequest {
    /**
     * 
     * @type UrlmanagerChangeUrlRewriteRequestPathRequest
     * @memberof BasicOperationsApiurlManagerChangeUrlRewriteRequestPath
     */
    body: UrlmanagerChangeUrlRewriteRequestPathRequest
}

export interface BasicOperationsApiUrlManagerChangeUrlRewriteRequestPath2Request {
    /**
     * 
     * @type UrlmanagerChangeUrlRewriteRequestPathRequest
     * @memberof BasicOperationsApiurlManagerChangeUrlRewriteRequestPath2
     */
    body: UrlmanagerChangeUrlRewriteRequestPathRequest
}

export interface BasicOperationsApiUrlManagerCreateUrlRewriteRequest {
    /**
     * 
     * @type UrlmanagerCreateUrlRewriteRequest
     * @memberof BasicOperationsApiurlManagerCreateUrlRewrite
     */
    body: UrlmanagerCreateUrlRewriteRequest
}

export interface BasicOperationsApiUrlManagerCreateUrlRewrite2Request {
    /**
     * 
     * @type UrlmanagerCreateUrlRewriteRequest
     * @memberof BasicOperationsApiurlManagerCreateUrlRewrite2
     */
    body: UrlmanagerCreateUrlRewriteRequest
}

export interface BasicOperationsApiUrlManagerDeleteUrlRewriteRequest {
    /**
     * 
     * @type UrlmanagerDeleteUrlRewriteRequest
     * @memberof BasicOperationsApiurlManagerDeleteUrlRewrite
     */
    body: UrlmanagerDeleteUrlRewriteRequest
}

export interface BasicOperationsApiUrlManagerDeleteUrlRewrite2Request {
    /**
     * 
     * @type UrlmanagerDeleteUrlRewriteRequest
     * @memberof BasicOperationsApiurlManagerDeleteUrlRewrite2
     */
    body: UrlmanagerDeleteUrlRewriteRequest
}

export interface BasicOperationsApiUrlManagerGetUrlRewriteRequest {
    /**
     * 
     * @type UrlmanagerGetUrlRewriteRequest
     * @memberof BasicOperationsApiurlManagerGetUrlRewrite
     */
    body: UrlmanagerGetUrlRewriteRequest
}

export interface BasicOperationsApiUrlManagerGetUrlRewrite2Request {
    /**
     * 
     * @type UrlmanagerGetUrlRewriteRequest
     * @memberof BasicOperationsApiurlManagerGetUrlRewrite2
     */
    body: UrlmanagerGetUrlRewriteRequest
}

export interface BasicOperationsApiUrlManagerListUrlRewritesRequest {
    /**
     * 
     * @type UrlmanagerListUrlRewritesRequest
     * @memberof BasicOperationsApiurlManagerListUrlRewrites
     */
    body: UrlmanagerListUrlRewritesRequest
}

export interface BasicOperationsApiUrlManagerListUrlRewrites2Request {
    /**
     * 
     * @type UrlmanagerListUrlRewritesRequest
     * @memberof BasicOperationsApiurlManagerListUrlRewrites2
     */
    body: UrlmanagerListUrlRewritesRequest
}

export interface BasicOperationsApiUrlManagerListUrlRewritesByTargetPathsRequest {
    /**
     * 
     * @type UrlmanagerListUrlRewritesByTargetPathsRequest
     * @memberof BasicOperationsApiurlManagerListUrlRewritesByTargetPaths
     */
    body: UrlmanagerListUrlRewritesByTargetPathsRequest
}

export interface BasicOperationsApiUrlManagerListUrlRewritesByTargetPaths2Request {
    /**
     * 
     * @type UrlmanagerListUrlRewritesByTargetPathsRequest
     * @memberof BasicOperationsApiurlManagerListUrlRewritesByTargetPaths2
     */
    body: UrlmanagerListUrlRewritesByTargetPathsRequest
}

export interface BasicOperationsApiUrlManagerResolveUrlRewriteRequest {
    /**
     * 
     * @type UrlmanagerResolveUrlRewriteRequest
     * @memberof BasicOperationsApiurlManagerResolveUrlRewrite
     */
    body: UrlmanagerResolveUrlRewriteRequest
}

export interface BasicOperationsApiUrlManagerResolveUrlRewrite2Request {
    /**
     * 
     * @type UrlmanagerResolveUrlRewriteRequest
     * @memberof BasicOperationsApiurlManagerResolveUrlRewrite2
     */
    body: UrlmanagerResolveUrlRewriteRequest
}

export class ObjectBasicOperationsApi {
    private api: ObservableBasicOperationsApi

    public constructor(configuration: Configuration, requestFactory?: BasicOperationsApiRequestFactory, responseProcessor?: BasicOperationsApiResponseProcessor) {
        this.api = new ObservableBasicOperationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Modify the request path of a specific URL rewrite configuration.
     * Change Url Rewrite Request Path
     * @param param the request object
     */
    public urlManagerChangeUrlRewriteRequestPathWithHttpInfo(param: BasicOperationsApiUrlManagerChangeUrlRewriteRequestPathRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.urlManagerChangeUrlRewriteRequestPathWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Modify the request path of a specific URL rewrite configuration.
     * Change Url Rewrite Request Path
     * @param param the request object
     */
    public urlManagerChangeUrlRewriteRequestPath(param: BasicOperationsApiUrlManagerChangeUrlRewriteRequestPathRequest, options?: Configuration): Promise<any> {
        return this.api.urlManagerChangeUrlRewriteRequestPath(param.body,  options).toPromise();
    }

    /**
     * Modify the request path of a specific URL rewrite configuration.
     * Change Url Rewrite Request Path
     * @param param the request object
     */
    public urlManagerChangeUrlRewriteRequestPath2WithHttpInfo(param: BasicOperationsApiUrlManagerChangeUrlRewriteRequestPath2Request, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.urlManagerChangeUrlRewriteRequestPath2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Modify the request path of a specific URL rewrite configuration.
     * Change Url Rewrite Request Path
     * @param param the request object
     */
    public urlManagerChangeUrlRewriteRequestPath2(param: BasicOperationsApiUrlManagerChangeUrlRewriteRequestPath2Request, options?: Configuration): Promise<any> {
        return this.api.urlManagerChangeUrlRewriteRequestPath2(param.body,  options).toPromise();
    }

    /**
     * Create a new URL rewrite configuration with customizable rules.
     * Create Url Rewrite
     * @param param the request object
     */
    public urlManagerCreateUrlRewriteWithHttpInfo(param: BasicOperationsApiUrlManagerCreateUrlRewriteRequest, options?: Configuration): Promise<HttpInfo<UrlmanagerUrlRewrite>> {
        return this.api.urlManagerCreateUrlRewriteWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Create a new URL rewrite configuration with customizable rules.
     * Create Url Rewrite
     * @param param the request object
     */
    public urlManagerCreateUrlRewrite(param: BasicOperationsApiUrlManagerCreateUrlRewriteRequest, options?: Configuration): Promise<UrlmanagerUrlRewrite> {
        return this.api.urlManagerCreateUrlRewrite(param.body,  options).toPromise();
    }

    /**
     * Create a new URL rewrite configuration with customizable rules.
     * Create Url Rewrite
     * @param param the request object
     */
    public urlManagerCreateUrlRewrite2WithHttpInfo(param: BasicOperationsApiUrlManagerCreateUrlRewrite2Request, options?: Configuration): Promise<HttpInfo<UrlmanagerUrlRewrite>> {
        return this.api.urlManagerCreateUrlRewrite2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Create a new URL rewrite configuration with customizable rules.
     * Create Url Rewrite
     * @param param the request object
     */
    public urlManagerCreateUrlRewrite2(param: BasicOperationsApiUrlManagerCreateUrlRewrite2Request, options?: Configuration): Promise<UrlmanagerUrlRewrite> {
        return this.api.urlManagerCreateUrlRewrite2(param.body,  options).toPromise();
    }

    /**
     * Delete an existing URL rewrite configuration.
     * Delete Url Rewrite
     * @param param the request object
     */
    public urlManagerDeleteUrlRewriteWithHttpInfo(param: BasicOperationsApiUrlManagerDeleteUrlRewriteRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.urlManagerDeleteUrlRewriteWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Delete an existing URL rewrite configuration.
     * Delete Url Rewrite
     * @param param the request object
     */
    public urlManagerDeleteUrlRewrite(param: BasicOperationsApiUrlManagerDeleteUrlRewriteRequest, options?: Configuration): Promise<any> {
        return this.api.urlManagerDeleteUrlRewrite(param.body,  options).toPromise();
    }

    /**
     * Delete an existing URL rewrite configuration.
     * Delete Url Rewrite
     * @param param the request object
     */
    public urlManagerDeleteUrlRewrite2WithHttpInfo(param: BasicOperationsApiUrlManagerDeleteUrlRewrite2Request, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.urlManagerDeleteUrlRewrite2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Delete an existing URL rewrite configuration.
     * Delete Url Rewrite
     * @param param the request object
     */
    public urlManagerDeleteUrlRewrite2(param: BasicOperationsApiUrlManagerDeleteUrlRewrite2Request, options?: Configuration): Promise<any> {
        return this.api.urlManagerDeleteUrlRewrite2(param.body,  options).toPromise();
    }

    /**
     * Retrieve the details of a specific URL rewrite configuration.
     * Get Url Rewrite
     * @param param the request object
     */
    public urlManagerGetUrlRewriteWithHttpInfo(param: BasicOperationsApiUrlManagerGetUrlRewriteRequest, options?: Configuration): Promise<HttpInfo<UrlmanagerUrlRewrite>> {
        return this.api.urlManagerGetUrlRewriteWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Retrieve the details of a specific URL rewrite configuration.
     * Get Url Rewrite
     * @param param the request object
     */
    public urlManagerGetUrlRewrite(param: BasicOperationsApiUrlManagerGetUrlRewriteRequest, options?: Configuration): Promise<UrlmanagerUrlRewrite> {
        return this.api.urlManagerGetUrlRewrite(param.body,  options).toPromise();
    }

    /**
     * Retrieve the details of a specific URL rewrite configuration.
     * Get Url Rewrite
     * @param param the request object
     */
    public urlManagerGetUrlRewrite2WithHttpInfo(param: BasicOperationsApiUrlManagerGetUrlRewrite2Request, options?: Configuration): Promise<HttpInfo<UrlmanagerUrlRewrite>> {
        return this.api.urlManagerGetUrlRewrite2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Retrieve the details of a specific URL rewrite configuration.
     * Get Url Rewrite
     * @param param the request object
     */
    public urlManagerGetUrlRewrite2(param: BasicOperationsApiUrlManagerGetUrlRewrite2Request, options?: Configuration): Promise<UrlmanagerUrlRewrite> {
        return this.api.urlManagerGetUrlRewrite2(param.body,  options).toPromise();
    }

    /**
     * Retrieve a list of all URL rewrite configurations in your application.
     * List Url Rewrites
     * @param param the request object
     */
    public urlManagerListUrlRewritesWithHttpInfo(param: BasicOperationsApiUrlManagerListUrlRewritesRequest, options?: Configuration): Promise<HttpInfo<UrlmanagerListUrlRewritesResponse>> {
        return this.api.urlManagerListUrlRewritesWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Retrieve a list of all URL rewrite configurations in your application.
     * List Url Rewrites
     * @param param the request object
     */
    public urlManagerListUrlRewrites(param: BasicOperationsApiUrlManagerListUrlRewritesRequest, options?: Configuration): Promise<UrlmanagerListUrlRewritesResponse> {
        return this.api.urlManagerListUrlRewrites(param.body,  options).toPromise();
    }

    /**
     * Retrieve a list of all URL rewrite configurations in your application.
     * List Url Rewrites
     * @param param the request object
     */
    public urlManagerListUrlRewrites2WithHttpInfo(param: BasicOperationsApiUrlManagerListUrlRewrites2Request, options?: Configuration): Promise<HttpInfo<UrlmanagerListUrlRewritesResponse>> {
        return this.api.urlManagerListUrlRewrites2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Retrieve a list of all URL rewrite configurations in your application.
     * List Url Rewrites
     * @param param the request object
     */
    public urlManagerListUrlRewrites2(param: BasicOperationsApiUrlManagerListUrlRewrites2Request, options?: Configuration): Promise<UrlmanagerListUrlRewritesResponse> {
        return this.api.urlManagerListUrlRewrites2(param.body,  options).toPromise();
    }

    /**
     * Retrieve URL rewrite configurations based on target paths.
     * List Url Rewrites By Target Paths
     * @param param the request object
     */
    public urlManagerListUrlRewritesByTargetPathsWithHttpInfo(param: BasicOperationsApiUrlManagerListUrlRewritesByTargetPathsRequest, options?: Configuration): Promise<HttpInfo<UrlmanagerListUrlRewritesByTargetPathsRequest >> {
        return this.api.urlManagerListUrlRewritesByTargetPathsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Retrieve URL rewrite configurations based on target paths.
     * List Url Rewrites By Target Paths
     * @param param the request object
     */
    public urlManagerListUrlRewritesByTargetPaths(param: BasicOperationsApiUrlManagerListUrlRewritesByTargetPathsRequest, options?: Configuration): Promise<UrlmanagerListUrlRewritesByTargetPathsRequest > {
        return this.api.urlManagerListUrlRewritesByTargetPaths(param.body,  options).toPromise();
    }

    /**
     * Retrieve URL rewrite configurations based on target paths.
     * List Url Rewrites By Target Paths
     * @param param the request object
     */
    public urlManagerListUrlRewritesByTargetPaths2WithHttpInfo(param: BasicOperationsApiUrlManagerListUrlRewritesByTargetPaths2Request, options?: Configuration): Promise<HttpInfo<UrlmanagerListUrlRewritesByTargetPathsRequest >> {
        return this.api.urlManagerListUrlRewritesByTargetPaths2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Retrieve URL rewrite configurations based on target paths.
     * List Url Rewrites By Target Paths
     * @param param the request object
     */
    public urlManagerListUrlRewritesByTargetPaths2(param: BasicOperationsApiUrlManagerListUrlRewritesByTargetPaths2Request, options?: Configuration): Promise<UrlmanagerListUrlRewritesByTargetPathsRequest > {
        return this.api.urlManagerListUrlRewritesByTargetPaths2(param.body,  options).toPromise();
    }

    /**
     * Resolve and retrieve the rewritten URL for a given input URL.
     * Resolve Url Rewrite
     * @param param the request object
     */
    public urlManagerResolveUrlRewriteWithHttpInfo(param: BasicOperationsApiUrlManagerResolveUrlRewriteRequest, options?: Configuration): Promise<HttpInfo<UrlmanagerUrlRewrite>> {
        return this.api.urlManagerResolveUrlRewriteWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Resolve and retrieve the rewritten URL for a given input URL.
     * Resolve Url Rewrite
     * @param param the request object
     */
    public urlManagerResolveUrlRewrite(param: BasicOperationsApiUrlManagerResolveUrlRewriteRequest, options?: Configuration): Promise<UrlmanagerUrlRewrite> {
        return this.api.urlManagerResolveUrlRewrite(param.body,  options).toPromise();
    }

    /**
     * Resolve and retrieve the rewritten URL for a given input URL.
     * Resolve Url Rewrite
     * @param param the request object
     */
    public urlManagerResolveUrlRewrite2WithHttpInfo(param: BasicOperationsApiUrlManagerResolveUrlRewrite2Request, options?: Configuration): Promise<HttpInfo<UrlmanagerUrlRewrite>> {
        return this.api.urlManagerResolveUrlRewrite2WithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Resolve and retrieve the rewritten URL for a given input URL.
     * Resolve Url Rewrite
     * @param param the request object
     */
    public urlManagerResolveUrlRewrite2(param: BasicOperationsApiUrlManagerResolveUrlRewrite2Request, options?: Configuration): Promise<UrlmanagerUrlRewrite> {
        return this.api.urlManagerResolveUrlRewrite2(param.body,  options).toPromise();
    }

}
