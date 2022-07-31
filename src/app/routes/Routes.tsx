import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import { useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContext';
import { PublicRoutes } from './PublicRoutes';

export const Router = () => {

  const { login } = useContext(LoginContext)

  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route 
                  path="*" 
                  element={
                    <>
                      {
                        (login.logged) ? 
                        <PrivateRoutes/>
                        :
                        <PublicRoutes/>
                      }
                    </>
                  }
                />                
            </Routes>
        </BrowserRouter>
    </div>
  )
}
