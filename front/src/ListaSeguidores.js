import React, { Component } from 'react';
import PropTypes from "prop-types";
import Follower from "./Follower.js";

class ListaSeguidores extends Component {

  cambio = (user) =>{
    this.props.cambio(user);
  }

  renderUsuarios(){
    console.log("entra");
    return this.props.followers.map((t,i)=>{
      return (<Follower key={i} user={t} cambio={this.cambio}/>);
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