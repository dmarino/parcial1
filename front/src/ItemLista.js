import React, { Component } from 'react';
import './ItemLista.css';

export default class ItemLista extends Component {

  cambio = () =>{
    this.props.cambio(this.props.user.login);
  }


  render() {
    return (
      <div className="chip" onClick={this.cambio}>
          <img src={this.props.user.avatar_url} alt={this.props.user.login + " avatar"}/>
          <div className="nameChip"><span>{this.props.user.login}</span></div>
          {this.props.flecha ? null:
            <div className="item">
              <i className="fa fa-long-arrow-down"></i>
            </div>
          }
      </div>
    );
  }
}
