import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import Heading from './components/Heading/Heading';
import Complete from "./components/Complete/Complete";
import { Container } from 'react-bootstrap';
import Tasks from './components/Tasks/Tasks';
import React, { useState } from 'react';
import AddTask from './components/AddTask/AddTask';
import { TaskContext } from './context/context';
function App() {

  const [taskTitle, setTaskTitle] = useState("");
  const [updateID, setUpdateID] = useState(null)
  const [tasks, setTasks] = useState([{
    id: '0',
    title: 'Study',
    complete: false
  }, {
    id: '1',
    title: 'Exam',
    complete: false
  }, {
    id: '3',
    title: 'Shoping',
    complete: true
  }])




  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        taskTitle,
        setTaskTitle,
        updateID,
        setUpdateID,
      }}>
      <div className="body">
        <Navigation />
        <Container>
          <Heading />
          <AddTask />
          <Tasks />
          <Complete />
        </Container>
      </div>
    </TaskContext.Provider>
  );
}

export default App;
