import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import axios from 'axios';
import Articles from './Articles';

class Search extends Component {

    

    render() {
        
        var busqueda = this.props.match.params.search;

        return (

            <div id="blog">
                <Slider title={'Busqueda: ' + busqueda} size="slider-small" />


                <div className="center">
                    <div id="content">
                        {/*Listado de articulos de la API*/}
                        <Articles search={busqueda} />

                    </div>

                    <Sidebar blog="true" />
                </div>

            </div>
        )
    }
}

export default Search;

