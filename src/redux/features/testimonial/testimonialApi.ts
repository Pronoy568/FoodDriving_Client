import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTestimonial: builder.query({
      query: () => ({
        url: "/testimonial",
        method: "GET",
      }),
      providesTags: ["testimonial"],
    }),
    postTestimonial: builder.mutation({
      query: (testimonialInfo) => ({
        url: "/create-testimonial",
        method: "POST",
        body: testimonialInfo,
      }),
      invalidatesTags: ["testimonial"],
    }),
  }),
});

export const { useGetTestimonialQuery, usePostTestimonialMutation } = authApi;
