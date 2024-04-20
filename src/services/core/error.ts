import { AxiosError } from "axios";
import { toast } from 'react-toastify';

export namespace ResponseError {

  export class BaseError extends Error {

    public messages: Array<{
      code: number;
      description: string;
    }>

    constructor(messages: Array<{ code: number, description: string }>) {
      if (messages.length) {
        super(messages[0].description);
      } else super("Uncatched error");

      this.messages = messages;
    }
  }
  export const handleError = (error: any) => {
    if (error instanceof AxiosError) {
      if (error.response?.data?.messages) {
        const responseError = new BaseError(error.response.data.messages);
        handleResponseError(responseError);
      }
    }
    throw error;
  }

  export const handleResponseError = (error: BaseError) => {
    toast(error.message, {
      type: 'error'
    })
  }
}
