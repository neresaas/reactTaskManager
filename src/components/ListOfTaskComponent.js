import { Link } from "react-router-dom";

let ListOfTaskComponent = (props) => {
    let { tasks, setTasks } = props

    let onClickDeleteTask = (name) => {
        let otherTask = tasks.filter(t => t.name != name)
        setTasks(otherTask)
    }

    return (
        <div>
            <h1>List of Task</h1>
            <ul className='task-list'>
                { tasks.map( t =>
                    <li key={t.name}>
                        <Link to={'/detailsTask/' + t.name }>
                            { t.name }
                        </Link>
                        <button className="delete-button"
                            onClick={ () => { onClickDeleteTask(t.name) }}>Delete</button>
                    </li>) }
            </ul>
      </div>
    )
};

export default ListOfTaskComponent;