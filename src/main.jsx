import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/route';
import AuthProvider from './provides/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <div className='max-w-screen-2xl mx-auto'>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </div>
  </StrictMode>,
)
