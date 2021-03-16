import React,{useContext} from 'react'
import { TaskContext } from '../../context/context';
import Task from '../Task/Task'

function Tasks() {
  const {tasks} = useContext(TaskContext);

  let unCompleteTask = tasks.filter((task)=>task.complete !== true)

  return (
    <div className="text-white">
            <h2  className="my-4">Tasks - {unCompleteTask.length}</h2>
            <div className="all-task">
            { unCompleteTask.length > 0 ?
                      unCompleteTask.map((task)=> <Task key={task.id} task={task}/> ) :   
                      <p className="text-center">No Task Todo</p> 
            }
                              
            </div>
    </div>
  )
}

export default Tasks
