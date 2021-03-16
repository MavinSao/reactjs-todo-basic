import React,{useContext} from 'react'
import { PencilFill, TrashFill, } from 'react-bootstrap-icons'
import { TaskContext } from '../../context/context'
import './Task.css'

function Task({task}) {

    const {tasks,setTasks,setTaskTitle,setUpdateID} = useContext(TaskContext)

    const completeTask = ()=>{
      let alltasks = tasks.map(ta => {
        if (ta.id === task.id) {
          ta.complete = !ta.complete
        }
        return ta
      })
      setTasks(alltasks)
    }

    const deleteTask = ()=>{
      let allTasks = tasks.filter((ta) => ta.id !== task.id)
      setTasks(allTasks)
    }

    const editTask = () => {
      setTaskTitle(task.title)
      setUpdateID(task.id)
    }

    return (
        <div className="task">
        <div className="item" onClick={completeTask}>
            <input type="checkbox" checked={task.complete} readOnly/> 
            <span className="mx-2">{task.title}</span>
        </div>
          <div className="action">
            <TrashFill 
              onClick={deleteTask}
              style={{color: 'deepPink'}} 
              className="mx-4"/> 
            <PencilFill 
              onClick={editTask}
              style={{color: 'lightblue'}} 
            />
          </div>
        </div>
    )
}
export default Task;
