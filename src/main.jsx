import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/route';
import AuthProvider from './provides/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async';






const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <div className='max-w-screen-2xl mx-auto'>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
   <HelmetProvider>
   <RouterProvider router={router} />
   </HelmetProvider>
    </QueryClientProvider>
    
    </AuthProvider>
  </div>
  </StrictMode>,
)
