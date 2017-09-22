import React, { Component } from 'react';
import './Menu.css';

export default class Menu extends Component {

  cerrar = () =>{
    this.props.cerrar();
  }

  buscar = () =>{
    this.props.buscar();
  }  

  guardar = () =>{
    this.props.guardar();
  }  

  render() {
    return (
      <div id="menu">
          <button onClick={this.cerrar}><i className="fa fa-times" aria-hidden="true"></i></button>
          <button onClick={this.buscar}><i className="fa fa-search" aria-hidden="true"></i></button>
          <button onClick={this.guardar}><i className="fa fa-heart" aria-hidden="true"></i></button>
      </div>
    );
  }
}
