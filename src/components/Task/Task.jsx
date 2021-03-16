import React from 'react'
import { PencilFill, TrashFill, } from 'react-bootstrap-icons'
import './Task.css'

function Task({data,toogleComplete,deleteTask,editTask}) {
    const {title,id,complete} = data
    return (
        <div className="task">
        <div className="item" onClick={()=>{toogleComplete(id)}}>
            <input type="checkbox" checked={complete} readOnly/> 
            <span className="mx-2">{title}</span>
        </div>
          <div className="action">
            <TrashFill style={{color: 'deepPink', lineHeight: '1rem'} } onClick={()=>deleteTask(id)} className="trash mx-2 float-right"/> 
            <PencilFill style={{color: 'lightblue', lineHeight: '1rem'}} onClick={()=>editTask(id,title)} className="edit mx-2 float-right"/>
          </div>
        </div>
    )
}
export default Task;
