import { ICustomer, Pagination } from "@/types";
import { instance } from "./axios";

export namespace Customer {
  export type Query = Pagination & {
    q?: string
  }

  export const fetch = (query: Query) => {
    return instance.get('/customers', {
      params: query
    })
  }

  export type Create = ICustomer;
}
