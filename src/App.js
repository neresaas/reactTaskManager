import './App.css';
import { useState} from 'react';
import DetailsOfTaskComponent from './components/DetailsOfTaskComponent';
import ListOfTaskComponent from './components/ListOfTaskComponent';
import CreateTaskComponent from './components/CreateTaskComponent';
import { Route, Routes, Link } from 'react-router-dom';

function App() {

  let [tasks, setTasks] = useState([
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
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={
          <ListOfTaskComponent setTasks={setTasks} tasks={tasks}/>
        }></Route>

        <Route path='/createTask' element={
          <CreateTaskComponent tasks={tasks} setTasks={setTasks}/>
        }></Route>

        <Route path='/detailsTask/:name' element={
          <DetailsOfTaskComponent tasks={tasks}/>
        }></Route>
      </Routes>

    </div>
  );
}

export default App;
