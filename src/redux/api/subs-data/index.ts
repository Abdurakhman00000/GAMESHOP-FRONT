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
    getToken: build.mutation<
      { token: string; user_id: number; username: string },
      { username: string; password: string }
    >({
      query: (credentials) => ({
        url: `/token/`,
        method: "POST",
        body: credentials
      })
    }),
    initiatePayment: build.mutation<
      { payment_url: string },
      { 
        subscription_service_id: number;
        subscription_period_id: number;
        console_type_id: number;
        token: string;
      }
    >({
      query: (data) => ({
        url: `/payment/initiate/`,
        method: "POST",
        headers: {
          'Authorization': `Token ${data.token}`,
          'Content-Type': 'application/json'
        },
        body: {
          subscription_service_id: data.subscription_service_id,
          subscription_period_id: data.subscription_period_id,
          console_type_id: data.console_type_id
        }
      }),
      invalidatesTags: ["subscribe"]
    }),
  }),
});

export const { 
  useSubsServicesQuery, 
  useGetSubscribeQuery, 
  useGetTokenMutation,
  useInitiatePaymentMutation 
} = api;
