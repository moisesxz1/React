import React, { Component, createRef } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';
import Global from '../Global';
import Sidebar from './Sidebar';

//Validacion formularios y alertas

class EditArticle extends Component {

    url = Global.url;
    articleId = null;

    titleRef = createRef();
    contentRef = createRef();

    state = {
        article: {},
        status: null,
        selectedFile: null
    }

    componentWillMount() {

        this.articleId = this.props.match.params.id;
        this.getArticle(this.articleId);

        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo es requerido'
            }
        });
    }

    getArticle = (id) => {

        axios.get(this.url + 'article/' + id)
            .then(res => {

                this.setState({
                    article: res.data.article

                })

            })


    }

    changeState = () => {

        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value,
                image: this.state.article.image
            }
        })

        this.validator.showMessages();
        this.forceUpdate();
    }

    saveArticle =  (e) => {

        e.preventDefault();


        //Rellenar el state con los datos del input
        this.changeState();

        if (this.validator.allValid()) {

            //Guardar el articulo en la DB
             axios.put(this.url + 'article/' + this.articleId, this.state.article)
                .then(res => {

                    if (res.data.article) {

                        this.setState({
                            article: res.data.article,
                            status: 'waiting'
                        });

                        swal(
                            'Articulo editado',
                            'El artico se ha editado con exito',
                            'success'
                        )

                        //Subir imagen
                        if (this.state.selectedFile !== null) {

                            //ID del articulo guardado
                            let articleId = this.state.article._id;

                            const formData = new FormData();

                            formData.append(
                                'file0',
                                this.state.selectedFile, // el fichero que se desea subir
                                this.state.selectedFile.name // con que nombre se va a enviar el fichero
                            );

                            ///Hacer peticion AJAX
                            axios.post(this.url + 'upload-image/' + articleId, formData)
                                .then(res => {

                                    if (res.data.article) {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'success'
                                        })
                                    } else {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'failed'
                                        })
                                    }
                                })
                        } else {
                            this.setState({
                                status: 'success'
                            })
                        }

                    } else {
                        this.setState({
                            status: 'failed'
                        })
                    }
                })
        } else {

            this.setState({
                status: 'failed'
            })

            this.validator.showMessages();
            this.forceUpdate();
        }


    }

    fileChange = (e) => {

        this.setState({
            selectedFile: e.target.files[0]
        })
    }

    render() {

        if (this.state.status === 'success') return <Redirect to="/blog" />

        var article = this.state.article;

        return (

            <div className="center">
                <section id="content">
                    <h1 className="subheader">Editar articulo</h1>

                    {this.state.article.title &&

                        <form className="mid-form" onSubmit={this.saveArticle}>

                            <div className="form-group">
                                <label htmlFor="title">Titulo</label>
                                <input type="text" name="title" defaultValue={article.title} ref={this.titleRef} onChange={this.changeState}></input>

                                {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}

                            </div>

                            <div className="form-group">
                                <label htmlFor="content">Contenido</label>
                                <textarea name="content" defaultValue={article.content} ref={this.contentRef}></textarea>

                                {this.validator.message('content', this.state.article.content, 'required')}
                            </div>

                            <div className="form-group">
                                <label htmlFor="file0">Imagen</label>

                                <input type="file" name="file0" onChange={this.fileChange}></input>
                                <div className="image-wrap">
                                    {
                                        article.image != null ? (
                                            <img
                                                src={this.url + 'get-image/' + article.image} className="thumb" >
                                            </img>
                                        ) : (
                                                <img src={"https://carolinadojo.com/wp-content/uploads/2017/04/default-image.jpg"} className="thumb"></img>
                                            )
                                    }
                                </div>
                            </div>

                            <div className="clearfix"></div>

                            <input type="submit" value="Guardar" className="btn btn-success"></input>

                        </form>
                    }

                    {!this.state.article.title &&

                        <h1 className="subheader">Cargando</h1>
                    }


                </section>

                <Sidebar />
            </div>
        )
    }
}

export default EditArticle;