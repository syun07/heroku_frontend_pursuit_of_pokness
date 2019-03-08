import React from 'react';
import { Card } from 'semantic-ui-react';
import '../stylesheets/PokeStats.css';

const Profile = (props) => {
	const { name, image, pokemons } = props.currentUser	  
	
	return (
		<Card className='pokeCard'>
			<div>
				<img className='pokeCardImg' src={image} alt='' />
			</div>
		
			<div className='pokeCardContent'>
				<div>
					<h4 className="profile-text">{name.toUpperCase()}</h4>
				</div>
				
				<br />
				
				<div>
					<p><strong># OF POKEMON: {pokemons.length}</strong></p>
				</div>
			</div>
		</Card>
	)
}

export default Profile;