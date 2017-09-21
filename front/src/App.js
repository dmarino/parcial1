import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    user:""
  }

componentDidMount(){

  //fetch("/users", {method:"GET", headers:{accept:"application/json"}})
    //.then((res) =>{
      //if (res.ok)
        //return res.json();
   // })
    //.then((resp)=>{
      //this.setState({
        //users:resp
      //});
    //});
}


  ok = () => {
  fetch("/followers/"+this.state.user, {method:"GET", headers:{accept:"application/json"}})
  .then((res) =>{
      if (res.ok)
        console.log(res);
   })
  .then((resp)=>{
      console.log(resp);
      this.setState({
        users:resp
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
        <input type="text" placeholder="Alias"  onChange={this.handleChange}></input>
        <button onClick={this.ok}> OK </button>
      </div>
    );
  }
}

export default App;