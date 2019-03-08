import React, { Component } from 'react';
import WildPokemonMap from './containers/WildPokemonMap';
import UserConsole from './containers/UserConsole';
import OpeningPage from './containers/OpeningPage';
import LoadingPika from './containers/LoadingPika';
import { Segment } from 'semantic-ui-react';
import './App.css';

const API = 'http://localhost:3000';

class App extends Component {
	constructor() {
		super();

		this.state = {
			kanto: [],
			johto: [],
			hoenn: [],
			sinnoh: [],
			allPokemon: [],
			kantoRand: [],
			johtoRand: [],
			hoennRand: [],
			sinnohRand: [],
			randoRand: [],
			myPokemonList: [],
			filteredPoke: [],
			selectedPoke: null,
			mainPoke: null,
			wild: null,
			enterPage: 'o',
			renderMe: 'profile',
			currentUser: null,
			name: "",
			password: "",
			newName: "",
			newPassword: "",
			newImage: "",
			load: false
		}
	}

	componentDidMount() {
		fetch(`${API}/pokemons`)
		.then(res => res.json())
		.then(data => {
			let k = data.filter(poke => poke.region === 'kanto')
			let j = data.filter(poke => poke.region === 'johto')
			let s = data.filter(poke => poke.region === 'sinnoh')
			let h = data.filter(poke => poke.region === 'hoenn')

			this.setState({
				kanto: k,
				johto: j,
				sinnoh: s,
				hoenn: h,
				allPokemon: [...k, ...j, ...s, ...h]
			})
		})
	}


	renderRandomPoke = () => {

		// KANTO //
		let kantoNums = []
		for (let i = 1; i < 7; i++) {
			kantoNums.push(Math.floor((Math.random() * 151) + 1))
		}
        
		let newKanto = []
		kantoNums.map(num =>
			newKanto.push(this.state.kanto.find(poke => poke.id === num))
		)
		
		// JOHTO //
		let johtoNums = []
		for (let j = 1; j < 7; j++) {
			johtoNums.push(Math.floor((Math.random() * 100) + 152))
		}
        
		let newJohto = []
		johtoNums.map(num =>
			newJohto.push(this.state.johto.find(poke => poke.id === num))
		)

		// HOENN //
		let hoennNums = []
		for (let k = 1; k < 7; k++) {
			hoennNums.push(Math.floor((Math.random() * 135) + 252))
		}
    
		let newHoenn = []
		hoennNums.map(num =>
			newHoenn.push(this.state.hoenn.find(poke => poke.id === num))
		)
		
		// SINNOH //
		let sinnohNums = []
		for (let s = 1; s < 7; s++) {
			sinnohNums.push(Math.floor((Math.random() * 104) + 387))
		}
        
		let newSinnoh = []
		sinnohNums.map(num =>
			newSinnoh.push(this.state.sinnoh.find(poke => poke.id === num))
		)

		// RANDO //
		let randoNums = []
		for (let p = 1; p < 7; p++) {
			randoNums.push(Math.floor((Math.random() * 490) + 1))
		}
		
		let newRando = []
		randoNums.map(num =>
			newRando.push(this.state.allPokemon.find(poke => poke.id === num))
		)

		this.setState({
			kantoRand: newKanto,
			johtoRand: newJohto,
			hoennRand: newHoenn,
			sinnohRand: newSinnoh,
			randoRand: newRando,
			renderMe: 'profile'
		})
	}
	
	handleLogin = event => {
		event.preventDefault();
		this.getAuthToken({ name: this.state.name, password: this.state.password }).then(payload => {
			if (payload.user) {
				localStorage.setItem("token", payload.token)
				this.setState({
					enterPage: 'p'
				})
				return fetch(`${API}/users/${payload.user.id.toString()}`).then(this.finishLogin)
			} else {
				alert("INVALID LOGIN!")
			}
		})
	}

	getAuthToken(loginInfo) {
		return fetch(`${API}/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(loginInfo)
		}).then(res => res.json())
	}

	finishLogin = (res) => {
		res.json()
		.then(data => {
			setTimeout(() => {
				this.setState({
					myPokemonList: data.pokemons,
					filteredPoke: data.pokemons,
					mainPoke: data.pokemons[0],
					currentUser: data,
					enterPage: 'a'
				})
			}, 3000)
		})
		this.renderRandomPoke()
	}
	
	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSignup = event => {
		event.preventDefault();
		return fetch(`${API}/users`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name: this.state.newName,
				password: this.state.newPassword,
				image: this.state.newImage
			})
		}).then(res => res.json())
	}

	selectWildPoke = (poke) => {
		this.setState({
			selectedPoke: poke,
			wild: true,
			renderMe: 'stats'
		})
	}

	selectMyPoke = (poke) => {
		this.setState({
			selectedPoke: poke,
			wild: false,
			renderMe: 'stats'
		})
	}

	makeMain = (poke) => {
		this.setState({
			renderMe: 'choose',
			mainPoke: poke
		})
	}

	catchPoke = () => {
		this.setState({
			renderMe: 'fight'
		})
	}

	pokeFate = () => {
		let fate = Math.floor((Math.random() * 10) + 1)
		if (fate <= 4) {
			this.renderRandomPoke()
			this.setState({
				renderMe: 'success',
				myPokemonList: [...this.state.myPokemonList, this.state.selectedPoke],
				filteredPoke: [...this.state.myPokemonList, this.state.selectedPoke]
			})
			this.postPoke()
		} else {
			this.renderRandomPoke()
			this.setState({
				renderMe: 'fail'
			})
		}
	} 

	postPoke = () => {
		let userpoke = {user_id: this.state.currentUser.id, pokemon_id: this.state.selectedPoke.id}
		fetch(`${API}/poke_users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(userpoke)
		})
	}

	filterByRegion = event => {
		const filtered = this.state.myPokemonList.filter(pokemon => pokemon.region === event.target.name)
		event.target.name === 'all' ? this.setState({filteredPoke: this.state.myPokemonList}) : this.setState({filteredPoke: filtered})
	}

	reloadPage = () => {
		window.location.reload()
	}

	render() {
		const pika = <Segment id="app"> <LoadingPika /> </Segment>

		const application =
			<Segment id="app">
				<WildPokemonMap
					kantoRand={this.state.kantoRand}
					johtoRand={this.state.johtoRand}
					hoennRand={this.state.hoennRand}
					sinnohRand={this.state.sinnohRand}
					randoRand={this.state.randoRand}
					renderRandomPoke={this.renderRandomPoke}
					selectWildPoke={this.selectWildPoke}
					reloadPage={this.reloadPage} />
				<UserConsole
					selectedPoke={this.state.selectedPoke}
					mainPoke={this.state.mainPoke}
					selectMyPoke={this.selectMyPoke}
					wild={this.state.wild}
					renderMe={this.state.renderMe}
					makeMain={this.makeMain}
					catchPoke={this.catchPoke}
					pokeFate={this.pokeFate}
					currentUser={this.state.currentUser}
					filterByRegion={this.filterByRegion}
					filteredPoke={this.state.filteredPoke} />
			</Segment>
			
		const opening = 
			<Segment>
				<OpeningPage
					handleLogin={this.handleLogin}
					handleSignup={this.handleSignup}
					handleChange={this.handleChange} />
			</Segment>
		
		let showMe 
		
		if (this.state.enterPage === 'o') {
			showMe = opening 
		} else if (this.state.enterPage === 'a') {
			showMe = application
		} else if (this.state.enterPage === 'p') {
			showMe = pika
		}

		return (
			<div>
				{showMe}
			</div>
		)
	}
}

export default App;