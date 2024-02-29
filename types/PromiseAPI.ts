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
import { ObservableBasicOperationsApi } from './ObservableAPI';

import { BasicOperationsApiRequestFactory, BasicOperationsApiResponseProcessor} from "../apis/BasicOperationsApi";
export class PromiseBasicOperationsApi {
    private api: ObservableBasicOperationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicOperationsApiRequestFactory,
        responseProcessor?: BasicOperationsApiResponseProcessor
    ) {
        this.api = new ObservableBasicOperationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Modify the request path of a specific URL rewrite configuration.
     * Change Url Rewrite Request Path
     * @param body 
     */
    public urlManagerChangeUrlRewriteRequestPathWithHttpInfo(body: UrlmanagerChangeUrlRewriteRequestPathRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.urlManagerChangeUrlRewriteRequestPathWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Modify the request path of a specific URL rewrite configuration.
     * Change Url Rewrite Request Path
     * @param body 
     */
    public urlManagerChangeUrlRewriteRequestPath(body: UrlmanagerChangeUrlRewriteRequestPathRequest, _options?: Configuration): Promise<any> {
        const result = this.api.urlManagerChangeUrlRewriteRequestPath(body, _options);
        return result.toPromise();
    }

    /**
     * Modify the request path of a specific URL rewrite configuration.
     * Change Url Rewrite Request Path
     * @param body 
     */
    public urlManagerChangeUrlRewriteRequestPath2WithHttpInfo(body: UrlmanagerChangeUrlRewriteRequestPathRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.urlManagerChangeUrlRewriteRequestPath2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Modify the request path of a specific URL rewrite configuration.
     * Change Url Rewrite Request Path
     * @param body 
     */
    public urlManagerChangeUrlRewriteRequestPath2(body: UrlmanagerChangeUrlRewriteRequestPathRequest, _options?: Configuration): Promise<any> {
        const result = this.api.urlManagerChangeUrlRewriteRequestPath2(body, _options);
        return result.toPromise();
    }

    /**
     * Create a new URL rewrite configuration with customizable rules.
     * Create Url Rewrite
     * @param body 
     */
    public urlManagerCreateUrlRewriteWithHttpInfo(body: UrlmanagerCreateUrlRewriteRequest, _options?: Configuration): Promise<HttpInfo<UrlmanagerUrlRewrite>> {
        const result = this.api.urlManagerCreateUrlRewriteWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Create a new URL rewrite configuration with customizable rules.
     * Create Url Rewrite
     * @param body 
     */
    public urlManagerCreateUrlRewrite(body: UrlmanagerCreateUrlRewriteRequest, _options?: Configuration): Promise<UrlmanagerUrlRewrite> {
        const result = this.api.urlManagerCreateUrlRewrite(body, _options);
        return result.toPromise();
    }

    /**
     * Create a new URL rewrite configuration with customizable rules.
     * Create Url Rewrite
     * @param body 
     */
    public urlManagerCreateUrlRewrite2WithHttpInfo(body: UrlmanagerCreateUrlRewriteRequest, _options?: Configuration): Promise<HttpInfo<UrlmanagerUrlRewrite>> {
        const result = this.api.urlManagerCreateUrlRewrite2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Create a new URL rewrite configuration with customizable rules.
     * Create Url Rewrite
     * @param body 
     */
    public urlManagerCreateUrlRewrite2(body: UrlmanagerCreateUrlRewriteRequest, _options?: Configuration): Promise<UrlmanagerUrlRewrite> {
        const result = this.api.urlManagerCreateUrlRewrite2(body, _options);
        return result.toPromise();
    }

    /**
     * Delete an existing URL rewrite configuration.
     * Delete Url Rewrite
     * @param body 
     */
    public urlManagerDeleteUrlRewriteWithHttpInfo(body: UrlmanagerDeleteUrlRewriteRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.urlManagerDeleteUrlRewriteWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Delete an existing URL rewrite configuration.
     * Delete Url Rewrite
     * @param body 
     */
    public urlManagerDeleteUrlRewrite(body: UrlmanagerDeleteUrlRewriteRequest, _options?: Configuration): Promise<any> {
        const result = this.api.urlManagerDeleteUrlRewrite(body, _options);
        return result.toPromise();
    }

    /**
     * Delete an existing URL rewrite configuration.
     * Delete Url Rewrite
     * @param body 
     */
    public urlManagerDeleteUrlRewrite2WithHttpInfo(body: UrlmanagerDeleteUrlRewriteRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.urlManagerDeleteUrlRewrite2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Delete an existing URL rewrite configuration.
     * Delete Url Rewrite
     * @param body 
     */
    public urlManagerDeleteUrlRewrite2(body: UrlmanagerDeleteUrlRewriteRequest, _options?: Configuration): Promise<any> {
        const result = this.api.urlManagerDeleteUrlRewrite2(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a specific URL rewrite configuration.
     * Get Url Rewrite
     * @param body 
     */
    public urlManagerGetUrlRewriteWithHttpInfo(body: UrlmanagerGetUrlRewriteRequest, _options?: Configuration): Promise<HttpInfo<UrlmanagerUrlRewrite>> {
        const result = this.api.urlManagerGetUrlRewriteWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a specific URL rewrite configuration.
     * Get Url Rewrite
     * @param body 
     */
    public urlManagerGetUrlRewrite(body: UrlmanagerGetUrlRewriteRequest, _options?: Configuration): Promise<UrlmanagerUrlRewrite> {
        const result = this.api.urlManagerGetUrlRewrite(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a specific URL rewrite configuration.
     * Get Url Rewrite
     * @param body 
     */
    public urlManagerGetUrlRewrite2WithHttpInfo(body: UrlmanagerGetUrlRewriteRequest, _options?: Configuration): Promise<HttpInfo<UrlmanagerUrlRewrite>> {
        const result = this.api.urlManagerGetUrlRewrite2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a specific URL rewrite configuration.
     * Get Url Rewrite
     * @param body 
     */
    public urlManagerGetUrlRewrite2(body: UrlmanagerGetUrlRewriteRequest, _options?: Configuration): Promise<UrlmanagerUrlRewrite> {
        const result = this.api.urlManagerGetUrlRewrite2(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of all URL rewrite configurations in your application.
     * List Url Rewrites
     * @param body 
     */
    public urlManagerListUrlRewritesWithHttpInfo(body: UrlmanagerListUrlRewritesRequest, _options?: Configuration): Promise<HttpInfo<UrlmanagerListUrlRewritesResponse>> {
        const result = this.api.urlManagerListUrlRewritesWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of all URL rewrite configurations in your application.
     * List Url Rewrites
     * @param body 
     */
    public urlManagerListUrlRewrites(body: UrlmanagerListUrlRewritesRequest, _options?: Configuration): Promise<UrlmanagerListUrlRewritesResponse> {
        const result = this.api.urlManagerListUrlRewrites(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of all URL rewrite configurations in your application.
     * List Url Rewrites
     * @param body 
     */
    public urlManagerListUrlRewrites2WithHttpInfo(body: UrlmanagerListUrlRewritesRequest, _options?: Configuration): Promise<HttpInfo<UrlmanagerListUrlRewritesResponse>> {
        const result = this.api.urlManagerListUrlRewrites2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a list of all URL rewrite configurations in your application.
     * List Url Rewrites
     * @param body 
     */
    public urlManagerListUrlRewrites2(body: UrlmanagerListUrlRewritesRequest, _options?: Configuration): Promise<UrlmanagerListUrlRewritesResponse> {
        const result = this.api.urlManagerListUrlRewrites2(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve URL rewrite configurations based on target paths.
     * List Url Rewrites By Target Paths
     * @param body 
     */
    public urlManagerListUrlRewritesByTargetPathsWithHttpInfo(body: UrlmanagerListUrlRewritesByTargetPathsRequest, _options?: Configuration): Promise<HttpInfo<UrlmanagerListUrlRewritesByTargetPathsRequest >> {
        const result = this.api.urlManagerListUrlRewritesByTargetPathsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve URL rewrite configurations based on target paths.
     * List Url Rewrites By Target Paths
     * @param body 
     */
    public urlManagerListUrlRewritesByTargetPaths(body: UrlmanagerListUrlRewritesByTargetPathsRequest, _options?: Configuration): Promise<UrlmanagerListUrlRewritesByTargetPathsRequest > {
        const result = this.api.urlManagerListUrlRewritesByTargetPaths(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve URL rewrite configurations based on target paths.
     * List Url Rewrites By Target Paths
     * @param body 
     */
    public urlManagerListUrlRewritesByTargetPaths2WithHttpInfo(body: UrlmanagerListUrlRewritesByTargetPathsRequest, _options?: Configuration): Promise<HttpInfo<UrlmanagerListUrlRewritesByTargetPathsRequest >> {
        const result = this.api.urlManagerListUrlRewritesByTargetPaths2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Retrieve URL rewrite configurations based on target paths.
     * List Url Rewrites By Target Paths
     * @param body 
     */
    public urlManagerListUrlRewritesByTargetPaths2(body: UrlmanagerListUrlRewritesByTargetPathsRequest, _options?: Configuration): Promise<UrlmanagerListUrlRewritesByTargetPathsRequest > {
        const result = this.api.urlManagerListUrlRewritesByTargetPaths2(body, _options);
        return result.toPromise();
    }

    /**
     * Resolve and retrieve the rewritten URL for a given input URL.
     * Resolve Url Rewrite
     * @param body 
     */
    public urlManagerResolveUrlRewriteWithHttpInfo(body: UrlmanagerResolveUrlRewriteRequest, _options?: Configuration): Promise<HttpInfo<UrlmanagerUrlRewrite>> {
        const result = this.api.urlManagerResolveUrlRewriteWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Resolve and retrieve the rewritten URL for a given input URL.
     * Resolve Url Rewrite
     * @param body 
     */
    public urlManagerResolveUrlRewrite(body: UrlmanagerResolveUrlRewriteRequest, _options?: Configuration): Promise<UrlmanagerUrlRewrite> {
        const result = this.api.urlManagerResolveUrlRewrite(body, _options);
        return result.toPromise();
    }

    /**
     * Resolve and retrieve the rewritten URL for a given input URL.
     * Resolve Url Rewrite
     * @param body 
     */
    public urlManagerResolveUrlRewrite2WithHttpInfo(body: UrlmanagerResolveUrlRewriteRequest, _options?: Configuration): Promise<HttpInfo<UrlmanagerUrlRewrite>> {
        const result = this.api.urlManagerResolveUrlRewrite2WithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Resolve and retrieve the rewritten URL for a given input URL.
     * Resolve Url Rewrite
     * @param body 
     */
    public urlManagerResolveUrlRewrite2(body: UrlmanagerResolveUrlRewriteRequest, _options?: Configuration): Promise<UrlmanagerUrlRewrite> {
        const result = this.api.urlManagerResolveUrlRewrite2(body, _options);
        return result.toPromise();
    }


}



