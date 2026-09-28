import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";

import 'modern-normalize/modern-normalize.css'
import './assets/css/index.css'
import '@splidejs/react-splide/css/core';

import App from './App.tsx'
import AuthProvider from "@features/auth/provider/AuthProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <App/>
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>,
)
