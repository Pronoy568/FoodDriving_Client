import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getVolunteer: builder.query({
      query: () => ({
        url: "/volunteer",
        method: "GET",
      }),
      providesTags: ["volunteer"],
    }),
    postVolunteer: builder.mutation({
      query: (volunteerInfo) => ({
        url: "/create-volunteer",
        method: "POST",
        body: volunteerInfo,
      }),
      invalidatesTags: ["volunteer"],
    }),
  }),
});

export const { useGetVolunteerQuery, usePostVolunteerMutation } = authApi;
