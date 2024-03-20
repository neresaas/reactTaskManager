let ListOfTaskComponent = (props) => {
    let { task, setTaskSelected } = props

    let onClickSelectedTask = (name) => {
        let foundTask = task.find(t => t.name == name)
        setTaskSelected(foundTask)
    }

    return (
        <div>
            <h1>List of Task</h1>
            <ul className='task-list'>
                { task.map( t =>
                <li key={t.name} onClick={ () => {onClickSelectedTask(t.name)} }>{ t.name }</li>) }
            </ul>
      </div>
    )
};

export default ListOfTaskComponent;