import React, { Component } from 'react';
import MiComponente from './MiComponente';


class SeccionPruebas extends Component {


    contador = 0;

    //STATE
    /*
    constructor(props){
        super(props)

        this.state = {
            contador: 0
        };
    }
    */

    state = {
        contador: 0
    }

    HolaMundo(nombre, edad) {
        var presentacion = (
            <div>
                <h2>Hola, soy {nombre}</h2>
                <h3>Tengo {edad} años </h3>
            </div>
        );

        return presentacion;
    }

    sumar = (e) => {

        this.setState({
            contador: (this.state.contador + 1) // Modificar el SATE
        })
    }
    restar = (e) => {
        
        this.setState({
            contador: (this.state.contador - 1)
        })
    }

    
    render() {

        var nombre = 'Moises Santana';
        return (
            <section id="content">
                <h2 className="subheader">Ultimos articulos</h2>
                <p>
                    Hola, bienvenido al curso de react
        </p>



                <h2 className="subheader">Funciones y JSX Basico</h2>
                {this.HolaMundo(nombre, 12)}


                <h2 className="subheader">Componentes</h2>
                <section className="componentes">

                    <MiComponente />  {/*llamada a un componente */}

                </section>

                <h2 className="subheader">Estado</h2>
                
                <p>
                    Contado: {this.state.contador}
                </p>

                <p>
                    <input type="button" value="Sumar" onClick={this.sumar}></input>
                    <input type="button" value="Restar" onClick={this.restar}></input>
                </p>
            </section>
        )
    }
}

export default SeccionPruebas;