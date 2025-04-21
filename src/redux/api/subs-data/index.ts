import { api as index } from "..";
import { SUBS } from "./types";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    subsServices: build.query<
      SUBS.GetSubsServicesResponse,
      SUBS.GetSubsServicesRequest
    >({
      query: () => ({
        url: `/subscription-services`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["subsService"],
    }),
    getSubscribe: build.query<
      SUBS.GetSubsServicesResponse,
      SUBS.GetSubsServicesRequest
    >({
      query: () => ({
        url: `/subscriptions`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["subscribe"],
    }),
  }),
});

export const { useSubsServicesQuery, useGetSubscribeQuery } = api;
