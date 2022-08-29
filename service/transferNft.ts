'use strict'

import { ethers } from 'ethers'
import { TransactionResponse, TransactionReceipt } from '@ethersproject/abstract-provider'
import abi from '../utility/abiJson'

export async function transferNFT(web3Provider: ethers.providers.Web3Provider | undefined, toAddress: string | undefined, nftID: number | undefined) {

	const signer = web3Provider?.getSigner()
	const contract = new ethers.Contract('0x16903e139940cf402a9ae26963be5231343464e4', abi, signer)
	const fromAddress = await signer?.getAddress()
	const transactionResponse: TransactionResponse = await contract.transferFrom(fromAddress, toAddress, nftID)
	const receipt: TransactionReceipt = await transactionResponse.wait()
	const events = await contract.queryFilter(contract.filters.Transfer(), receipt.blockNumber, receipt.blockNumber)
	console.log(`NFT transfer from ${events[0].args?.from} to ${events[0].args?.to}; nftId: ${parseInt(events[0].args?.tokenId)}`)
	const hash = transactionResponse.hash || 'transactionHash'
	return hash
}