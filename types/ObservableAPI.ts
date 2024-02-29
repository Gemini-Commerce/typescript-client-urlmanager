import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { BasicOperationsApiRequestFactory, BasicOperationsApiResponseProcessor} from "../apis/BasicOperationsApi";
export class ObservableBasicOperationsApi {
    private requestFactory: BasicOperationsApiRequestFactory;
    private responseProcessor: BasicOperationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicOperationsApiRequestFactory,
        responseProcessor?: BasicOperationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BasicOperationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BasicOperationsApiResponseProcessor();
    }

    /**
     * Modify the request path of a specific URL rewrite configuration.
     * Change Url Rewrite Request Path
     * @param body 
     */
    public urlManagerChangeUrlRewriteRequestPathWithHttpInfo(body: UrlmanagerChangeUrlRewriteRequestPathRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.urlManagerChangeUrlRewriteRequestPath(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.urlManagerChangeUrlRewriteRequestPathWithHttpInfo(rsp)));
            }));
    }

    /**
     * Modify the request path of a specific URL rewrite configuration.
     * Change Url Rewrite Request Path
     * @param body 
     */
    public urlManagerChangeUrlRewriteRequestPath(body: UrlmanagerChangeUrlRewriteRequestPathRequest, _options?: Configuration): Observable<any> {
        return this.urlManagerChangeUrlRewriteRequestPathWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Modify the request path of a specific URL rewrite configuration.
     * Change Url Rewrite Request Path
     * @param body 
     */
    public urlManagerChangeUrlRewriteRequestPath2WithHttpInfo(body: UrlmanagerChangeUrlRewriteRequestPathRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.urlManagerChangeUrlRewriteRequestPath2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.urlManagerChangeUrlRewriteRequestPath2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Modify the request path of a specific URL rewrite configuration.
     * Change Url Rewrite Request Path
     * @param body 
     */
    public urlManagerChangeUrlRewriteRequestPath2(body: UrlmanagerChangeUrlRewriteRequestPathRequest, _options?: Configuration): Observable<any> {
        return this.urlManagerChangeUrlRewriteRequestPath2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Create a new URL rewrite configuration with customizable rules.
     * Create Url Rewrite
     * @param body 
     */
    public urlManagerCreateUrlRewriteWithHttpInfo(body: UrlmanagerCreateUrlRewriteRequest, _options?: Configuration): Observable<HttpInfo<UrlmanagerUrlRewrite>> {
        const requestContextPromise = this.requestFactory.urlManagerCreateUrlRewrite(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.urlManagerCreateUrlRewriteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new URL rewrite configuration with customizable rules.
     * Create Url Rewrite
     * @param body 
     */
    public urlManagerCreateUrlRewrite(body: UrlmanagerCreateUrlRewriteRequest, _options?: Configuration): Observable<UrlmanagerUrlRewrite> {
        return this.urlManagerCreateUrlRewriteWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<UrlmanagerUrlRewrite>) => apiResponse.data));
    }

    /**
     * Create a new URL rewrite configuration with customizable rules.
     * Create Url Rewrite
     * @param body 
     */
    public urlManagerCreateUrlRewrite2WithHttpInfo(body: UrlmanagerCreateUrlRewriteRequest, _options?: Configuration): Observable<HttpInfo<UrlmanagerUrlRewrite>> {
        const requestContextPromise = this.requestFactory.urlManagerCreateUrlRewrite2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.urlManagerCreateUrlRewrite2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new URL rewrite configuration with customizable rules.
     * Create Url Rewrite
     * @param body 
     */
    public urlManagerCreateUrlRewrite2(body: UrlmanagerCreateUrlRewriteRequest, _options?: Configuration): Observable<UrlmanagerUrlRewrite> {
        return this.urlManagerCreateUrlRewrite2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<UrlmanagerUrlRewrite>) => apiResponse.data));
    }

    /**
     * Delete an existing URL rewrite configuration.
     * Delete Url Rewrite
     * @param body 
     */
    public urlManagerDeleteUrlRewriteWithHttpInfo(body: UrlmanagerDeleteUrlRewriteRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.urlManagerDeleteUrlRewrite(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.urlManagerDeleteUrlRewriteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete an existing URL rewrite configuration.
     * Delete Url Rewrite
     * @param body 
     */
    public urlManagerDeleteUrlRewrite(body: UrlmanagerDeleteUrlRewriteRequest, _options?: Configuration): Observable<any> {
        return this.urlManagerDeleteUrlRewriteWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Delete an existing URL rewrite configuration.
     * Delete Url Rewrite
     * @param body 
     */
    public urlManagerDeleteUrlRewrite2WithHttpInfo(body: UrlmanagerDeleteUrlRewriteRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.urlManagerDeleteUrlRewrite2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.urlManagerDeleteUrlRewrite2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete an existing URL rewrite configuration.
     * Delete Url Rewrite
     * @param body 
     */
    public urlManagerDeleteUrlRewrite2(body: UrlmanagerDeleteUrlRewriteRequest, _options?: Configuration): Observable<any> {
        return this.urlManagerDeleteUrlRewrite2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Retrieve the details of a specific URL rewrite configuration.
     * Get Url Rewrite
     * @param body 
     */
    public urlManagerGetUrlRewriteWithHttpInfo(body: UrlmanagerGetUrlRewriteRequest, _options?: Configuration): Observable<HttpInfo<UrlmanagerUrlRewrite>> {
        const requestContextPromise = this.requestFactory.urlManagerGetUrlRewrite(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.urlManagerGetUrlRewriteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the details of a specific URL rewrite configuration.
     * Get Url Rewrite
     * @param body 
     */
    public urlManagerGetUrlRewrite(body: UrlmanagerGetUrlRewriteRequest, _options?: Configuration): Observable<UrlmanagerUrlRewrite> {
        return this.urlManagerGetUrlRewriteWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<UrlmanagerUrlRewrite>) => apiResponse.data));
    }

    /**
     * Retrieve the details of a specific URL rewrite configuration.
     * Get Url Rewrite
     * @param body 
     */
    public urlManagerGetUrlRewrite2WithHttpInfo(body: UrlmanagerGetUrlRewriteRequest, _options?: Configuration): Observable<HttpInfo<UrlmanagerUrlRewrite>> {
        const requestContextPromise = this.requestFactory.urlManagerGetUrlRewrite2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.urlManagerGetUrlRewrite2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the details of a specific URL rewrite configuration.
     * Get Url Rewrite
     * @param body 
     */
    public urlManagerGetUrlRewrite2(body: UrlmanagerGetUrlRewriteRequest, _options?: Configuration): Observable<UrlmanagerUrlRewrite> {
        return this.urlManagerGetUrlRewrite2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<UrlmanagerUrlRewrite>) => apiResponse.data));
    }

    /**
     * Retrieve a list of all URL rewrite configurations in your application.
     * List Url Rewrites
     * @param body 
     */
    public urlManagerListUrlRewritesWithHttpInfo(body: UrlmanagerListUrlRewritesRequest, _options?: Configuration): Observable<HttpInfo<UrlmanagerListUrlRewritesResponse>> {
        const requestContextPromise = this.requestFactory.urlManagerListUrlRewrites(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.urlManagerListUrlRewritesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a list of all URL rewrite configurations in your application.
     * List Url Rewrites
     * @param body 
     */
    public urlManagerListUrlRewrites(body: UrlmanagerListUrlRewritesRequest, _options?: Configuration): Observable<UrlmanagerListUrlRewritesResponse> {
        return this.urlManagerListUrlRewritesWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<UrlmanagerListUrlRewritesResponse>) => apiResponse.data));
    }

    /**
     * Retrieve a list of all URL rewrite configurations in your application.
     * List Url Rewrites
     * @param body 
     */
    public urlManagerListUrlRewrites2WithHttpInfo(body: UrlmanagerListUrlRewritesRequest, _options?: Configuration): Observable<HttpInfo<UrlmanagerListUrlRewritesResponse>> {
        const requestContextPromise = this.requestFactory.urlManagerListUrlRewrites2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.urlManagerListUrlRewrites2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a list of all URL rewrite configurations in your application.
     * List Url Rewrites
     * @param body 
     */
    public urlManagerListUrlRewrites2(body: UrlmanagerListUrlRewritesRequest, _options?: Configuration): Observable<UrlmanagerListUrlRewritesResponse> {
        return this.urlManagerListUrlRewrites2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<UrlmanagerListUrlRewritesResponse>) => apiResponse.data));
    }

    /**
     * Retrieve URL rewrite configurations based on target paths.
     * List Url Rewrites By Target Paths
     * @param body 
     */
    public urlManagerListUrlRewritesByTargetPathsWithHttpInfo(body: UrlmanagerListUrlRewritesByTargetPathsRequest, _options?: Configuration): Observable<HttpInfo<UrlmanagerListUrlRewritesByTargetPathsRequest >> {
        const requestContextPromise = this.requestFactory.urlManagerListUrlRewritesByTargetPaths(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.urlManagerListUrlRewritesByTargetPathsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve URL rewrite configurations based on target paths.
     * List Url Rewrites By Target Paths
     * @param body 
     */
    public urlManagerListUrlRewritesByTargetPaths(body: UrlmanagerListUrlRewritesByTargetPathsRequest, _options?: Configuration): Observable<UrlmanagerListUrlRewritesByTargetPathsRequest > {
        return this.urlManagerListUrlRewritesByTargetPathsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<UrlmanagerListUrlRewritesByTargetPathsRequest >) => apiResponse.data));
    }

    /**
     * Retrieve URL rewrite configurations based on target paths.
     * List Url Rewrites By Target Paths
     * @param body 
     */
    public urlManagerListUrlRewritesByTargetPaths2WithHttpInfo(body: UrlmanagerListUrlRewritesByTargetPathsRequest, _options?: Configuration): Observable<HttpInfo<UrlmanagerListUrlRewritesByTargetPathsRequest >> {
        const requestContextPromise = this.requestFactory.urlManagerListUrlRewritesByTargetPaths2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.urlManagerListUrlRewritesByTargetPaths2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve URL rewrite configurations based on target paths.
     * List Url Rewrites By Target Paths
     * @param body 
     */
    public urlManagerListUrlRewritesByTargetPaths2(body: UrlmanagerListUrlRewritesByTargetPathsRequest, _options?: Configuration): Observable<UrlmanagerListUrlRewritesByTargetPathsRequest > {
        return this.urlManagerListUrlRewritesByTargetPaths2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<UrlmanagerListUrlRewritesByTargetPathsRequest >) => apiResponse.data));
    }

    /**
     * Resolve and retrieve the rewritten URL for a given input URL.
     * Resolve Url Rewrite
     * @param body 
     */
    public urlManagerResolveUrlRewriteWithHttpInfo(body: UrlmanagerResolveUrlRewriteRequest, _options?: Configuration): Observable<HttpInfo<UrlmanagerUrlRewrite>> {
        const requestContextPromise = this.requestFactory.urlManagerResolveUrlRewrite(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.urlManagerResolveUrlRewriteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Resolve and retrieve the rewritten URL for a given input URL.
     * Resolve Url Rewrite
     * @param body 
     */
    public urlManagerResolveUrlRewrite(body: UrlmanagerResolveUrlRewriteRequest, _options?: Configuration): Observable<UrlmanagerUrlRewrite> {
        return this.urlManagerResolveUrlRewriteWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<UrlmanagerUrlRewrite>) => apiResponse.data));
    }

    /**
     * Resolve and retrieve the rewritten URL for a given input URL.
     * Resolve Url Rewrite
     * @param body 
     */
    public urlManagerResolveUrlRewrite2WithHttpInfo(body: UrlmanagerResolveUrlRewriteRequest, _options?: Configuration): Observable<HttpInfo<UrlmanagerUrlRewrite>> {
        const requestContextPromise = this.requestFactory.urlManagerResolveUrlRewrite2(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.urlManagerResolveUrlRewrite2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Resolve and retrieve the rewritten URL for a given input URL.
     * Resolve Url Rewrite
     * @param body 
     */
    public urlManagerResolveUrlRewrite2(body: UrlmanagerResolveUrlRewriteRequest, _options?: Configuration): Observable<UrlmanagerUrlRewrite> {
        return this.urlManagerResolveUrlRewrite2WithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<UrlmanagerUrlRewrite>) => apiResponse.data));
    }

}
