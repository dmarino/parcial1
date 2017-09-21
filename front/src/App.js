import React, { Component } from 'react';
import './App.css';
import Search from "./Search.js";

class App extends Component {

  state = {
    consultas:[],
    user:"",
    users:[]
  }

  ok = (user) => {
    fetch("/followers/"+user, {method:"GET", headers:{accept:"application/json"}})
    .then((res) =>{
      if (res.ok)
        return res.json();
    })
    .then((resp)=>{
      console.log(resp);
      this.setState({
        users:resp
      });
    });
    console.log(this.state.users);
  }


  handleChange = (event) => {
    this.setState({user: event.target.value});
  }


  render() {
    return (
      <div className="App">
        <h1>Prueba</h1>
        <Search ok= {this.ok}/>
      </div>
    );
  }
}

export default App;