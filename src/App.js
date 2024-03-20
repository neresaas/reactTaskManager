import './App.css';
import { useState} from 'react';
import DetailsOfTaskComponent from './components/DetailsOfTaskComponent';
import ListOfTaskComponent from './components/ListOfTaskComponent';
import CreateTaskComponent from './components/CreateTaskComponent';

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
      <ListOfTaskComponent task={task} setTaskSelected={setTaskSelected}/>

      <CreateTaskComponent task={task} setTask={setTask}/>

      <DetailsOfTaskComponent task={taskSelected}/>
    </div>
  );
}

export default App;
