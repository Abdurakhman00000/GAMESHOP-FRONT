import { api as index } from "..";
import { 
  GetSubsServicesResponse, 
  GetSubsServicesRequest,
  AuthResponse,
  AuthRequest,
  PaymentRequest,
  PaymentResponse
} from "./types";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    subsServices: build.query<
      GetSubsServicesResponse,
      GetSubsServicesRequest
    >({
      query: () => ({
        url: `/subscription-services`,
        method: "GET",
      }),
      providesTags: ["subsService"],
    }),
    getSubscribe: build.query<
      GetSubsServicesResponse,
      GetSubsServicesRequest
    >({
      query: () => ({
        url: `/subscriptions`,
        method: "GET",
      }),
      providesTags: ["subscribe"],
    }),
    getToken: build.mutation<
      AuthResponse,
      AuthRequest
    >({
      query: (credentials) => ({
        url: `/token/`,
        method: "POST",
        body: credentials
      })
    }),
    initiatePayment: build.mutation<
      PaymentResponse,
      PaymentRequest
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
