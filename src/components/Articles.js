import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // importando el link para las redirecciones
import axios from 'axios';
import Global from '../Global';
import Moment from 'react-moment';
import 'moment/locale/es';


class Articles extends Component {

    url = Global.url;

    state = {
        articles: [],
        status: null
    }

    componentWillMount() {

        var home = this.props.home;
        var search = this.props.search



        if (home == 'true') {

            this.getLastArticles();
        } else if (search && search !== null) {

            this.getArticlesBySearch(search);
        } else {
            this.getArticles();
        }

    }

    getArticlesBySearch = async (busqueda) => {

        axios.get(this.url + 'search/' + busqueda)
            .then(res => {

                if (res.data.articles) {
                    this.setState({
                        articles: res.data.articles,
                        status: 'success'
                    })
                }
            })
            .catch(err => {
                this.setState({
                    articles: [],
                    status: 'success'
                })
            });
    }

    getLastArticles = async () => {

        await axios.get(this.url + 'articles/last')
            .then(res => {

                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });
            });
    }

    getArticles = async () => {
        await axios.get(this.url + 'articles')
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                });


            });
    }

    render() {

        if (this.state.articles.length >= 1) {

            var listArticles = this.state.articles.map((article) => {

                return (
                    <article key={article._id} className="article-item" id="article-template">
                        <div className="image-wrap">
                            {article.image != null ? (
                                <img
                                    src={this.url + 'get-image/' + article.image}>
                                </img>
                            ) : (
                                    <img src="https://carolinadojo.com/wp-content/uploads/2017/04/default-image.jpg"></img>
                                )

                            }

                        </div>

                        <h2>{article.title}</h2>
                        <span className="date">
                            <Moment locale="es" fromNow>{article.date}</Moment>
                        </span>
                        <Link to={'/blog/articulo/' + article._id}>Leer mas</Link>
                        <div className="clearfix"></div>

                    </article>
                );
            });
            return (
                <div id="articles">
                    {listArticles}
                </div>
            );
        } else if (this.state.articles.length === 0 && this.state.status == 'success') {

            return (
                <div id="articles">
                    <h2 className="subheader">No hay articulos para mostrar</h2>
                    <p>Todavia no hay contenido en esta seccion</p>
                </div>
            )
        } else {
            return (
                <div id="articles">
                    <h2 className="subheader">Cargando...</h2>
                    <p>Espere mientras carga el contenido</p>
                </div>
            )
        }


    }
}

export default Articles;