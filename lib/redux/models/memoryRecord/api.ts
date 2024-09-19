import {
  GetAllMemoryRecordsResponse,
  GetMemoryRecordResponse,
  PetMemoryRecordSchema,
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
    getMemoryRecords: builder.query<GetAllMemoryRecordsResponse, void>({
      query: () => ({
        url: "/memoryRecord/getAll",
        method: "GET",
      }),
    }),
    getMemoryRecord: builder.query<GetMemoryRecordResponse, string>({
      query: (id) => ({
        url: `/memoryRecord/get/${id}`,
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        dispatch(resetRecord());
        dispatch(setIsLoading(true));
        try {
          const { data } = await queryFulfilled;

          dispatch(setRecord(PetMemoryRecordSchema.parse(data)));
          dispatch(setIsLoading(false));
        } catch (error) {
          dispatch(setError("Что-то пошло не так"));
          dispatch(setIsLoading(false));
        }
      },
    }),
    saveMemoryRecord: builder.query({
      query: (data: SaveMemoryRecordProps) => ({
        url: "/memoryRecord/save",
        method: "POST",
        body: data,
      }),
    }),
  }),
  overrideExisting: true,
});
