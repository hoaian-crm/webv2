import { ICustomer, Pagination } from "@/types";
import { BaseResponse, instance } from "./axios";

export namespace Customer {
  export type Query = Pagination & {
    keyword?: string;
    isDeleted?: 'true' | 'false';
  }


  export type QueryResponse = BaseResponse<Array<ICustomer>>;
  export const fetch = (query: Query) => {
    return instance.get<QueryResponse>('/customers', {
      params: query
    })
  }

  export type CreateBody = ICustomer;
  export type CreateResponse = BaseResponse<ICustomer>;
  export const create = (body: CreateBody) => {
    return instance.post<CreateResponse>('/customers', body);
  }
}
