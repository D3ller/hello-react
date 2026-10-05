import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from "react-router";

import { router } from "./App.tsx";

import 'modern-normalize/modern-normalize.css'
import './assets/css/index.css'
import '@splidejs/react-splide/css/core';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
