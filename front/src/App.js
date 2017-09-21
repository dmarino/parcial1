import React, { Component } from 'react';
import './App.css';
import Search from "./Search.js";

class App extends Component {

  state = {
    consultas:[],
    user:{},
    followers:[]
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
        followers:resp.followers
      });
    });
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