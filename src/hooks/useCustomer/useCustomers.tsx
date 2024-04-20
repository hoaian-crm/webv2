import { useQuery } from "@tanstack/react-query"
import Core from "@/services/core"
import { Customer } from "@/services/core/customer";

export const useCustomers = (query: Customer.Query) => {


  const customers = useQuery({
    queryKey: ['customers', query],
    queryFn: async () => {
      const response = await Core.Customer.fetch(query);
      return response.data.data;
    }
  })


  return customers;
}
