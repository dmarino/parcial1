import React, { Component } from 'react';
import './App.css';
import Inicio from "./Inicio.js";
import Lista from "./Lista.js";
import Menu from "./Menu.js";
import Usuario from "./Usuario.js";
import ListaSeguidores from "./ListaSeguidores.js";

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
    });
  }

  cambio = (user) => {
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
    });
  }

  cerrar = (user) => {
    console.log("entra");
    fetch("/consultas",{method:"POST", headers:{accept:"application/json",'Content-Type': 'application/json'},
            body: JSON.stringify({consultas:this.state.consultas})}
    )
    .then((resp)=>{
      this.setState({
        consultas: [],
        inicio: true
      });
    });
  }

  buscar = () =>{
    fetch("/consultas", {method:"GET", headers:{accept:"application/json"}})
    .then((res) =>{
      if (res.ok)
        return res.json();
    })
    .then((resp)=>{
      console.log(resp);
    });    
  }  

  render() {
    return (
      <div className="App">
        {this.state.inicio ? <Inicio ok={this.ok} /> : null}
        {this.state.inicio ? null:
          <div className="row">
            <Lista consultas={this.state.consultas}  cambio={this.cambio}/>
            <div className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                <Menu cerrar={this.cerrar} buscar={this.buscar}/>
                <Usuario user={this.state.user}/>
                <ListaSeguidores followers={this.state.followers} cambio={this.cambio}/>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default App;