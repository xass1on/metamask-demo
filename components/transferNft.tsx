'use strict'
import { useState } from 'react'
import { useWeb3Context } from '../context'
import { transferNFT } from '../service'

interface transferNft {
	toAddress?: string | undefined
	id?: number | undefined
}
export function TransferNft() {
	const web3 = useWeb3Context()
	const [formBody, setFormBody] = useState<transferNft>()
	const [transferTxHash, setTransferTxHash] = useState<string>()

	async function transferNft(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const txHash = await transferNFT(web3.web3Provider, formBody?.toAddress, formBody?.id)
		setTransferTxHash(txHash)
	}

	function handleFormChange(event: React.FormEvent<HTMLInputElement>) {
		setFormBody({
			...formBody,
			[event.currentTarget.id]: event.currentTarget.value
		})
	}

	return web3.web3Provider ? (
		<div>
			<h2 className='text-xl text-blue-600 text-center'>Transfer minted NFT</h2>
			{transferTxHash ? (
				<h4>Transfer NFT Transaction Hash {transferTxHash}</h4>
			) : (<h4></h4>)}
			<form onSubmit={transferNft}>
				<div className='mb-6'>
					<label htmlFor='toAddress' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>To Address</label>
					<input className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' type='text' id='toAddress' onChange={handleFormChange} placeholder='0x0000000000000000000000000000000000000000' required></input>
				</div>
				<div>
					<label htmlFor='id' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>NFT ID</label>
					<input className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' type='number' id='id' onChange={handleFormChange} placeholder='1' required></input>
				</div>
				<button
					className='Form_button mt-5 flex p-0.5 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
					disabled={formBody === undefined ? true : false}
					type='submit'
				>
					<span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
						Transfer
					</span>
				</button>
			</form>
		</div>
	) : (<h2 className='text-xl text-red-600 text-center'>Transfer minted NFT after you connect</h2>)
}