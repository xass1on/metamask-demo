'use strict'

import { mintNft } from '../service/index'
import React, { useState } from 'react'
import { useWeb3Context } from '../context'

export function MintNft() {
	const web3 = useWeb3Context()
	const [mintTxHash, setMintTxHash] = useState<string>()
	const [tokenId, setTokenId] = useState<number>()

	async function mintFunction(event: React.MouseEvent) {
		event.preventDefault()
		const { hash, tokenId } = await mintNft(web3.web3Provider)
		setMintTxHash(hash)
		setTokenId(tokenId)
	}

	return web3.web3Provider ? (
		<div>
			<h2 className='text-xl text-blue-600 text-center'>Mint new NFT to your address</h2>
			<button className='m-auto flex p-0.5 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800' onClick={mintFunction}>
				<span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
					Mint NFT To your address
				</span>
			</button>
			{mintTxHash ? (
				<h3>Transaction Hash: {mintTxHash}; NFT ID: {tokenId}</h3>
			) : (<h3></h3>)}
		</div >
	) : (
		<h2 className='text-xl text-red-600 text-center'>Mint new NFT to your address after you connect</h2>
	)
}