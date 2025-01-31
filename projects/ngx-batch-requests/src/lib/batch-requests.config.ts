import { HttpRequest, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { InjectionToken } from '@angular/core';

export interface BatchRequestsConfig {
  bufferTimeSpan: number;
  bufferMaxSize: number;

  batchPath: string;
  batchMethod: 'POST' | 'PUT' | 'PATCH';

  defaultRequestOptions: {
    headers?: HttpHeaders
    params?: HttpParams
    withCredentials?: boolean
  };

  parseResponse(response: HttpResponse<any>, request: HttpRequest<any>): any;

  shouldBatch(request: HttpRequest<any>): boolean;
}

export const defaultBatchRequestsConfig = {
  bufferTimeSpan: 250,
  bufferMaxSize: 20,

  batchPath: '/api/$batch',
  batchMethod: 'POST',

  defaultRequestOptions: {
    withCredentials: true
  },

  parseResponse: (response, request) => response,

  shouldBatch: (request) => true,
};

export const BATCH_REQUESTS_CONFIG = new InjectionToken<BatchRequestsConfig>( null );

