import React, { Component } from 'react';
import './App.css';
import Inicio from "./Inicio.js";
import Lista from "./Lista.js";

class App extends Component {

  state = {
    consultas:[],
    consultasHistorial:[],
    user:{},
    inicio:true
  }

  ok = (user) => {
    fetch("/info/"+user, {method:"GET", headers:{accept:"application/json"}})
    .then((res) =>{
      if (res.ok)
        return res.json();
    })
    .then((resp)=>{
      this.state.consultas.push(resp.user);
      this.setState({
        user: resp.user,
        followers:resp.followers,
        consultas: this.state.consultas,
        inicio: false
      });
      console.log(this.state.consultas);
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.inicio ? <Inicio ok={this.ok} /> : null}
        {this.state.inicio ? null:
          <div>
            <Lista consultas={this.state.consultas}/>
            <div id="followers">
          </div>
          </div>
        }
      </div>
    );
  }
}

export default App;