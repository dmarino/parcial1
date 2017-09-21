import React, { Component } from 'react';
//import './Menu.css';

export default class Menu extends Component {

  constructor(props){
    super(props);
  }

  cerrar = () =>{
    console.log("entra");
    this.props.cerrar();
  }

  buscar = () =>{
    this.props.buscar();
  }  


  render() {
    return (
      <div id="menu">
          <button onClick={this.cerrar}><i className="fa fa-times" aria-hidden="true"></i></button>
          <button onClick={this.buscar}><i className="fa fa-search" aria-hidden="true"></i></button>
      </div>
    );
  }
}
