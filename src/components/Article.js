import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import axios from 'axios';
import swal from 'sweetalert';
import Global from '../Global';
import Sidebar from './Sidebar';
import Moment from 'react-moment';
import 'moment/locale/es';

class Article extends Component {

    url = Global.url;

    state = {

        article: false,
        status: null
    };

    componentWillMount() {
        this.getArticle();
    }

    getArticle = async () => {

        var id = this.props.match.params.id;

        await axios.get(this.url + 'article/' + id)
            .then(res => {

                this.setState({
                    article: res.data.article,
                    status: 'success'
                });
            })
            .catch(err => {
                this.setState({
                    article: false,
                    status: 'success'
                })
            });
    };

    deleteArticle = (id) => {


        swal({
            title: "Estas seguro que deseas eliminar el articulo?",
            text: "una vez eliminado el articulo no podras recuperarlo",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    axios.delete(this.url + 'article/' + id)
                        .then(res => {

                            this.setState({
                                article: res.data.article,
                                status: 'deleted'
                            })

                            swal(
                                'Articulo borrado',
                                'El articulo ha sido eliminado',
                                'success'
                            )
                        })

                } else {
                    swal(
                        'Tranquilo',
                        'Tu articulo no se ha eliminado',
                        'success'
                    )
                }
            });



    }

    render() {

        if (this.state.status === 'deleted') return <Redirect to="/blog" />

        var article = this.state.article;


        return (
            <div className="center">
                <section id="content">

                    {
                        this.state.article &&
                        <article className="article-item article-detail" id="article-template">
                            <div className="image-wrap">
                                {
                                    article.image != null ? (
                                        <img
                                            src={this.url + 'get-image/' + article.image}>
                                        </img>
                                    ) : (
                                            <img src={"https://carolinadojo.com/wp-content/uploads/2017/04/default-image.jpg"}></img>
                                        )
                                }
                            </div>

                            <h1 className="subheader">{article.title}</h1>
                            <span className="date">
                                <Moment locale="es" fromNow>{article.date}</Moment>
                            </span>
                            <p>{article.content}</p>

                            <Link to={'/blog/editar/' + article._id} className="btn btn-warning">Editar</Link>
                            <button onClick={

                                () => {
                                    this.deleteArticle(article._id)
                                }

                            } className="btn btn-danger">Eliminar</button>

                            <div className="clearfix"></div>
                        </article>


                    }

                    {!this.state.article && this.state.status === 'success' &&

                        <div id="article">
                            <h2 className="subheader">El articulo no existe</h2>
                            <p>Intente de nuevo mas tarde</p>
                        </div>
                    }

                    {this.state.status == null &&
                        <div id="article">
                            <h2 className="subheader">Cargando...</h2>
                            <p>Espere unos segundos</p>
                        </div>
                    }
                </section>


                <Sidebar />


            </div>
        )
    }
}

export default Article;