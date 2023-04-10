import './App.css'
import { Router } from './app/routes/Routes';
import { LoginContext } from './contexts/LoginContext';
import { LoginReducer } from './contexts/LoginActions';
import { useReducer } from 'react';

const init = () => {
  const loginData = sessionStorage.getItem('login');
  const loginPersistData = localStorage.getItem('login');
  return (loginData)
    ? JSON.parse(loginData)
    : (loginPersistData) ? JSON.parse(loginPersistData)
      :
      {
        logged: false,
        user: null
      }
}

const App = () => {

  const [login, dispatch] = useReducer(LoginReducer, {}, init);



  return (
    <div className='App'>
      <LoginContext.Provider value={{
        login, dispatch
      }}>
        <Router />
      </LoginContext.Provider>
    </div>
  )
}

export default App