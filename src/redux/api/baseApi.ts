import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://food-driving-server.vercel.app/",
  }),
  tagTypes: ["supplies", "gratitude", "testimonial", "volunteer"],
  endpoints: () => ({}),
});
