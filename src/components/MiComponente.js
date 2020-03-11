import React, { Component, Fragment } from 'react';


class MiComponente extends Component {


    render() {

        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamon cocido'],
            calorias: 400
        }

        return (
            <Fragment>
                <h1>{'Receta: ' + receta.nombre}</h1>
                <h2>{'Calorias: ' + receta.calorias}</h2>

                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            console.log(ingrediente);

                            return (
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            )
                        })
                    }
                </ol>
                <hr></hr>

                {this.props.saludo &&
                    <Fragment>
                        <h1>DESDE UNA PROP</h1>
                        <h3>{this.props.saludo}</h3>
                    </Fragment>
                }

            </Fragment>
        );
    }
}


export default MiComponente;








//Render se encarga de mostrar la vista
//key: Es recomendable ponerle una llave unica a cada li de una lista