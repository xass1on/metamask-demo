'use strict'

import React from 'react'
import { ethers } from 'ethers'
import { useWeb3Context } from '../context'

export function Web3Address() {
	const { address, balance, web3Provider } = useWeb3Context()
	return web3Provider?.network.chainId === 5 ? (
		<h2 className='text-l text-blue-600 text-center'>
			Wallet address: {address} and balance {ethers.utils.formatEther(balance ? balance : 0)}
		</h2>
	) : (
		<h2 className='text-xl text-red-600 text-center'>
			You are currently not connected to the wallet
		</h2>
	)
}