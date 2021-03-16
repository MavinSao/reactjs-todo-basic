import React from 'react'
import Task from '../Task/Task'

function Tasks({tasks,toogleComplete,deleteTask,editTask}) {
  let inProgress = tasks.filter((task)=>task.complete === false)
  let inProgressCount = inProgress.length
  return (
    <div className="text-white">
            <h2  className="my-4">Tasks - {inProgressCount}</h2>
            <div className="all-task">
                   {
                    inProgressCount > 0 ? 
                    inProgress.map((task)=>
                        <Task key={task.id} data={task} toogleComplete={toogleComplete} editTask={editTask} deleteTask={deleteTask}/>
                    ) :
                    <p className="text-center">No Task Todo</p>
                  }
                   
            </div>
    </div>
  )
}

export default Tasks
