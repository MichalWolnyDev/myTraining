import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './styles/index.css'
import Home from './app/Home';
import AuthLayout from './app/layouts/AuthLayout';
import Login from './app/views/auth/Login';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
     <Routes>
        <Route index element={<Home />}></Route>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
     </Routes>
    </BrowserRouter>
  </StrictMode>
)
