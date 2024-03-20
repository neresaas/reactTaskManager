import { useState} from 'react';

let CreateTaskComponent = (props) => {
    let { task, setTask } = props

    let [name, setName] = useState('');
    let [place, setPlace] = useState('');
    let [priority, setPriority] = useState(0);

    let addTask = () => {
        let newTask = {
          name: name,
          place: place,
          priority: priority
        }
        setTask([...task, newTask])
        setName('')
        setPlace('')
        setPriority('')
    }

    return (
        <div className='task-form'>
            <h2>Add task</h2>
            <input type='text' placeholder='name' value={name} onChange={(e) => {setName(e.currentTarget.value)}}></input>
            <input type='text' placeholder='place' value={place} onChange={(e) => {setPlace(e.currentTarget.value)}}></input>
            <input type='number' placeholder='priority' value={priority} onChange={(e) => {setPriority(parseInt(e.currentTarget.value))}}></input>
            <button onClick={addTask}> Add task </button>
        </div>
    )
};

export default CreateTaskComponent;