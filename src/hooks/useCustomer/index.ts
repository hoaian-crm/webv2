import { CustomerFaker } from "@/faker/customer"
import { ICustomer } from "@/types"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { usePage } from "../usePage"

export const useCustomer = () => {


  const { limit } = usePage({ defaultLimit: 100 });

  const queryClient = useQueryClient();
  const customers = useQuery<{
    result: Array<ICustomer>,
    total: number
  }>({
    queryKey: ['customers'],
    queryFn: async () => {
      return CustomerFaker.apiFake(limit);
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
