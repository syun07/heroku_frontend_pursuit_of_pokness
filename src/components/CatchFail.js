import React from 'react';
import { Card } from 'semantic-ui-react';
import '../stylesheets/userConsole.css';

const CatchSuccess = (props) => {
	return (
		<Card id='failcard'>
			<h4 id='fail-catch-text'>
				{props.selectedPoke.name.toUpperCase()} FLED
			</h4>
		</Card>
	)
}

export default CatchSuccess;