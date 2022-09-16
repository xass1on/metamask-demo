'use strict'

import React from 'react'
import { useWeb3Context } from '../context'

interface ConnectInterface {
	connect: (() => Promise<void>) | null | undefined
}

interface DisconnectInterface {
	disconnect: (() => Promise<void>) | null | undefined
}

const ConnectButton = function ({ connect }: ConnectInterface) {
	return connect ? (
		<button className='m-auto flex p-0.5 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800' onClick={connect}>
			<span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
				Connect Wallet
			</span>
		</button>
	) : (
		<button className='m-auto flex p-0.5 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
			<span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
				Loading
			</span>
		</button>
	)
}

const DisconnectButton = function ({ disconnect }: DisconnectInterface) {
	return disconnect ? (
		<button className='m-auto flex p-0.5 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800' onClick={disconnect}>
			<span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
				Disconnect
			</span>
		</button>
	) : (
		<button className='m-auto flex p-0.5 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
			<span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
				Loading
			</span>
		</button>
	)
}

// export function Web3Button(props: Web3State) {
// 	const { web3Provider, disconnect, connect } = props
// 	return web3Provider ? (
// 		<DisconnectButton disconnect={disconnect}></DisconnectButton>
// 	) : (
// 		<ConnectButton connect={connect}></ConnectButton>
// 	)
// }

export function Web3Button() {
	const { web3Provider, disconnect, connect } = useWeb3Context()
	return web3Provider ? (
		<DisconnectButton disconnect={disconnect}></DisconnectButton>
	) : (
		<ConnectButton connect={connect}></ConnectButton>
	)
}