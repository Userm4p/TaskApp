import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { SelectedNoteContext } from '../../../contexts/SelectedNoteContext';
import { Link, useNavigate } from 'react-router-dom';
import { types } from '../../../contexts/SelectedNoteType';
import './ModifyPage.css'

export interface Ipoints {
  id: number,
  status: boolean,
  paragraphs: string
}

export const ModifyPage = () => {


  const navigate = useNavigate()

  const { dispatch, mod } = useContext(SelectedNoteContext)

  const [selectedNote, setSelectedNote] = useState<any>()

  useEffect(() => {
    if (mod.note) {
      setSelectedNote(mod.note)
    }
  }, [mod.note])


  const HandleCancel = () => {
    dispatch(types.NoMod);
    navigate('/') 
  }

  const handleAddPoint = (e: any) => {
    e.preventDefault()
    let lastPoints = selectedNote?.item.points
    const newPoint = {
      id: lastPoints.length,
      status: 0,
      paragraphs: ''
    }
    lastPoints.push(newPoint)
    setSelectedNote(
      {
        item: {
          ...selectedNote?.item,
          points: lastPoints
        }
      }
    )
  }

  const handleDeletePoint = (e: any) => {
    e.preventDefault()
    let lastPoints = selectedNote?.item.points
    lastPoints.pop()
    setSelectedNote(
      {
        item: {
          ...selectedNote?.item,
          points: lastPoints
        }
      }
    )
  }

  const handleChange = (e: any, id: number) => {
    let points = selectedNote?.item.points;
    points[id] = {
      ...points[id],
      paragraphs: e.target.value
    }
    setSelectedNote((
      {
        item: {
          ...selectedNote?.item,
          points
        }
      }
    ))
    console.log(selectedNote);
  }

  const handleChangeTexts = (e: any) => {
    setSelectedNote({
      item: {
        ...selectedNote.item,
        [e.currentTarget.name]: e.currentTarget.value
      }

    })
  }

  return (
    <>
      {
        (mod.mod && selectedNote)
          ?
          <div className="Modify-page-container" >
            <div className="task_container" style={{ padding: '15px' }}>
              <h1 className="task-title">Modificar</h1>
              <hr className="task_hr" />
              <form className="modify-form">
                <div>
                  <label className="task-title" style={{ fontSize: '20px' }}>Titulo </label><input className='login-input' onChange={(e) => { handleChangeTexts(e) }} name="title" value={selectedNote.item.title}></input>
                </div>
                <hr className="task_hr" />
                <label className="task-title" style={{ fontSize: '20px' }}>Puntos</label>
                {selectedNote?.item.points.map((item: Ipoints, index: number) => {
                  return <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                    <li><input className="modify-li-input point_list" value={item.paragraphs} onChange={(e) => handleChange(e, index)} /></li>
                  </div>
                })}
                <div className="buttons-container">
                  <button className="option_button" onClick={(e) => handleAddPoint(e)}>
                    <svg style={{ width: '35px', color: "green" }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button >
                  <button disabled={(selectedNote?.item.points.length === 0)} className="option_button" onClick={(e) => handleDeletePoint(e)}>
                    <svg style={{ width: '35px', color: (selectedNote?.item.points.length === 0) ? "grey" : "red" }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
                <hr className="task_hr" />
                <label className="task-title" style={{ fontSize: '20px' }}>Detalle</label>
                <textarea className="modify-text-area" onChange={(e) => { handleChangeTexts(e) }} name="description" value={selectedNote.item.description}></textarea>
              </form>
              <div style={{display:'flex', width:'100%', alignItems:'center', justifyContent:'space-around'}}>
                <button className='login-button' style={{ backgroundColor: 'red', padding:'10px 15px' }} onClick={HandleCancel} >Cancelar</button>
                <button className='login-button' style={{ backgroundColor: 'green', padding:'10px 15px' }} onClick={HandleCancel} >Guardar</button>
              </div>
            </div>
          </div>
          :
          <div>
            <div className="register-link-text">
              <span style={{ marginRight: '5px' }}>Parece que no se has seleccionado ninguna nota ¿Regresar a la <Link to={'/'}>Pagina principal</Link>?</span>
            </div>
          </div>

      }
    </>

  )
}
