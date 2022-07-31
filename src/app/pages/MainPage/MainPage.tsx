import './MainPage.css';
import { useContext } from 'react';
import { SelectedNoteContext } from '../../../contexts/SelectedNoteContext';
import { types } from '../../../contexts/SelectedNoteType';
import { useNavigate } from 'react-router-dom';
import { mockDataNotes } from './mockDataNotes';

export interface ItemMock  {
  id: number;
  title: string;
  description: string;
  points: {
      id: number;
      status: number;
      paragraphs: string;
  }[];
  status: number;
}

export const MainPage = () => {

  const navigate = useNavigate()
  

  const {dispatch} = useContext(SelectedNoteContext)

  const handleClick = (item:ItemMock) => {
    dispatch({type: types.Mod, payload: {item}})
    navigate('/mod')
  }

  return (
    <div className="mainpage_container">
      {
        mockDataNotes.map((notesByDay, index) => {
          return <div key={index} className="notesByDay">
            <h1 className='header-text'>{(notesByDay.notes_date.getDate() === new Date().getDate() && notesByDay.notes_date.getMonth() === new Date().getMonth()) && 'Hoy'}</h1>
            <h1 className='header-text'>{(notesByDay.notes_date.getDate() === new Date().getDate() - 1 && notesByDay.notes_date.getMonth() === new Date().getMonth()) && 'Ayer'}</h1>
            <h1 className='header-text'>
              {((!(notesByDay.notes_date.getDate() === new Date().getDate() && notesByDay.notes_date.getMonth() === new Date().getMonth()) )
                && (!(notesByDay.notes_date.getDate() === new Date().getDate() - 1 && notesByDay.notes_date.getMonth() === new Date().getMonth()))) &&
                 notesByDay.notes_date.getDate()+'/'+notesByDay.notes_date.getMonth()+"/"+notesByDay.notes_date.getFullYear()
              }</h1>
            {notesByDay.notes.map((item) => {
                return <div className="task_container" key={item.id}>
                  <span>{(item.status === 0)
                    ?
                    <div className="status_text">
                      <div className="status_light" style={{ backgroundColor: 'grey' }} ></div>
                      <span>Por iniciar</span>
                    </div>
                    : (item.status === 1) ?
                      <div className="status_text">
                        <div className="status_light" style={{ backgroundColor: 'blue' }} ></div>
                        <span>En progreso</span>
                      </div>
                      :
                      <div className="status_text">
                        <div className="status_light" style={{ backgroundColor: 'green' }} ></div>
                        <span>Terminado</span>
                      </div>
                  }</span>
                  <h1 className="task-title">{item.title}</h1>
                  <hr className="task_hr" />
                  <ul className="point_list">
                    {
                      item.points.map((point) => {
                        return <li key={point.id} style={{textDecoration:(point.status===1) ? 'line-through':'none'}} >{point.paragraphs}</li>
                      })
                    }
                  </ul>
                  <div className="task_desc_container">
                    <span className="task_desc_title" >Detalle</span>
                    <p className="task_desc" >{item.description}</p>
                  </div>
                  <div className="buttons_container">
                    <button className="option_button" onClick={() => handleClick(item)}>
                      <svg style={{ width: '35px', color: 'red' }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button className="option_button" disabled={(item.status !== 0)}>
                      <svg style={{ width: '35px', color: ((item.status !== 0) ? "grey" : "blue") }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </button>
                    <button className="option_button" >
                      <svg style={{ width: '35px', color: ((item.status === 2) ? "grey" : "green") }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </button>
                  </div>
              </div>
              })}
          </div>
          
        })
      }
    </div>
  )
}
