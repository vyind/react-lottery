import React from "react";

function Header(props) {
	const HEADER = "ETH-Lottery";
	const MANAGER_INFO = "This lottery is maintained by ";
	return (
		<div>
			<div>
				<h1>{HEADER}</h1>
			</div>
			<div>
				<h3>
					{MANAGER_INFO}
					{props.manager}
				</h3>
			</div>
		</div>
	);
}

export default Header;
