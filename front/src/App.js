import React, { Component } from 'react';
import './App.css';
import Inicio from "./Inicio.js";

class App extends Component {

  state = {
    consultas:[],
    user:{},
    followers:[],
    inicio:true
  }

  ok = (user) => {
    fetch("/info/"+user, {method:"GET", headers:{accept:"application/json"}})
    .then((res) =>{
      if (res.ok)
        return res.json();
    })
    .then((resp)=>{
      this.setState({
        user: resp.user,
        followers:resp.followers,
        inicio: false
      });
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.inicio ? <Inicio ok={this.ok} /> : null}
      </div>
    );
  }
}

export default App;