import React from 'react';

class ExerciseNew extends React.Component {

// //Este constructor lo generamos para
// constructor(props){
//     //Constructor base
//     super(props)
//     //Damos contexto de this en el Scope global, para la función
//     this.handleClick = this.handleClick.bind(this)
// }

    //Componente de clase
    //De esta manera podemos generar eventos, y ademas controlarlos
    //PUBLIC CLASS FIELDS:En este caso esta arrow functión nos situa en el contexto de Scope global
    handleClick = ()=> {
        console.log(this.props);
    }



    render(){
       return (
           //Componente de clase
           //Para definir el evento lo controlamos con una función
           <button onClick={this.handleClick}>
               Send
           </button>
       )
    }
}

export default ExerciseNew