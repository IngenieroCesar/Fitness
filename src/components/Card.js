import React from 'react';
import circleImg from '../images/circles.png'
import './styles/Card.css';


//Generamos la clase que ereda de react.components
class Card extends React.Component {
    //Estado entro de nuestro componente
    constructor(props){
        super(props);
        this.state = {
            img: 'https://pngimg.com/uploads/pokemon/pokemon_PNG154.png'

        }
    }
    //Esta función se invoca inmediatamente despues de que el componente es invocado.
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                img: 'https://pngimg.com/uploads/pokemon/pokemon_PNG149.png'
            })
        }, 5000)
    }

    //Definimos una funcion
    //Render pinta lo que escribimos dentro de ella
    render(){
        //Establecemos estructuring para evitar el manejo del this en nuestro componente.
        //Esto es una propiedad de ECMS6
        const {title, description, img, leftColor, rightColor} = this.props

        //Ya que vamos a retornar mas de una linea, debemos meterlo en ().
        return (
            //Los estilos de css los dinaamisamos desde aqui
            <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circleImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
             }}   
            >
                <div className="card-body"> 
                    <div className="row center">
                        <div className="col-6">
                            <img  src={img} className="float-right" width="120"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>

        
        )
    }
}

//Exportamos esta clase que creamos
export default Card