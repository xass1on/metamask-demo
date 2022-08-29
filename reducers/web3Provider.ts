'use strict'

import { BigNumber, ethers } from 'ethers'

export type Web3State = {
	provider: any
	web3Provider: ethers.providers.Web3Provider | undefined
	address: string | null | undefined
	balance: BigNumber | null | undefined
	network: ethers.providers.Network | null | undefined
	connect: (() => Promise<void>) | null
	disconnect: (() => Promise<void>) | null
}

export const web3InitialState: Web3State = {
	provider: null,
	web3Provider: undefined,
	address: null,
	balance: null,
	network: null,
	connect: null,
	disconnect: null
}

export type Web3Action =
	| {
		type: 'SET_WEB3_PROVIDER',
		provider?: Web3State['provider'],
		web3Provider?: Web3State['web3Provider'],
		address?: Web3State['address'],
		balance?: Web3State['balance']
		network?: Web3State['network']
	}
	| {
		type: 'SET_ADDRESS',
		address?: Web3State['address']
		balance?: Web3State['balance']
	}
	| {
		type: 'SET_NETWORK',
		network?: Web3State['network']
	}
	| {
		type: 'RESET_WEB3_PROVIDER'
	}

export function web3Reducer(state: Web3State, action: Web3Action): Web3State {
	switch (action.type) {
		case 'SET_WEB3_PROVIDER':
			return {
				...state,
				provider: action.provider,
				web3Provider: action.web3Provider,
				address: action.address,
				balance: action.balance,
				network: action.network
			}
		case 'SET_ADDRESS':
			return {
				...state,
				address: action.address
			}
		case 'SET_NETWORK':
			return {
				...state,
				network: action.network
			}
		case 'RESET_WEB3_PROVIDER':
			return web3InitialState
		default:
			throw new Error()
	}
}