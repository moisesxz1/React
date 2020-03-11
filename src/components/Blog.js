import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import axios from 'axios';
import Articles from './Articles';

class Blog extends Component {

    

    render() {
        

        return (

            <div id="blog">
                <Slider title="Blog" size="slider-small" />


                <div className="center">
                    <div id="content">
                        {/*Listado de articulos de la API*/}
                        <Articles />

                    </div>

                    <Sidebar blog="true" />
                </div>

            </div>
        )
    }
}

export default Blog;

/* {this.state.status == 'success' &&

                            <div>
                                {this.state.articles.map((article) =>{

                                    return(<h1 key={article._id}>{article.title}</h1>)
                                })}
                            </div>
                        }*/

/* axios.get('http://localhost:3900/api/articles')
        .then(res => {


            this.setState({
                articles: res.data.articles,
                status: 'success'
            });
        });*/