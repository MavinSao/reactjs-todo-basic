import {Button, Form} from 'react-bootstrap';
import './AddTask.css';
import React,{useContext} from 'react'
import { TaskContext } from '../../context/context';
import uuid from "react-uuid"
function AddTask() {

  const {tasks, setTasks,taskTitle, setTaskTitle,updateID,setUpdateID} = useContext(TaskContext)

  const onSave=()=>{

      if(updateID){
        let allTasks = tasks.map((task)=>{
            if(task.id === updateID){
              task.title = taskTitle
            }
            return task
        })
        setTasks(allTasks)
      }else{
        let newTask = {
          id: uuid(),
          title: taskTitle,
          complete: false
        }
        setTasks([
          ...tasks, newTask
        ])
      }
      setTaskTitle('')
      setUpdateID(null)

  }

  return (
    <div>
        <h2 className="my-4 text-white">Input Task</h2>
        <div className="flexContainer">
            <Form.Control 
                type="text" 
                placeholder="Good morning Mavin, What in your main focus today?"
                value={taskTitle}  
                className="text-task"
                onChange={(e)=>setTaskTitle(e.target.value)}      
            />
            <Button className="btn-add" onClick={onSave} disabled={taskTitle ? false:true}>{updateID ? 'Save':'Add'}</Button>
        </div>
    </div>
  )
}

export default AddTask
