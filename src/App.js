import './App.css';
import { useState} from 'react';
import DetailsOfTaskComponent from './components/DetailsOfTaskComponent';
import ListOfTaskComponent from './components/ListOfTaskComponent';
import CreateTaskComponent from './components/CreateTaskComponent';
import { Route, Routes, Link } from 'react-router-dom';

function App() {

  let [taskSelected, setTaskSelected] = useState({});

  let [task, setTask] = useState([
    {
      name: 'Task1',
      place: 'School',
      priority: 0
    },
    {
      name: 'Clean',
      place: 'House',
      priority: 0
    }
  ])

  return (
    <div className='container'>
      <nav>
        <ul className='navbar'>
          <li><Link to={'/'}>Tasks</Link></li>
          <li><Link to={'/createTask'}>Add Task</Link></li>
          <li></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={
          <ListOfTaskComponent setTask={setTask} task={task} setTaskSelected={setTaskSelected}/>
        }></Route>

        <Route path='/createTask' element={
          <CreateTaskComponent task={task} setTask={setTask}/>
        }></Route>

        <Route path='/detailsTask' element={
          <DetailsOfTaskComponent task={taskSelected}/>
        }></Route>
      </Routes>

    </div>
  );
}

export default App;
