import React from 'react';

const Region = (props) => {
	const pokeList = props.rand.map((poke, index) => 
		<img
			key={index}
			value={poke.name}
			src={poke.front}
			className={`pokeImg${index}`}
			alt=''
			onClick={() => props.selectWildPoke(poke)}>
		</img>
	) 

	return (
		<div
			className='region'
			id={props.name}>
			{pokeList}
		</div>
	)	
}

export default Region;