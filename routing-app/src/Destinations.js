import React, { Component } from 'react';
import axios from 'axios';

class Destination extends Component {

	constructor() {
		super();
		this.state = {
			destinations: []
		}
		axios.get("/destinations").then(function(response){
			this.setState({destinations:response.date})
		}.bind(this))
	}
	render() {
		let destinations = this.state.destinations.map(function(destination){
			return (
				<div>
					<div><img src={destination.img_url} alt=""/></div>
					<div>{destination.name}</div>
					<div>{destination.description}</div>
				</div>
			)
		})
		return <div>{destinations}</div>
	}

}

export default Destination;