import {api as index} from "..";
import { SUBS } from "./types";

const api = index.injectEndpoints({
    endpoints: (build) => ({
        subsServices: build.query<SUBS.GetSubsServicesResponse, SUBS.GetSubsServicesRequest>({
            query: () => ({
                url: `/subscription-services`,
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
            providesTags: ["subs"]
        })
    })
})


export const { useSubsServicesQuery } = api;