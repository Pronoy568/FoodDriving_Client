import { baseApi } from "../../api/baseApi";

const gratitudeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createGratitude: builder.mutation({
      query: (gratitudeData) => ({
        url: "/create-gratitude",
        method: "POST",
        body: gratitudeData,
      }),
      invalidatesTags: ["gratitude"],
    }),

    getAllGratitude: builder.query({
      query: () => ({
        url: "/gratitudes",
      }),
      providesTags: ["gratitude"],
    }),
  }),
});

export const { useCreateGratitudeMutation, useGetAllGratitudeQuery } =
  gratitudeApi;
