import React from 'react';

const SearchBox = ({ searchUpdate, searchfieald }) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='search robots'
				onChange={searchUpdate}
			/>
		</div>
	)
}
	
export default SearchBox