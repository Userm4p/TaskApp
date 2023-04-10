import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
const LoginPage = React.lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = React.lazy(() => import('../pages/RegisterPage/RegisterPage'));


export const PublicRoutes = () => {
  return (
    <Suspense fallback={<BarLoader />}>
      <Routes>
        <Route path="/*" element={
          <LoginPage />
        } />
        <Route path="/new" element={
          <RegisterPage />
        } />
      </Routes>
    </Suspense>
  )
}
