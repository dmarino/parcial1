import React, { Component } from 'react';
import './Lista.css';
import PropTypes from "prop-types";
import ItemLista from "./ItemLista.js";

class Lista extends Component {

  cambio = (user) =>{
    this.props.cambio(user);
  }


  renderItems(){
    return this.props.consultas.map((t,i)=>{
      if(i===(this.props.consultas.lengh)-1)
      {
        return (
            <ItemLista key={i} user={t} cambio={this.cambio} flecha={false} />
        );
      }else{
        return (
            <ItemLista key={i} user={t} cambio={this.cambio} flecha={true}/>
        );        
      }
    });
  }

  render(){
    return(
        <div id="lista" className="col-md-3 col-sm-3 col-lg-3 col-xs-3">
          {this.renderItems()}
        </div>
      );
  }
}


Lista.PropTypes={
  consultas:PropTypes.object.isRequired
};


export default Lista;