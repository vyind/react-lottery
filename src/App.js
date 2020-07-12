import React from "react";
import contract from "./lottery";
import Header from "./components/Header";
import PoolInfo from "./components/PoolInfo";
import EnterForm from "./components/EnterForm";

import web3 from "./web3";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { manager: "", players: 0, amount: 0.0 };
	}
	async componentDidMount() {
		const manager = await contract.methods.manager().call();
		const players = await contract.methods.getPlayers().call();
		const amount = await web3.eth.getBalance(contract.options.address);
		const currentPlayer = await web3.eth.getAccounts();
		console.log(currentPlayer);
		this.setState({
			manager: manager,
			players: players.length,
			amount: amount
		});
	}
	async PlayerEnter(enteredAmount) {
		const newPlayer = await web3.eth.getAccounts();
		console.log(newPlayer);
		// await contract.methods.enter().send({ from: newPlayer[0] });
	}
	render() {
		return (
			<div>
				<Header manager={this.state.manager} />
				<PoolInfo players={this.state.players} amount={this.state.amount} />
				<EnterForm amountEntered={this.PlayerEnter} />
			</div>
		);
	}
}

export default App;
