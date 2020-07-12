import React from "react";

function PoolInfo(props) {
	const PLAYERS_PRESENT = "Number of players present: ";
	const POOL_AMOUNT = "Total amount of ether to be won: ";
	return (
		<div>
			<div>
				{PLAYERS_PRESENT}
				<span>{props.players}</span>
			</div>
			<div>
				{POOL_AMOUNT}
				<span>{props.amount} eth</span>
			</div>
		</div>
	);
}

export default PoolInfo;
