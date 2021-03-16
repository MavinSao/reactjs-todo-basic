import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import Heading from './components/Heading/Heading';
import Complete from "./components/Complete/Complete";
import { Container } from 'react-bootstrap';
import Tasks from './components/Tasks/Tasks';
import React, { useState } from 'react';
import AddTask from './components/AddTask/AddTask';
import uuid from 'react-uuid';
function App() {

  const [inputValue, setInputValue] = useState('')
  const [isUpdate, setIsUpdate] = useState(false)
  const [updateId, setUpdateId] = useState(null)
  const [tasks, setTasks] = useState([{
    id: 0,
    title: 'Study',
    complete: false
  }, {
    id: 1,
    title: 'Exam',
    complete: false
  }, {
    id: 3,
    title: 'Shoping',
    complete: true
  }])

  const addTask = () => {
    if (isUpdate) {
      let allTasks = tasks.map((task) => {
        if (task.id === updateId) {
          task.title = inputValue
        }
        return task
      })
      setTasks([
        ...allTasks
      ])
      setInputValue('')
    } else {
      let newTask = {
        id: uuid(),
        title: inputValue,
        complete: false
      }
      setTasks([
        ...tasks, newTask
      ])
      setInputValue('')
    }
    setIsUpdate(false)
  }

  const toogleComplete = (id) => {
    let alltasks = tasks.map(task => {
      if (task.id === id) {
        task.complete = !task.complete
      }
      return task
    })
    setTasks(alltasks)
  }

  const editTask = (id, title) => {
    setIsUpdate(true)
    setUpdateId(id)
    setInputValue(title)
  }

  const deleteTask = (id) => {
    let allTasks = tasks.filter((task) => task.id !== id)
    setTasks(allTasks)
  }

  return (
    <div className="body">
      <Navigation />
      <Container>
        <Heading />
        <AddTask
          setValue={setInputValue}
          value={inputValue}
          onAdd={addTask}
          isUpdate={isUpdate}
        />
        <Tasks
          tasks={tasks}
          toogleComplete={toogleComplete}
          editTask={editTask}
          deleteTask={deleteTask} />
        <Complete
          complete={tasks}
          toogleComplete={toogleComplete}
          editTask={editTask}
          deleteTask={deleteTask} />
      </Container>
    </div>
  );
}

export default App;
