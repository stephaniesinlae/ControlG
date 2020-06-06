import React from 'react';
import axios from 'axios';
import './Task.css';

const Task = ({ nombre, apellido, id}) => {
    const key = 'ctrlg-crud';

    const handleChange = () => {
        const body = {};
        body[id] = {
            nombre: nombre,
            apellido: apellido
        }
        axios.patch(`https://${key}.firebaseio.com/alumnos.json`, body)
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    return (
        <div className="card text-black bg-warning mb-1" style={{ maxWidth: 30 + 'rem'}}>
            <div className="card-body">
                <h6 className="letraP">{apellido} {nombre}</h6>
                <div className="form-check">
                </div>
            </div>
        </div>
    )
}

export default Task