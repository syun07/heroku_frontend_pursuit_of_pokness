import React from 'react';
import { Card } from 'semantic-ui-react';
import '../stylesheets/userConsole.css';

const CatchSuccess = (props) => {
	return (
		<Card id='successcard'>
			<img id='caughtpoke' src={props.selectedPoke.front} alt='' />
			<h4 id='fail-catch-text'>
				YOU CAUGHT {props.selectedPoke.name.toUpperCase()}!
			</h4>
		</Card>
	)
}

export default CatchSuccess;