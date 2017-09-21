import React, {Component} from "react";
import './Inicio.css';
import Search from "./Search.js";

export default class Inicio extends Component{
	
	constructor(props){
		super(props);
	}

	ok = (user) =>{
  	    this.props.ok(user);
    }	

	render(){
		return(
			<div id="inicio">
			    <div id="modalconent">
			    	<h1>¡Bienvenido a mi primer parcial de programacion con tecnologias web!</h1>
			        <p>Esta aplicacion funciona como un buscador de seguidores de usuarios de github</p>
			        <p>para iniciar teclee el nombre del primer usuario de Github</p>			    
			        <Search ok={this.ok}/>
			    </div>
			</div>
		);
	}


}