import React, { Component } from 'react';
import './Lista.css';
import PropTypes from "prop-types";
import ItemLista from "./ItemLista.js";

class Lista extends Component {

  constructor(props){
    super(props);
  }

  cambio = (user) =>{
    this.props.cambio(user);
  }


  renderItems(){
    return this.props.consultas.map((t,i)=>{
      if(i==(this.props.consultas.lengh -1))
      {
        return (
          <div className="contenedorItem">
            <ItemLista key={i} user={t} cambio={this.cambio}/>
            <span><i className="fa fa-long-arrow-down" aria-hidden="true"></i></span>
          </div>
        );
      }else{
        return (
          <div className="contenedorItem">
            <ItemLista key={i} user={t} cambio={this.cambio}/>
          </div>
        );        
      }
    });
  }

  render(){
    return(
        <div id="lista">
          {this.renderItems()}
        </div>
      );
  }
}


Lista.PropTypes={
  consultas:PropTypes.object.isRequired
};


export default Lista;