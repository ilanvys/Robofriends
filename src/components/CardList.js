import React from 'react';
import Card from "./Card";
import { MagicMotion } from "react-magic-motion";

const CardList = ({ robots }) => {
	return (
		<MagicMotion>
			<div>
				{
					robots.map((user) => {
						return <Card 
							key={user.id} 
							id={user.id} 
							name={user.name} 
							email={user.email}
							/>
					})
				}
			</div>
		</MagicMotion>
	)
}
	
export default CardList