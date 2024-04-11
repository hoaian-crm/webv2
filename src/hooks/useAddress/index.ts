import Core from "@/services/core";
import { IAddress } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react"

export const useAddress = () => {

  const [input, setInput] = useState("");
  const query = useQuery<{
    result: Array<IAddress>,
  }>({
    queryKey: ['addresss'],
    queryFn: async () => {
      const response = await Core.Address.search({ input });
      return {
        result: response.data.data.result
      }
    }
  })

  return {
    input,
    setInput,
    query
  }
}
