import React, { FormEvent, useState } from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../../contexts/LoginContext';
import { types } from '../../../contexts/LoginTypes';
import './LoginPage.css'

export const LoginPage = () => {

  const [form, setForm] = useState({
    username: '',
    password: '',
    keepLogin: false
  })

  const { dispatch } = useContext(LoginContext)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  const handleLogin = (e: FormEvent, keepLogin: boolean) => {
    e.preventDefault();
    dispatch({ type: types.login })
    if (keepLogin) {
      localStorage.setItem('login',
        JSON.stringify({
          logged: true,
          user: null
        }))
    } else {
      sessionStorage.setItem('login',
        JSON.stringify({
          logged: true,
          user: null
        }))
    }

  }

  return (
    <>
      <div className='form-container'>
        <form className='form' onSubmit={(e) => handleLogin(e, form.keepLogin)}>
          <span className="header-text" style={{ marginBottom: '20px' }}>Task App</span>
          <input required minLength={6} placeholder="Nombre de usuario" className="login-input" type='text' name="username" onChange={(e) => { handleChange(e) }} />
          <input required minLength={6} placeholder="Contraseña" className="login-input" type="password" name="password" onChange={(e) => { handleChange(e) }} />
          <div className="keep-session-container" >
            <span className="keep-session-text">Mantener sesión iniciada</span>
            <input 
              name="keepLogin"
              type='checkbox' 
              onClick={(e) => {
                setForm({...form, keepLogin:!form.keepLogin})
              }}
            />
          </div>
          <div className="register-link-text">
            <span style={{marginRight:'5px'}}>¿Aun no tienes una cuenta?</span><Link to={'/new'}>Registrarte</Link>
          </div>
          <button className="login-button" type='submit' style={{ marginTop: '20px' }}>Ingresar</button>
        </form>
      </div>
    </>

  )
}
