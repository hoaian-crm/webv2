import { CustomerFaker } from "@/faker/customer"
import { Customer } from "@/services/core/customer"
import { ICustomer } from "@/types"
import { useQuery } from "@tanstack/react-query"

export const useCustomer = (query: Customer.Query = {
  limit: 10,
  offset: 0
}) => {

  const customers = useQuery<{
    result: Array<ICustomer>,
    total: number
  }>({
    queryKey: ['customsers', query],
    queryFn: async () => {
      // const response = await Customer.fetch(query);
      // return response.data.data;
      return CustomerFaker.apiFake(query.limit);
    }
  })


  return {
    update: undefined,
    delete: undefined,
    create: undefined,
    customers
  }
}
