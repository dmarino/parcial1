import React, { Component } from 'react';
import PropTypes from "prop-types";
import Usuario from "./Usuario.js";

class ListaSeguidores extends Component {

  constructor(props){
    super(props);
  }

  cambio = (user) =>{
    this.props.cambio(user);
  }

  renderUsuarios(){
    return this.props.followers.map((t,i)=>{
      return (<div className="wrapperSeguidor"><Usuario user={t} cambio={this.cambio}/></div>);
    });
  }

  render(){
    return(
        <div id="listaSeguidores">
          {this.renderUsuarios()}
        </div>
      );
  }
}


ListaSeguidores.PropTypes={
  followers:PropTypes.object.isRequired
};


export default ListaSeguidores;