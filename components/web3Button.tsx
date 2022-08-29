'use strict'

import React from 'react'
import styles from '../styles/Home.module.css'
import { Web3State } from '../reducers'
import { useWeb3Context } from '../context'

interface ConnectInterface {
	connect: (() => Promise<void>) | null | undefined
}

interface DisconnectInterface {
	disconnect: (() => Promise<void>) | null | undefined
}

const ConnectButton = function ({ connect }: ConnectInterface) {
	return connect ? (
		<button className={styles.card} onClick={connect}>
			<p>Connect Wallet</p>
		</button>
	) : (
		<button className={styles.card}>
			<p>Loading ...</p>
		</button>
	)
}

const DisconnectButton = function ({ disconnect }: DisconnectInterface) {
	return disconnect ? (
		<button className={styles.card} onClick={disconnect}>
			<p>Disconnect</p>
		</button>
	) : (
		<button className={styles.card}>
			<p>Loading ...</p>
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