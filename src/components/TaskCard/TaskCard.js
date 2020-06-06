import React, { useEffect, useState } from 'react';
import Task from '../Task/Task';
import axios from 'axios';
import '../Task/Task.css'

const TaskCard = () => {
    const [tasks, setTasks] = useState({});
    const key = 'ctrlg-crud';

    useEffect(() => {
        axios.get(`https://${key}.firebaseio.com/alumnos.json`)
            .then(({ data }) => setTasks(data));
    }, [])

    return (
        <div className="card">
            <div className="card-body">
                <div className="card-header text-white bg-warning centrarT letraG" style={{ maxWidth: 30 + 'rem'}}>Evaluaciones Recibidas</div>
                <br/>
                {Object.keys(tasks).map((id) =>
                    <Task
                        key={id}
                        nombre={tasks[id].nombre}
                        apellido={tasks[id].apellido}
                    />)}
            </div>
        </div>
    )
}

export default TaskCard