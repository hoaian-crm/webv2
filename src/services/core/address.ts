import { instance } from "./axios"

export namespace Address {

  export type Search = {
    input: string
  }

  export const search = (query: Search) => {
    return instance.get("/address/search", {
      params: query
    })
  }
}
