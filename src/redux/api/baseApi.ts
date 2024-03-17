import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fooddriving-server.vercel.app/",
  }),
  tagTypes: ["supplies"],
  endpoints: () => ({}),
});
