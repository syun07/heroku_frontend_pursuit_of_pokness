import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import '../stylesheets/PokeStats.css';

const PokeStats = (props) => {
	const { name, hp, front, region, kind } = props.selectedPoke

	return (
		<Card className='pokeCard'>
			<div>
				<img className='pokeCardImg' src={front} alt='' />
			</div>
			
			<div className='pokeCardContent'>
				<div>
					<h3 className="header">{name.toUpperCase()}</h3>
				</div>
				
				<div>
					<p className="header"><strong>REGION: </strong> {region.toUpperCase()}</p>
				</div>

				<div>
					<p className="header"><strong>TYPE: </strong> {kind.toUpperCase()}</p>
				</div>
				
				<div className="extra content">
					<i className="icon heartbeat red" />
					{hp}
				</div>
				
				<br />

				{props.wild ?
					<Button compact
						id='choose-catch'
						color='green'
						onClick={props.catchPoke}>
						CATCH
					</Button> 
					:
					<Button compact
						id='choose-catch'
						color='green'
						onClick={() => props.makeMain(props.selectedPoke)}>
						CHOOSE ME
					</Button> 
				}
			</div>
		</Card>
	)
}

export default PokeStats;