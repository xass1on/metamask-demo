'use strict'

import { BigNumber, ethers } from 'ethers'
import { TransactionResponse, TransactionReceipt } from '@ethersproject/abstract-provider'
import abi from '../utility/abiJson'

export async function mintNft(web3Provider: ethers.providers.Web3Provider | undefined) {
	const contract = new ethers.Contract('0x16903e139940cf402a9ae26963be5231343464e4', abi, web3Provider?.getSigner())
	const transactionResponse: TransactionResponse = await contract.mint()
	const receipt: TransactionReceipt = await transactionResponse.wait()
	const events = await contract.queryFilter(contract.filters.Transfer(), receipt.blockNumber, receipt.blockNumber)
	console.log(`NFT transfer from ${events[0].args?.from} to ${events[0].args?.to}; nftId: ${parseInt(events[0].args?.tokenId)}`)
	const hash = transactionResponse.hash || 'asdasdasdasda'
	const tokenId = parseInt(events[0].args?.tokenId) || 1
	return { hash, tokenId }
}