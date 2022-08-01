import React, { useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NoteReducer } from '../../contexts/SelectedNoteActions';
import { SelectedNoteContext } from '../../contexts/SelectedNoteContext';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/header/Header';

import { MainPage } from '../pages/MainPage/MainPage';
import { ModifyPage } from '../pages/ModifyPage/ModifyPage';
import { NowNotePage } from '../pages/NewNotePage/NowNotePage';

const init = () => {
  return {
    mod:false,
    note: null
  }
}

export const PrivateRoutes = () => {

  const [mod, dispatch]  = useReducer( NoteReducer, {} , init);

  return (
    <>
      <Header />
      <Routes>
        
          <Route path="/*" element={
            <SelectedNoteContext.Provider value={{mod, dispatch}}>
              <MainPage />
            </SelectedNoteContext.Provider>
          } />
          <Route path="/mod" element={
            <SelectedNoteContext.Provider value={{mod, dispatch}}>
              <ModifyPage/>
            </SelectedNoteContext.Provider>
          }/>
          <Route path="/newnote" element={<NowNotePage/>}/>
      </Routes>
      <Footer />
    </>
  )
}
