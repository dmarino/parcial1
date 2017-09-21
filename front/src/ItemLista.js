import React, { Component } from 'react';
import './ItemLista.css';
import ItemLista from "./ItemLista.js";

export default class Lista extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="item">
          <img src= {this.props.user.avatar_url} width="96" height="96"/>
          <span>{this.props.user.login}</span>
      </div>
    );
  }
}
