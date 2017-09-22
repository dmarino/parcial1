import React, { Component } from 'react';
import './Usuario.css';

export default class Usuario extends Component {

  cambio = () =>{
    this.props.cambio(this.props.user.login);
  }


  render() {
    return (
      <div id="contenedorUsuario">
        <img src={this.props.user.avatar_url} alt={this.props.user.login + " avatar"}/>
        <h5>{this.props.user.login} ~ followers: {this.props.user.followers}</h5>  
        <p>{this.props.user.bio}</p>    
      </div>
    );
  }
}
