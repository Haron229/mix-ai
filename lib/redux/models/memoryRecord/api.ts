import {
  GetAllMemoryRecordsResponse,
  GetMemoryRecordResponse,
  SaveMemoryRecordProps,
} from "@/lib/types";
import { baseApi } from "@/lib/redux/shared/api";
import {
  resetRecord,
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
        dispatch(resetRecord());
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
      providesTags: (result) => [{ type: "MemoryRecord", id: result?.id }],
    }),
    saveMemoryRecord: builder.mutation({
      query: (data: SaveMemoryRecordProps) => ({
        url: "/memoryRecord/save",
        method: "POST",
        body: data,
      }),
      // onQueryStarted
      invalidatesTags: (result, error, arg) => [
        { type: "MemoryRecord", id: arg.id },
        "MemoryRecordsList",
      ],
    }),
  }),
  overrideExisting: true,
});
