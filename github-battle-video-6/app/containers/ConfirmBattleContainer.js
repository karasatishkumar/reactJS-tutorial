var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var GitHubHelpers = require('../utils/GitHubHelpers');

var ConfirmBattleContainer = React.createClass({
	contextTypes:{
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function(){
		console.log('getInitialState');
		return {
			isLoading: true,
			playerInfo: []
		}
	},
	componentWillMount: function(){
		console.log('componentWillMount');
		var query = this.props.location.query;
		//https://egghead.io/playlists/the-this-key-word-250c37d9
		GitHubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
		.then(function(players){
			this.setState({
				isLoading: false,
				playerInfo: [players[0], players[1]]
			})
		}.bind(this))
	},
	handleInitiateBattle: function(){
		this.context.router.push({
			pathname: '/results',
			state:{
				playerInfo: this.state.playerInfo
			}
		})
	},
	componentDidMount: function(){
		var query = this.props.location.query;
		console.log('componentDidMount');
		// Fetch info from github and update the state
	},
	componentWillReceiveProps: function(){
		console.log('componentWillReceiveProps');
	},
	componentWillUnmount: function(){
		console.log('componentWillUnmount');
	},
	render: function(){
		return(
			<ConfirmBattle isLoading={this.state.isLoading}
			onInitiateBattle={this.handleInitiateBattle}
			playersInfo={this.state.playerInfo}/>
		)
	}
});

module.exports = ConfirmBattleContainer;