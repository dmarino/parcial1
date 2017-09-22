import React, { Component } from 'react';
import './Follower.css';

export default class Follower extends Component {

  cambio = () =>{
    this.props.cambio(this.props.user.login);
  }


  render() {
    return (
      <div className="follower" onClick={this.cambio}>
        <img src={this.props.user.avatar_url} alt={this.props.user.login + "avatar"}/>
        <div className="nombre">
          <h4><b>{this.props.user.login}</b></h4>
        </div>
      </div>
    );
  }
}
