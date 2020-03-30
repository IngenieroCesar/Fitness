// const element = document.createElement('h1');

// element.innerText = 'Hello React';

// const container = document.getElementById('root');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
//De esta manera es como traemos el componente que hemos creado.
import Exercises from './pages/Exercises'
import 'bootstrap/dist/css/bootstrap.css'




//Esta variable contiene el id del elemento al que stamos renderizando el contenido!
const container = document.getElementById('root');

// ReactDOM.render(__QUE__, __DONDE__);
//Para traer un compónente debemos de meterlo en sus etquetas <component/>
ReactDOM.render(<Exercises/>, container); 