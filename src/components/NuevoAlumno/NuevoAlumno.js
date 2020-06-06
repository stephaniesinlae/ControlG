import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './NuevoAlumno.css';

const NuevoAlumno = () => {
    const PROJECT = 'ctrlg-crud';

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const history = useHistory();
    const [error, setError] = useState('');

    const handleNombre = (e) => {
        // console.log(e.target.value)
        setNombre(e.target.value);
    }
    const handleApellido = (e) => {
        // console.log(e.target.value)
        setApellido(e.target.value);
    }
    const createTask = () => {
        if (nombre.length > 0) {
            const body = {
                nombre: nombre,
                apellido: apellido
            }
            axios.post(`https://${PROJECT}.firebaseio.com/alumnos.json`, body)
                .then(() => {
                    history.push('./add')
                    setNombre('');
                    window.location.reload(true);
                })
                .catch(() => {
                    setError('Ocurrio un error de conexion')
                });
        } else {
            setError('Verifica que ingresaste informacion valida');

        }
    };
    return (
            <div className="container" style={{ maxWidth: 50 + 'rem' }}>
                <div className="centrarInput text-dark bg-light">
                    <h1 className="letraG">Agregar un nuevo alumno</h1>
                    <div className="form-group">
                        <label htmlFor="">Ingresa el nombre</label>
                        <input onChange={handleNombre} placeholder="Nombre" value={nombre} className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Ingresa el apellido</label>
                        <input onChange={handleApellido} placeholder="Apellido" value={apellido} className="form-control" type="text" />
                    </div>
                    <button onClick={() => createTask()} type="submit" className="btn btn-primary botonT">Agregar Alumno</button>
                </div>
            </div>
    )
}

export default NuevoAlumno
