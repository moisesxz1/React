import React, { Component } from 'react';

import Sidebar from './Sidebar';

class Blog extends Component {

    nombreRef = React.createRef(); // Esta variable se referencia con el objeto campo nombre
    apellidosRef = React.createRef(); // Identificar los campos del formulario
    bioRef = React.createRef();
    generoHombreRef = React.createRef();
    generoMujerRef = React.createRef();
    generoOtroRef = React.createRef();

    state = {
        user: {}
    }

    recibirFormulario = (e) => {
        e.preventDefault();

        var genero = 'otro';

        if (this.generoHombreRef.current.checked) genero = this.generoHombreRef.current.value;

        else if (this.generoMujerRef.current.checked) genero = this.generoMujerRef.current.value;

        else genero = this.generoOtroRef.current.value;

        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            biografia: this.bioRef.current.value,
            genero: genero
        }

        this.setState({
            user
        })


        console.log(user);
    }

    render() {

        if (this.state.user.nombre) var user = this.state.user;
        return (

            <div id="Formulario">



                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Formulario</h1>

                        {/*Mostrar datos del formulario*/}
                        {this.state.user.nombre &&
                            <div id="user-data">

                                <p>Nombre: <strong>{user.nombre}</strong></p>
                                <p>Apellidos: <strong>{user.apellidos}</strong></p>
                                <p>Biografia: <strong>{user.biografia}</strong></p>
                                <p>Genero: <strong>{user.genero}</strong></p>
                            </div>
                        }
                        {/*Formulario*/}

                        <form className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
                            <div className="form-group">
                                <label htmlFor="nombre" >Nombre</label>
                                <input type="text" name="nombre" ref={this.nombreRef}></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="bio" >Apellidos</label>
                                <input type="text" name="apellidos" ref={this.apellidosRef}></input>
                            </div>

                            <div className="form-group">
                                <label htmlFor="bio" >Biografia</label>
                                <textarea name="bio" ref={this.bioRef}></textarea>
                            </div>

                            <div className="form-group radiobuttons">
                                <input type="radio" name="genero" value="hombre" ref={this.generoHombreRef}></input>Hombre
                                <input type="radio" name="genero" value="mujer" ref={this.generoMujerRef}></input>Mujer
                                <input type="radio" name="genero" value="otro" ref={this.generoOtroRef}></input>Otro
                            </div>

                            <div className="clearfix"></div>

                            <input type="submit" value="Enviar" className="btn btn-success"></input>

                        </form>

                    </div >
                    <Sidebar blog="false" />
                </div >

            </div>

        )
    }
}

export default Blog;