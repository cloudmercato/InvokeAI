import { TagDescription } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { $authToken } from 'app/store/nanostores/authToken';
import { $baseUrl } from 'app/store/nanostores/baseUrl';
import { $projectId } from 'app/store/nanostores/projectId';

export const tagTypes = [
  'AppVersion',
  'AppConfig',
  'Board',
  'BoardImagesTotal',
  'BoardAssetsTotal',
  'Image',
  'ImageNameList',
  'ImageList',
  'ImageMetadata',
  'ImageMetadataFromFile',
  'IntermediatesCount',
  'SessionQueueItem',
  'SessionQueueStatus',
  'SessionProcessorStatus',
  'CurrentSessionQueueItem',
  'NextSessionQueueItem',
  'BatchStatus',
  'InvocationCacheStatus',
  'Model',
  'T2IAdapterModel',
  'MainModel',
  'OnnxModel',
  'VaeModel',
  'IPAdapterModel',
  'TextualInversionModel',
  'ControlNetModel',
  'LoRAModel',
  'SDXLRefinerModel',
  'Workflow',
] as const;
export type ApiTagDescription = TagDescription<(typeof tagTypes)[number]>;
export const LIST_TAG = 'LIST';

const dynamicBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const baseUrl = $baseUrl.get();
  const authToken = $authToken.get();
  const projectId = $projectId.get();

  const rawBaseQuery = fetchBaseQuery({
    baseUrl: `${baseUrl ?? ''}/api/v1`,
    prepareHeaders: (headers) => {
      if (authToken) {
        headers.set('Authorization', `Bearer ${authToken}`);
      }
      if (projectId) {
        headers.set('project-id', projectId);
      }

      return headers;
    },
  });

  return rawBaseQuery(args, api, extraOptions);
};

export const api = createApi({
  baseQuery: dynamicBaseQuery,
  reducerPath: 'api',
  tagTypes,
  endpoints: () => ({}),
});
