import { CustomerFaker } from "@/faker/customer"
import { Customer } from "@/services/core/customer"
import { ICustomer } from "@/types"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export const useCustomer = (params: Customer.Query = {
  limit: 10,
  offset: 0
}) => {

  const queryClient = useQueryClient();
  const customers = useQuery<{
    result: Array<ICustomer>,
    total: number
  }>({
    queryKey: ['customers'],
    queryFn: async () => {
      // const response = await Customer.fetch(query);
      // return response.data.data;
      return CustomerFaker.apiFake(params.limit);
    }
  })

  const create = useMutation({
    mutationFn: async (data: ICustomer) => {
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customers'] });
    }
  })

  return {
    update: undefined,
    remove: undefined,
    create,
    customers
  }
}
