import React from 'react';

import './assets/css/App.css';


//Importar componentes

import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
//import SeccionPruebas from './components/SeccionPruebas';
//import Peliculas from './components/Peliculas';
import Router from './Router';

function App() {

  
  return (
    <div className="App">








      {/* Carga de componente dinamico */}
      <Router />

      {/* <Peliculas /> */}


    </div>
  );
}

export default App;

//JSX Es un lenguaje que mezcla HTML y JavaScript
//Se puede poner codigo puro de JS fuera del return
//State: es una manera de almacenar datos y propiedades de la clase que se van a estar mostrando en los componentes
//Dentro de un componente de React hay varios eventos del ciclo de vida :
//Render: Se encarga de mostrar por pantalla la vista y devolver un resultado en JSX o en HTML
//El componente pasa por 3 estados: Cuando se monta, Cuando se muestra(con el render) y otro cuando se desmonta
//ComponenDidMount : Es el primer metodo que se ejecuta despues que el componente se carga
//        Will: Se ejecuta antes de que se cargue el componente
//            Unmount: Se ejecuta antes de que se cambie de componente
//           Update: se ejecuta cuando se actualiza el componente
//167. 10:02
//Axios: es una libreria que permite hacer un cliente HTTP y esta basada en promesas
