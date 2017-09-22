import React, { Component } from 'react';

export default class ElementoCarga extends Component {

  carga = () =>{
    this.props.carga(this.props.consulta.id);
  }


  render() {
    return (
      <div onClick={this.carga}>
        <p>this.props.consulta.hora</p>
      </div>
    );
  }
}
