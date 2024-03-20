let ListOfTaskComponent = (props) => {
    let { task, setTask, setTaskSelected } = props

    let onClickSelectedTask = (name) => {
        let foundTask = task.find(t => t.name == name)
        setTaskSelected(foundTask)
    }

    let onClickDeleteTask = (name) => {
        let otherTask = task.filter(t => t.name != name)
        setTask(otherTask)
    }

    return (
        <div>
            <h1>List of Task</h1>
            <ul className='task-list'>
                { task.map( t =>
                    <li key={t.name} onClick={ () => {onClickSelectedTask(t.name)} }>
                        { t.name }
                        <button className="delete-button"
                            onClick={ () => { onClickDeleteTask(t.name) }}>Delete</button>
                    </li>) }
            </ul>
      </div>
    )
};

export default ListOfTaskComponent;