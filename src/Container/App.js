import React,{Component} from 'react';
import './App.css'
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';

class App extends Component {
	constructor()
	{	super()
		this.state = {
		bots:[],
		searchfield:''
	}
}

componentDidMount() {
	console.log(this.props.store);
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=>response.json())
	.then(users=> {this.setState({bots:users})})
}

onsearchChange = (event) => {
	this.setState({searchfield:event.target.value}); 
}
render() {
	const {bots,searchfield} = this.state;
	const filteredBots = bots.filter(bot=> {
		return bot.name.toLowerCase().includes(searchfield.toLowerCase()); })
	return !bots.length ?
		 <h1>Loading</h1>:  
		(
		   <div className="tc">
			<h1 className="f1">Bot Friends</h1>
			<SearchBox searchChange={this.onsearchChange} />
			<Scroll>
				<CardList bots = {filteredBots} />
			</Scroll>				
		   </div>
		);
}
}
export default App;