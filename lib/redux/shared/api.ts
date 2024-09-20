import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV !== "production"
        ? "/api"
        : "https://themixreality.com/api",
  }),
  endpoints: () => ({}),
  tagTypes: ["MemoryRecordsList", "MemoryRecord"],
});
