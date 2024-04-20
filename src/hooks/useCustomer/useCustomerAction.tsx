import { Customer } from "@/services/core/customer";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCustomerAction = () => {

  const queryClient = useQueryClient();

  const create = useMutation({
    mutationFn: async (data: Customer.CreateBody) => {
      const response = await Customer.create(data);
      queryClient.invalidateQueries({ queryKey: ['customers'] });
      return response.data.data.result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customers'] });
    }
  })

  return {
    create
  }
}
