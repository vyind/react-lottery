import web3 from "./web3";
import settings from "./settings";

const address = settings.address;
const abi = [
	{ inputs: [], stateMutability: "nonpayable", type: "constructor" },
	{ inputs: [], name: "enter", outputs: [], stateMutability: "payable", type: "function" },
	{
		inputs: [],
		name: "getPlayers",
		outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [],
		name: "manager",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [],
		name: "pickWinner",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		name: "players",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [],
		name: "randomGenerator",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [{ internalType: "address payable", name: "winner", type: "address" }],
		name: "sendMoney",
		outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
		stateMutability: "nonpayable",
		type: "function"
	}
];

export default new web3.eth.Contract(abi, address);
