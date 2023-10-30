import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../../utils/axios/token";
import { API_ENDPOINTS } from "../../constant/Api_EndPoints";

export const stateQueryApi = createApi({
  reducerPath: "stateQuery",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_REST_API_ENDPOINT, // add your custom endpoint in env file
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTest: builder.query<yourResponseType, void>({
      query: () => ({ url: API_ENDPOINTS.AUTH.GET_USER }),
      transformResponse: (res: { data: yourResponseType }) => res.data! ?? res,
    }),
  }),
});

export const { useGetTestQuery } = stateQueryApi;
