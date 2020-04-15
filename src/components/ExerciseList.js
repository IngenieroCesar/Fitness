import React from 'react';
import Card from './Card'


const ExerciseList= ({exercises}) => (
    <div>
            {
                // En este momento estamos usando la funcion map para iterar todos los elementos del arreglo,
                exercises.map((exercise) => {
                    return(
                        <Card
                        //Este es nuestro identificador unico de elementos dentro 
                        //de nuestro componente
                        key={exercise.id}
                        title={exercise.title}
                        description={exercise.description}
                        img={exercise.img}
                        leftColor={exercise.leftColor}
                        rightColor={exercise.rightColor}
                    />
                    )
                })
            }
        </div>
)

// function ExerciseList(props){
//     return(
//         <div>
//             {
//                 // En este momento estamos usando la funcion map para iterar todos los elementos del arreglo,
//                 props.exercises.map((exercise) => {
//                     return(
//                         <Card
//                         title={exercise.title}
//                         description={exercise.description}
//                         img={exercise.img}
//                         leftColor={exercise.leftColor}
//                         rightColor={exercise.rightColor}
//                     />
//                     )
//                 })
//             }
//         </div>
//     )
// }

export default ExerciseList