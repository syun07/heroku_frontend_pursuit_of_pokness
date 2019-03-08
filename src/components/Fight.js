import React from 'react';
import { Grid, Card, Button } from 'semantic-ui-react';
import '../stylesheets/userConsole.css';

const Fight = (props) => { 
	return (
		<Card.Group>
			<Card fluid id='fightcard'>
				<Grid id='fightgrid' columns='equal'>
					<Grid.Row stretched>
						
						<Grid.Column>
						</Grid.Column>
						
						<Grid.Column>
							<img src={props.selectedPoke.front} alt=''/>
						</Grid.Column>

					</Grid.Row>

					<Grid.Row stretched>
						
						<Grid.Column>
							<img src={props.mainPoke.back} alt=''/>
						</Grid.Column>
						
						<Grid.Column>
							<div>
								<Button id='catch-btn' color='green' onClick={props.pokeFate}>
									CATCH {props.selectedPoke.name.toUpperCase()}
								</Button>
							</div>
						</Grid.Column>

					</Grid.Row>
				</Grid>
			</Card>
		</Card.Group>
	)
}

export default Fight;