import React from 'react';
import Profile from './Profile';
import PokeStats from './PokeStats';
import Fight from './Fight';
import CatchSuccess from './CatchSuccess';
import CatchFail from './CatchFail';
import ChoosePoke from './ChoosePoke';
import { Segment } from 'semantic-ui-react';

const MagicContainer = (props) => {    
	const profile =
		<Profile 
			currentUser={props.currentUser} />

	const pokeStats =
		<PokeStats
			selectedPoke={props.selectedPoke}
			wild={props.wild}
			makeMain={props.makeMain} 
			catchPoke={props.catchPoke} />
	
	const fight =
		<Fight
			selectedPoke={props.selectedPoke}
			mainPoke={props.mainPoke} 
			pokeFate={props.pokeFate} />
	
	const success =
		<CatchSuccess
			selectedPoke={props.selectedPoke} />
	
	const fail =
		<CatchFail
			selectedPoke={props.selectedPoke} />
	
	const choose = 
		<ChoosePoke 
			mainPoke={props.mainPoke} />

	let renderMe

	if (props.renderMe === 'profile') {
		renderMe = profile 
	} else if (props.renderMe === 'stats') {
		renderMe = pokeStats 
	} else if (props.renderMe === 'fight') {
		renderMe = fight
	} else if (props.renderMe === 'success') {
		renderMe = success
	} else if (props.renderMe === 'fail') {
		renderMe = fail
	} else if (props.renderMe === 'choose') {
		renderMe = choose
	}

	let renderTitle

	if (props.renderMe === 'profile') {
		renderTitle = 'profile' 
	} else if (props.renderMe === 'stats') {
		renderTitle = 'pokemon information' 
	} else if (props.renderMe === 'fight') {
		renderTitle = 'good luck!'
	} else if (props.renderMe === 'success') {
		renderTitle = 'yay!'
	} else if (props.renderMe === 'fail') {
		renderTitle = 'oh no!'
	} else if (props.renderMe === 'choose') {
		renderTitle = 'good choice!'
	}

	return (
		<Segment.Group className="magicCont">
			<Segment compact >
				<h3 className="labels">{renderTitle}</h3>
			</Segment>
			
			<Segment id='magic'>
				{renderMe}
			</Segment>
		</Segment.Group>
	)
}

export default MagicContainer;