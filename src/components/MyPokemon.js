import React from 'react';
import PokeIcon from './PokeIcon';
import { Segment } from 'semantic-ui-react';
import { Card, Button } from 'semantic-ui-react';
import '../stylesheets/userConsole.css';

const MyPokemon = (props) => {
	const mapMyPoke = props.filteredPoke.map((poke, index) => 
		<PokeIcon
			key={index}
			poke={poke}
			selectMyPoke={props.selectMyPoke}
			mainPoke={props.mainPoke} />
	)

	return(
		<Segment.Group id='left-container'>
			<Segment compact>
				<h3 className="labels">{props.currentUser.name}'s Pokemon</h3>
			</Segment>

			<Segment compact id='myPokemon'>
				<div id='button-box'>
					<Button
						compact
						inverted color='orange'
						onClick={props.filterByRegion}
						name='all'>
						ALL
					</Button>

					<Button
						compact
						inverted color='orange'
						onClick={props.filterByRegion}
						name='kanto'>
						KANTO
					</Button>

					<Button
						compact
						inverted color='orange'
						onClick={props.filterByRegion}
						name='johto'>
						JOHTO
					</Button>

					<Button
						compact
						inverted color='orange'
						onClick={props.filterByRegion}
						name='hoenn'>
						HOENN
					</Button>

					<Button
						compact
						inverted color='orange'
						onClick={props.filterByRegion}
						name='sinnoh'>
						SINNOH
					</Button>
				</div>

				<Card.Group
					id='my-poke-box'
					itemsPerRow={5}>
					{mapMyPoke}
				</Card.Group>
			</Segment>
		</Segment.Group>
	)
}

export default MyPokemon;