import React, { useState, useEffect } from 'react';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


function App()  {
	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchField] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(users=> setRobots(users))
	}, [])

	const onSearchUpdtae = (event) => {
		setSearchField(event.target.value);
	}

	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
	})

	return !robots.length ?
		<h1>Loading</h1> :
		(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox 
					searchUpdate={onSearchUpdtae}
					searchfield={searchfield}
				/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots} />
					</ErrorBoundry>
				</Scroll>
			</div>
		)
}
	
export default App