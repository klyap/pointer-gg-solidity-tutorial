import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "./constants";

import abi from "../utils/Keyboards.json"

// Generated when we deployed the contract
const contractAddress = CONTRACT_ADDRESS;
// Copied from artifacts/contracts/Keyboards.sol/Keyboards.json
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        return new ethers.Contract(contractAddress, contractABI, signer);
    } else {
        return undefined;
    }
}