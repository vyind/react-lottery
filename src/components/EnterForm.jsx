import React from "react";

function EnterForm(props) {
	const [amount, setAmount] = React.useState("");
	function EnteredAmount(event) {
		setAmount(event.target.value);
	}
	function onEnterButton(event) {
		event.preventDefault();
		props.amountEntered(amount);
	}
	return (
		<div>
			<form onSubmit={onEnterButton}>
				<input type="text" placeholder="Enter an amount" onChange={EnteredAmount} value={amount} />
				<button>Enter</button>
			</form>
		</div>
	);
}

export default EnterForm;
