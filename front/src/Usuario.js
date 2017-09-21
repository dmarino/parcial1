import React, { Component } from 'react';
import './Usuario.css';

export default class Usuario extends Component {

  constructor(props){
    super(props);
  }

  cambio = () =>{
    this.props.cambio(this.props.user.login);
  }


  render() {
    return (
      <div className="usuario" onClick={this.cambio}>
        <img src={this.props.user.avatar_url}/>
        <div className="container">
          <h4><b>{this.props.user.login}</b> <a href={this.props.user.html_url} target="_blank"><i className="fa fa-github"></i></a></h4>
        </div>
      </div>
    );
  }
}
