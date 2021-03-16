import React,{useContext} from 'react'
import { TaskContext } from '../../context/context';
import Task from '../Task/Task'

function Complete() {
    const {tasks} = useContext(TaskContext);

    let completeTask = tasks.filter((task)=>task.complete === true)
  
    return (
      <div className="text-white">
              <h2  className="my-4">Completed - {completeTask.length}</h2>
              <div className="all-task">
              { completeTask.length > 0 ?
                        completeTask.map((task)=> <Task key={task.id} task={task}/> ) :   
                        <p className="text-center">No Complete Task</p> 
              }
               
              </div>
      </div>
    )
}

export default Complete
