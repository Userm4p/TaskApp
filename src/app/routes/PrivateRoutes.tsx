import React, { Suspense, useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'
import { BarLoader } from 'react-spinners';
import { NoteReducer } from '../../contexts/SelectedNoteActions';
import { SelectedNoteContext } from '../../contexts/SelectedNoteContext';

const Footer = React.lazy(() => import('../components/Footer/Footer'));
const Header = React.lazy(() => import('../components/header/Header'));
const MainPage = React.lazy(() => import('../pages/MainPage/MainPage'));
const ModifyPage = React.lazy(() => import('../pages/ModifyPage/ModifyPage'));
const NowNotePage = React.lazy(() => import('../pages/NewNotePage/NowNotePage'));


const init = () => {
  return {
    mod: false,
    note: null
  }
}

export const PrivateRoutes = () => {

  const [mod, dispatch] = useReducer(NoteReducer, {}, init);

  return (
    <Suspense fallback={<BarLoader />}>
      <Header />
      <Routes>
        <Route path="/*" element={
          <SelectedNoteContext.Provider value={{ mod, dispatch }}>
            <MainPage />
          </SelectedNoteContext.Provider>
        } />
        <Route path="/mod" element={
          <SelectedNoteContext.Provider value={{ mod, dispatch }}>
            <ModifyPage />
          </SelectedNoteContext.Provider>
        } />
        <Route path="/newnote" element={<NowNotePage />} />
      </Routes>
      <Footer />
    </Suspense>
  )
}
