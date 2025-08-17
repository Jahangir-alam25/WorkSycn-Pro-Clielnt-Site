import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/router.jsx'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './contexts/AuthContext/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './contexts/AuthContext/ThemeContext.jsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <>
            <RouterProvider router={router} />
            <ToastContainer />
          </>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>,
)