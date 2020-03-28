// const element = document.createElement('h1');

// element.innerText = 'Hello React';

// const container = document.getElementById('root');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

const user = {
  firtName: "Cesar",
  lastName: 'Garzón',
  avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png'
}

function getName (user){
  return `${user.firtName} ${user.lastName}`
}

function getGreeting(user){
  if(user){
   return <h1>Hello {getName(user)}</h1>
  }
  return <h1>Hello Stranger</h1>
}

const name = 'Cesar';
const element = (
  <div>
    <h1>Hello {getName(user)}</h1>
    <img src={user.avatar}/>
  </div>
); 


const container = document.getElementById('root');

ReactDOM.render(element, container); 