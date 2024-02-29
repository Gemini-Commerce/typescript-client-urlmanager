# .BasicOperationsApi

All URIs are relative to *https://urlmanager.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**urlManagerChangeUrlRewriteRequestPath**](BasicOperationsApi.md#urlManagerChangeUrlRewriteRequestPath) | **POST** /urlmanager/change_url_rewrite_request_path | Change Url Rewrite Request Path
[**urlManagerChangeUrlRewriteRequestPath2**](BasicOperationsApi.md#urlManagerChangeUrlRewriteRequestPath2) | **POST** /urlmanager.UrlManager/ChangeUrlRewriteRequestPath | Change Url Rewrite Request Path
[**urlManagerCreateUrlRewrite**](BasicOperationsApi.md#urlManagerCreateUrlRewrite) | **POST** /urlmanager/create_url_rewrite | Create Url Rewrite
[**urlManagerCreateUrlRewrite2**](BasicOperationsApi.md#urlManagerCreateUrlRewrite2) | **POST** /urlmanager.UrlManager/CreateUrlRewrite | Create Url Rewrite
[**urlManagerDeleteUrlRewrite**](BasicOperationsApi.md#urlManagerDeleteUrlRewrite) | **POST** /urlmanager/delete_url_rewrite | Delete Url Rewrite
[**urlManagerDeleteUrlRewrite2**](BasicOperationsApi.md#urlManagerDeleteUrlRewrite2) | **POST** /urlmanager.UrlManager/DeleteUrlRewrite | Delete Url Rewrite
[**urlManagerGetUrlRewrite**](BasicOperationsApi.md#urlManagerGetUrlRewrite) | **POST** /urlmanager/get_url_rewrite | Get Url Rewrite
[**urlManagerGetUrlRewrite2**](BasicOperationsApi.md#urlManagerGetUrlRewrite2) | **POST** /urlmanager.UrlManager/GetUrlRewrite | Get Url Rewrite
[**urlManagerListUrlRewrites**](BasicOperationsApi.md#urlManagerListUrlRewrites) | **POST** /urlmanager/list_url_rewrites | List Url Rewrites
[**urlManagerListUrlRewrites2**](BasicOperationsApi.md#urlManagerListUrlRewrites2) | **POST** /urlmanager.UrlManager/ListUrlRewrites | List Url Rewrites
[**urlManagerListUrlRewritesByTargetPaths**](BasicOperationsApi.md#urlManagerListUrlRewritesByTargetPaths) | **POST** /urlmanager/list_url_rewrites_by_target_paths | List Url Rewrites By Target Paths
[**urlManagerListUrlRewritesByTargetPaths2**](BasicOperationsApi.md#urlManagerListUrlRewritesByTargetPaths2) | **POST** /urlmanager.UrlManager/ListUrlRewritesByTargetPaths | List Url Rewrites By Target Paths
[**urlManagerResolveUrlRewrite**](BasicOperationsApi.md#urlManagerResolveUrlRewrite) | **POST** /urlmanager/resolve_url_rewrite | Resolve Url Rewrite
[**urlManagerResolveUrlRewrite2**](BasicOperationsApi.md#urlManagerResolveUrlRewrite2) | **POST** /urlmanager.UrlManager/ResolveUrlRewrite | Resolve Url Rewrite


# **urlManagerChangeUrlRewriteRequestPath**
> any urlManagerChangeUrlRewriteRequestPath(body)

Modify the request path of a specific URL rewrite configuration.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiUrlManagerChangeUrlRewriteRequestPathRequest = {
  // UrlmanagerChangeUrlRewriteRequestPathRequest
  body: {
    tenantId: "tenantId_example",
    context: "context_example",
    requestPath: "requestPath_example",
    requestPathNew: "requestPathNew_example",
  },
};

apiInstance.urlManagerChangeUrlRewriteRequestPath(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UrlmanagerChangeUrlRewriteRequestPathRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **urlManagerChangeUrlRewriteRequestPath2**
> any urlManagerChangeUrlRewriteRequestPath2(body)

Modify the request path of a specific URL rewrite configuration.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiUrlManagerChangeUrlRewriteRequestPath2Request = {
  // UrlmanagerChangeUrlRewriteRequestPathRequest
  body: {
    tenantId: "tenantId_example",
    context: "context_example",
    requestPath: "requestPath_example",
    requestPathNew: "requestPathNew_example",
  },
};

apiInstance.urlManagerChangeUrlRewriteRequestPath2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UrlmanagerChangeUrlRewriteRequestPathRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **urlManagerCreateUrlRewrite**
> UrlmanagerUrlRewrite urlManagerCreateUrlRewrite(body)

Create a new URL rewrite configuration with customizable rules.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiUrlManagerCreateUrlRewriteRequest = {
  // UrlmanagerCreateUrlRewriteRequest
  body: {
    tenantId: "tenantId_example",
    context: "context_example",
    requestPath: "requestPath_example",
    targetPath: "targetPath_example",
    redirectType: "RedirectType_UNKNOWN",
    linkRel: "LinkRel_UNKNOWN",
  },
};

apiInstance.urlManagerCreateUrlRewrite(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UrlmanagerCreateUrlRewriteRequest**|  |


### Return type

**UrlmanagerUrlRewrite**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **urlManagerCreateUrlRewrite2**
> UrlmanagerUrlRewrite urlManagerCreateUrlRewrite2(body)

Create a new URL rewrite configuration with customizable rules.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiUrlManagerCreateUrlRewrite2Request = {
  // UrlmanagerCreateUrlRewriteRequest
  body: {
    tenantId: "tenantId_example",
    context: "context_example",
    requestPath: "requestPath_example",
    targetPath: "targetPath_example",
    redirectType: "RedirectType_UNKNOWN",
    linkRel: "LinkRel_UNKNOWN",
  },
};

apiInstance.urlManagerCreateUrlRewrite2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UrlmanagerCreateUrlRewriteRequest**|  |


### Return type

**UrlmanagerUrlRewrite**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **urlManagerDeleteUrlRewrite**
> any urlManagerDeleteUrlRewrite(body)

Delete an existing URL rewrite configuration.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiUrlManagerDeleteUrlRewriteRequest = {
  // UrlmanagerDeleteUrlRewriteRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.urlManagerDeleteUrlRewrite(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UrlmanagerDeleteUrlRewriteRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **urlManagerDeleteUrlRewrite2**
> any urlManagerDeleteUrlRewrite2(body)

Delete an existing URL rewrite configuration.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiUrlManagerDeleteUrlRewrite2Request = {
  // UrlmanagerDeleteUrlRewriteRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.urlManagerDeleteUrlRewrite2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UrlmanagerDeleteUrlRewriteRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **urlManagerGetUrlRewrite**
> UrlmanagerUrlRewrite urlManagerGetUrlRewrite(body)

Retrieve the details of a specific URL rewrite configuration.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiUrlManagerGetUrlRewriteRequest = {
  // UrlmanagerGetUrlRewriteRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    compoundIdentifier: {
      context: "context_example",
      requestPath: "requestPath_example",
    },
  },
};

apiInstance.urlManagerGetUrlRewrite(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UrlmanagerGetUrlRewriteRequest**|  |


### Return type

**UrlmanagerUrlRewrite**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **urlManagerGetUrlRewrite2**
> UrlmanagerUrlRewrite urlManagerGetUrlRewrite2(body)

Retrieve the details of a specific URL rewrite configuration.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiUrlManagerGetUrlRewrite2Request = {
  // UrlmanagerGetUrlRewriteRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    compoundIdentifier: {
      context: "context_example",
      requestPath: "requestPath_example",
    },
  },
};

apiInstance.urlManagerGetUrlRewrite2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UrlmanagerGetUrlRewriteRequest**|  |


### Return type

**UrlmanagerUrlRewrite**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **urlManagerListUrlRewrites**
> UrlmanagerListUrlRewritesResponse urlManagerListUrlRewrites(body)

Retrieve a list of all URL rewrite configurations in your application.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiUrlManagerListUrlRewritesRequest = {
  // UrlmanagerListUrlRewritesRequest
  body: {
    tenantId: "tenantId_example",
    filter: {
      context: "context_example",
      requestPath: "requestPath_example",
      targetPath: "targetPath_example",
      redirectType: "RedirectType_UNKNOWN",
    },
    pageSize: 1,
    pageToken: "pageToken_example",
  },
};

apiInstance.urlManagerListUrlRewrites(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UrlmanagerListUrlRewritesRequest**|  |


### Return type

**UrlmanagerListUrlRewritesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **urlManagerListUrlRewrites2**
> UrlmanagerListUrlRewritesResponse urlManagerListUrlRewrites2(body)

Retrieve a list of all URL rewrite configurations in your application.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiUrlManagerListUrlRewrites2Request = {
  // UrlmanagerListUrlRewritesRequest
  body: {
    tenantId: "tenantId_example",
    filter: {
      context: "context_example",
      requestPath: "requestPath_example",
      targetPath: "targetPath_example",
      redirectType: "RedirectType_UNKNOWN",
    },
    pageSize: 1,
    pageToken: "pageToken_example",
  },
};

apiInstance.urlManagerListUrlRewrites2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UrlmanagerListUrlRewritesRequest**|  |


### Return type

**UrlmanagerListUrlRewritesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **urlManagerListUrlRewritesByTargetPaths**
> UrlmanagerListUrlRewritesByTargetPathsRequest  urlManagerListUrlRewritesByTargetPaths(body)

Retrieve URL rewrite configurations based on target paths.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiUrlManagerListUrlRewritesByTargetPathsRequest = {
  // UrlmanagerListUrlRewritesByTargetPathsRequest
  body: {
    tenantId: "tenantId_example",
    targetPaths: [
      "targetPaths_example",
    ],
    context: "context_example",
    linkRel: "LinkRel_UNKNOWN",
  },
};

apiInstance.urlManagerListUrlRewritesByTargetPaths(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UrlmanagerListUrlRewritesByTargetPathsRequest**|  |


### Return type

**UrlmanagerListUrlRewritesByTargetPathsRequest **

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **urlManagerListUrlRewritesByTargetPaths2**
> UrlmanagerListUrlRewritesByTargetPathsRequest  urlManagerListUrlRewritesByTargetPaths2(body)

Retrieve URL rewrite configurations based on target paths.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiUrlManagerListUrlRewritesByTargetPaths2Request = {
  // UrlmanagerListUrlRewritesByTargetPathsRequest
  body: {
    tenantId: "tenantId_example",
    targetPaths: [
      "targetPaths_example",
    ],
    context: "context_example",
    linkRel: "LinkRel_UNKNOWN",
  },
};

apiInstance.urlManagerListUrlRewritesByTargetPaths2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UrlmanagerListUrlRewritesByTargetPathsRequest**|  |


### Return type

**UrlmanagerListUrlRewritesByTargetPathsRequest **

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **urlManagerResolveUrlRewrite**
> UrlmanagerUrlRewrite urlManagerResolveUrlRewrite(body)

Resolve and retrieve the rewritten URL for a given input URL.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiUrlManagerResolveUrlRewriteRequest = {
  // UrlmanagerResolveUrlRewriteRequest
  body: {
    tenantId: "tenantId_example",
    context: "context_example",
    requestPath: "requestPath_example",
  },
};

apiInstance.urlManagerResolveUrlRewrite(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UrlmanagerResolveUrlRewriteRequest**|  |


### Return type

**UrlmanagerUrlRewrite**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **urlManagerResolveUrlRewrite2**
> UrlmanagerUrlRewrite urlManagerResolveUrlRewrite2(body)

Resolve and retrieve the rewritten URL for a given input URL.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BasicOperationsApi(configuration);

let body:.BasicOperationsApiUrlManagerResolveUrlRewrite2Request = {
  // UrlmanagerResolveUrlRewriteRequest
  body: {
    tenantId: "tenantId_example",
    context: "context_example",
    requestPath: "requestPath_example",
  },
};

apiInstance.urlManagerResolveUrlRewrite2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UrlmanagerResolveUrlRewriteRequest**|  |


### Return type

**UrlmanagerUrlRewrite**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


