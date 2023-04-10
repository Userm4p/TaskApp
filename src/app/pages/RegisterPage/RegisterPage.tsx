import React, { FormEvent } from 'react'
import { useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../../contexts/LoginContext';
import { types } from '../../../contexts/LoginTypes';
import './RegisterPage.css'

export default function RegisterPage () {

  const [form, setForm] = useState({
    username: '',
    email:'',
    password: '',
    password_rep: ''
  });
  const [message, setMessage] = useState<string | undefined>()

  console.log(message);

  const { dispatch } = useContext(LoginContext)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if(form.password !== form.password_rep){
      setMessage('Las contraseñas no coinciden')
    }else{
      dispatch({ type: types.login });
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
        <form className='form' onSubmit={(e) => handleLogin(e)}>
          <span className="header-text" style={{ marginBottom: '20px' }}>Task App</span>
          <input required minLength={6} placeholder="Nombre de usuario" className="login-input" type='text' name="username" onChange={(e) => { handleChange(e) }} />
          <input required minLength={6} placeholder="Correo electrónico" className="login-input" type='email' name="email" onChange={(e) => { handleChange(e) }} />
          <input required minLength={6} placeholder="Contraseña" className="login-input" type="password" name="password" onChange={(e) => { handleChange(e) }} />
          <input required minLength={6} placeholder="Repetir Contraseña" className="login-input" type="password" name="password_rep" onChange={(e) => { handleChange(e) }} />
          <div style={{display:(!message) ? 'none' : 'flex', height:(!message) ? '0px' : 'auto',width:(!message) ? '0px' : 'auto'}} className="error-msg" >{message}</div>
          <button className="login-button" type='submit' style={{ marginTop: '20px' }}>Registrarme</button>
          <div className="register-link-text">
            <span style={{marginRight:'5px'}}>¿Ya tienes una cuenta?</span><Link to={'/'}>Ingresar</Link>
          </div>

        </form>
      </div>
    </>

  )
}

