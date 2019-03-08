import React from 'react';
import { Card } from 'semantic-ui-react';
import '../stylesheets/PokeStats.css';

const ChoosePoke = (props) => {
	return (
		<Card id='choose-card' className='pokeCard'>
			<div>
				<img className='pokeCardImg' src={props.mainPoke.front} alt='' />
			</div>

			<div className='pokeCardContent'>
				<h3 className='header'>
					I CHOOSE YOU, {props.mainPoke.name.toUpperCase()}!
				</h3>
			</div>
		</Card>
	)
}

export default ChoosePoke;