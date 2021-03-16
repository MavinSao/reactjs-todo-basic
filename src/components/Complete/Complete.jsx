import React from 'react'
import Task from '../Task/Task'

function Complete({complete,toogleComplete,deleteTask,editTask}) {

    let completedData = complete.filter((task)=>task.complete === true)
    let completedCount = completedData.length

    return (
        <div className="text-white">
            <h2 className="my-4">Completed - {completedCount}</h2>
            <div className="all-task">
                   {
                       completedCount > 0 ? 
                       completedData.map((task)=>
                        <Task key={task.id} data={task} toogleComplete={toogleComplete} editTask={editTask} deleteTask={deleteTask}/>
                       ) :
                       <p className="text-center">No Complete Data</p>
                    }
            </div>
        </div>
    )
}

export default Complete
