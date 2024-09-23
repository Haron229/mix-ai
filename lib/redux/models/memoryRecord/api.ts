import {
  GetAllMemoryRecordsResponse,
  GetMemoryRecordResponse,
  SaveMemoryRecordProps,
} from "@/lib/types";
import { baseApi } from "@/lib/redux/shared/api";
import {
  setError,
  setIsLoading,
  setRecord,
} from "@/lib/redux/models/memoryRecord/memoryRecord.slice";

export const memoryRecordApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMemoryRecords: builder.query<GetAllMemoryRecordsResponse, number>({
      query: (userId) => ({
        url: `/memoryRecord/getAll/${userId}`,
        method: "GET",
      }),
      providesTags: ["MemoryRecordsList"],
    }),
    getMemoryRecord: builder.query<GetMemoryRecordResponse, string>({
      query: (id) => ({
        url: `/memoryRecord/${id}`,
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        dispatch(setIsLoading(true));
        try {
          const { data } = await queryFulfilled;

          dispatch(setRecord(data));
          dispatch(setIsLoading(false));
        } catch (error) {
          dispatch(setError("Что-то пошло не так"));
          dispatch(setIsLoading(false));
        }
      },
    }),
    saveMemoryRecord: builder.mutation({
      query: (data: SaveMemoryRecordProps) => ({
        url: "/memoryRecord/save",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["MemoryRecordsList"],
    }),
    deleteMemoryRecord: builder.mutation({
      query: (id) => ({
        url: `/memoryRecord/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["MemoryRecordsList"],
    }),
  }),
  overrideExisting: true,
});
