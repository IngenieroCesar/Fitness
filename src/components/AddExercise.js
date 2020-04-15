import React from 'react';
import './styles/AddExercise.css';
import { Link } from 'react-router-dom';


const AddExercise = (props) => (
    <div className="center-element">
    {/* // Con este componente evitamos que se refresque nuestra pagina! */}
        <Link to={props.url}>
            <img src="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d" alt="addexercise"/>
        </Link>
    </div>
)


export default AddExercise