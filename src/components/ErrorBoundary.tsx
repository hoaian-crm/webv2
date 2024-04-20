import { AxiosError } from "axios"
import React from "react"
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary"

export const ErrorBoundary: React.FC<{
  children: React.ReactElement
}> = (props) => {
  return <ReactErrorBoundary onError={(error) => {
    console.log("Error on catch is: ", error)
    if (error instanceof AxiosError) {
      console.log("Axios error: ", error);
    }
  }} fallbackRender={() => null} {...props} />
}
