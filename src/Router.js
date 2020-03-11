import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'; // modulos necesarios para las rutas 

import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import Formulario from './components/Formulario';
import Search from './components/Search';
import Article from './components/Article';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';

class Router extends Component {


    render() {




        return (

            < BrowserRouter >

                <Header />



                {/*CONFIGURAR RUTAS Y PAGINAS*/}
                <Switch>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/blog/articulo/:id" component={Article} />
                    <Route exact path="/blog/crear" component={CreateArticle} />
                    <Route exact path="/blog/editar/:id" component={EditArticle} />
                    <Route exact path="/blog/busqueda/:search" component={Search} />
                    <Route exact path="/redirect/:search" render={
                        (props) => {
                            var search = props.match.params.search;
                            return (<Redirect to={'/blog/busqueda/' + search} />) //redireccionar a otra ruta
                        }
                    } />
                    <Route exact path="/formulario" component={Formulario} />
                    <Route exact path="/peliculas" component={Peliculas} />
                    <Route exact path="/segunda-ruta" component={MiComponente} />


                    <Route exact path="/pagina-1" render={() => (
                        <Fragment>
                            <h1>Hola mundo desde la ruta: PAGINA 1</h1>
                            <MiComponente saludo="Hola amigo" />
                        </Fragment>
                    )} />

                    <Route exacth path="/pruebas/:nombre/:apellidos?" render={(props) => {

                        var nombre = props.match.params.nombre; // para recojer el parametro en la url
                        var apellidos = props.match.params.apellidos

                        return (
                            <div id="content">
                                <h1 className="subheader">Pagina de pruebas</h1>
                                <h2>{nombre && !apellidos &&
                                    <Fragment>{nombre}</Fragment>}
                                </h2>
                                <h2>{nombre && apellidos &&
                                    <Fragment>{nombre} {apellidos}</Fragment>}</h2>
                            </div>
                        )
                    }
                    } />
                    <Route component={Error} />


                </Switch>


                <div className="clearfix"></div>


                <Footer />

            </BrowserRouter >
        )
    }
}

export default Router;

//se usa exact cuando se quiere indicar explciitamente que se quiere acceder a esa ruta
// (23) cargar componente por defecto en caso de ingresar una ruta inexistente
// (25){/*Ruta sin componente, lo que esta dentro del render se va a mostrar en pantalla*/}