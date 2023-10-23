import React, { Component } from "react";
import CardList from './CardList';
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchfieald: ''
		}
	}

	onSearchUpdtae = (event) => {
		this.setState({ searchfieald: event.target.value })
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfieald.toLowerCase())
		})
		
		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox 
					searchUpdate={this.onSearchUpdtae}
					searchfieald={this.state.searchfieald}
				/>
				<CardList robots={filteredRobots} />
			</div>
		)
	}
}
	
export default App