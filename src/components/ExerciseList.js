import React from 'react';
import Card from './Card'

function ExerciseList(props){
    return(
        <div>
            {
                // En este momento estamos usando la funcion map para iterar todos los elementos del arreglo,
                props.exercises.map((exercise) => {
                    return(
                        <Card
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
}

export default ExerciseList