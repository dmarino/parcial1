import React, {Component} from "react";


export default class Search extends Component{
	
	constructor(props){
		super(props);
		this.state={
			user:""
		};
	}


  handleChange = (event) => {
    this.setState({user: event.target.value});
  }

  ok = () =>{
  	this.props.ok(this.state.user);
  }

	render(){
		return(
			<div id="buscador">
			    <input type="text" placeholder="User"  onChange={this.handleChange}></input>
                <button onClick={this.ok}> OK </button>
			</div>
		);
	}


}