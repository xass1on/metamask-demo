'use strict'

import React from 'react'
import { ethers } from 'ethers'
import { useWeb3Context } from '../context'

export function Web3Address() {
	const { address, balance } = useWeb3Context()
	return balance ? (
		<h2>
			Wallet address: {address} and balance {ethers.utils.formatEther(balance)}
		</h2>
	) : (
		<h2>
			Not Connected
		</h2>
	)
}