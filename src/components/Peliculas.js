import React, { Component, Fragment } from 'react';
import Pelicula from './Pelicula';
import Slider from './Slider';
import Sidebar from './Sidebar';


class Peliculas extends Component {

    state = {

    };

    cambiarTitulo = () => {

        var { peliculas } = this.state;
        //var random = Math.floor(Math.random() * 3);
        peliculas[0].titulo = 'Batman begins';

        this.setState({
            peliculas: peliculas
        })
    }

    favorita = (pelicula, index) => {

        console.log('FAVORITA MARCADA');
        console.log(pelicula);
        this.setState({
            favorita: pelicula
        })
    }

    componentWillMount() {
        this.setState({
            peliculas: [
                { titulo: 'Batman v Superman', image: 'https://images-na.ssl-images-amazon.com/images/I/81oc57XKbxL.jpg' },
                { titulo: 'El padrino', image: 'data:image/jpeg;base64,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' },
                { titulo: 'Avengers:End-Game', image: 'https://www.nme.com/wp-content/uploads/2019/04/Payoff_1-Sht_Online_v6_Domestic_Sm-1-e1552570783683.jpg' }
            ],
            nombre: 'Moises Santana',
            favorita: {}
        })
    }

    render() {

        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        }

        return (

            <Fragment>
            <Slider title="Peliculas" size="slider-small" />

            <div className="center">
                <div id="content" className="peliculas">
                    <h2 className="subheader">Listado de peliculas</h2>
                    <p>Seleccion de las peliculas favoritas de {this.state.nombre}</p>
                    <p><button onClick={this.cambiarTitulo}>Cambiar titulo de batman</button></p>


                    {this.state.favorita.titulo ? (
                        <p className="favorita" style={pStyle}>
                            <strong>La pelicula favorita es: </strong>
                            <span>{this.state.favorita.titulo}</span>
                        </p>
                    ) : (
                            <p>No hay Pelicula favorita</p>
                        )
                    }

                    {/*Componente de pelicula*/}

                    <div id="articles" className="peliculas">
                        {
                            this.state.peliculas.map((pelicula, i) => {

                                return (
                                    <Pelicula key={i} pelicula={pelicula} marcarFavorita={this.favorita} indice={i} />
                                )
                            })
                        }
                    </div>
                </div>

                <Sidebar blog="false" />
            </div>
            </Fragment>
        );
    };
};

export default Peliculas;

//Poniendole una key a un elemento React sabe que elemento modificar en concreto
/*Verificar si la propiedad existe* (90) */


/*{this.state.favorita.titulo && If JSX el if vendria siendo el && si se cumple la condicion, mostrar el parrafo
    <p className="favorita" style={pStyle}>
        <strong>La pelicula favorita es: </strong>
        <span>{this.state.favorita.titulo}</span>
    </p>
}*/
