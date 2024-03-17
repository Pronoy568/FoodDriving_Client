import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSupplies: builder.query({
      query: () => ({
        url: "/supplies",
        method: "GET",
      }),
      providesTags: ["supplies"],
    }),
    postSupplies: builder.mutation({
      query: (suppliesInfo) => ({
        url: "/supplies",
        method: "POST",
        body: suppliesInfo,
      }),
      invalidatesTags: ["supplies"],
    }),
    deleteSupplies: builder.mutation({
      query: (id) => ({
        url: `/supplies/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["supplies"],
    }),
    updateSupplies: builder.mutation({
      query: (info) => ({
        url: `/supplies/${info.id}`,
        method: "PUT",
        body: info,
      }),
      invalidatesTags: ["supplies"],
    }),
    getSingleSupplies: builder.query({
      query: (id) => ({
        url: `/supplies/${id}`,
        method: "GET",
      }),
      providesTags: ["supplies"],
    }),
  }),
});

export const {
  useGetSuppliesQuery,
  usePostSuppliesMutation,
  useDeleteSuppliesMutation,
  useUpdateSuppliesMutation,
  useGetSingleSuppliesQuery,
} = authApi;
