import React, { MouseEvent, useEffect, useState } from 'react'
import { useContext } from 'react';
import { SelectedNoteContext } from '../../../contexts/SelectedNoteContext';
import { Link } from 'react-router-dom';
import { types } from '../../../contexts/SelectedNoteType';

interface Ipoints {
  id:number,
  status:boolean,
  paragraphs:string
}

export const ModifyPage = () => {


  const {dispatch, mod} = useContext(SelectedNoteContext)

  const [selectedNote, setSelectedNote] = useState<any>()

  useEffect(() => {
    if(mod.note){
      setSelectedNote(mod.note)
    }
  }, [mod.note])
  
  
  const HandleCancel = () => {
    dispatch(types.NoMod)
  }

  const handleAddPoint = (e:any) => {
    e.preventDefault()
    let lastPoints = selectedNote?.item.points
    const newPoint = {
      id:lastPoints.length+1,
      status:0,
      paragraphs:''
    }
    lastPoints.push(newPoint)
    setSelectedNote(
      {item: {
        ...selectedNote?.item,
        points: lastPoints
      }}
    )
  }

  const handleChange = (e:any, id:number) => {
    let points = selectedNote?.item.points;
    points[id] = {
      ...points[id],
      paragraphs:e.target.value
    }
    setSelectedNote((
      {item: {
        ...selectedNote?.item,
        points
      }}
    ))
  }

  return (
    <>
      {
        (mod.mod && selectedNote) 
        ? <div>
            <h1>ModifyPage</h1>
            <form>
              <input></input>
              {selectedNote?.item.points.map((item : Ipoints , index:number)=>{
                return <div>
                  <input key={item.id} value={item.paragraphs} onChange={(e) => handleChange(e, index)}/>
                  </div>
              })}
              <button onClick={(e) => handleAddPoint(e)}>Añadir inciso</button>
              <textarea></textarea>
            </form>
            <button onClick={HandleCancel} >Cancelar</button>
        </div>

        : 
        <div>
            <div className="register-link-text">
                <span style={{marginRight:'5px'}}>Parece que no se has seleccionado ninguna nota ¿Regresar a la <Link to={'/'}>Pagina principal</Link>?</span>
            </div>
        </div>
        
      }
    </>
    
  )
}
