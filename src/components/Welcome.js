import React from 'react';
import './styles/Welcome.css';
//Podemos crear componentes de react con funciones de javascript
//componente funcional, en este componente no necesitamos trabajar con el stado ni el ciclo de vida

//En este caso estamos usando structurin en lugar de las props
const Welcome = ({username}) => (
    <div className="container">
    <div className="Fitness-User-Info">
        <h1>Hello {username}!</h1>
        <p>Let's workout to get someone gains!</p>
    </div>
</div>
)

// function Welcome(props){
//     return(
//         <div className="container">
//             <div className="Fitness-User-Info">
//                 <h1>Hello {props.username}!</h1>
//                 <p>Let's workout to get someone gains!</p>
//             </div>
//         </div>
//     )
// }

export default Welcome
