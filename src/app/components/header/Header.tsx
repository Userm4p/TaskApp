import { MouseEvent } from 'react'
import './Header.css'
import { useContext } from 'react';
import { LoginContext } from '../../../contexts/LoginContext';
import { types } from '../../../contexts/LoginTypes';
import { useNavigate } from 'react-router-dom';

export const Header = () => {


  const navigate = useNavigate()

  const { dispatch } = useContext(LoginContext)

  const handleLogout = (e: MouseEvent) => {
    e.preventDefault();
    dispatch({ type: types.logout });
    localStorage.removeItem('login');
    sessionStorage.removeItem('login');
  }

  const handleNew = () => {
    navigate('/newnote')
  }

  return (
    <>
      <div className="header-container">
        <span className="header-text">Task App</span>
        <div>
          <button className="log-out-button" style={{ backgroundColor:'black', marginTop: '10px', marginLeft: '10px', borderRadius: '10px' }} onClick={handleNew}>
            <svg style={{color: "yellow" }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button className="log-out-button" onClick={(e) => handleLogout(e)} >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
