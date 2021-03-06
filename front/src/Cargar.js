import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Carga.css';
import ElementoCarga from "./ElementoCarga.js";


class Cargar extends Component {

  carga = (consulta) =>{
    this.props.cargar(consulta);
  }

  cerrar = () =>{
    this.props.cerrarModal();
  }  

  renderConsultas(){

    return this.props.consultasHistorial.map((t,i)=>{
      return (<ElementoCarga key={i} consulta={t} carga={this.carga}/>);
    });
  }

  render(){
    return(
        <div id="cargar">
           <div id="modalconent2">
              <h2>Cargar Alguna Consulta Realizada</h2>
              <button onClick={this.cerrar} className="botonModal"><i className="fa fa-times" aria-hidden="true"></i></button> 
              {this.renderConsultas()}
           </div>
        </div>
      );
  }
}


Cargar.PropTypes={
  consultas:PropTypes.object.isRequired
};


export default Cargar;