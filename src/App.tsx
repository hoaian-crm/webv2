import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
