import React, { Component } from "react";
import Scroll from './Scroll';
import CardList from './CardList';
import SearchBox from "./SearchBox";
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfieald: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(users=> this.setState({ robots: users }))
	}

	onSearchUpdtae = (event) => {
		this.setState({ searchfieald: event.target.value })
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfieald.toLowerCase())
		})
		if (this.state.robots.length === 0) {
			return <h1>Loading</h1>
		}
		else {
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox 
						searchUpdate={this.onSearchUpdtae}
						searchfieald={this.state.searchfieald}
					/>
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			)
		}
	}
}
	
export default App