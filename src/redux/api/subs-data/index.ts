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
      }),
      providesTags: ["subscribe"],
    }),
    initiatePayment: build.mutation<SUBS.InitiatePaymentResponse, { user_id: number; username: string }>({
      query: (data) => ({
        url: `/payment/initiate/`,
        method: "POST",
        body: {
          user_id: data.user_id,
          username: data.username,
        },
      }),
      invalidatesTags: ["subscribe"]
    }),
    
  }),
});

export const { useSubsServicesQuery, useGetSubscribeQuery, useInitiatePaymentMutation } = api;
