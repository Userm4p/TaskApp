import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';

export const PublicRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/new" element={<RegisterPage/>}/>
        </Routes>
    </>
  )
}
