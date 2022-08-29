'use strict'

import Web3Modal from 'web3modal'
import { useCallback, useEffect, useReducer } from 'react'
import { ethers  } from 'ethers'
import { providerOptions } from '../utility/providerOptions'
import { Web3Action, Web3State, web3InitialState, web3Reducer } from '../reducers'

let web3Modal: Web3Modal
if (typeof window !== 'undefined') {
	web3Modal = new Web3Modal({
		cacheProvider: true,
		providerOptions, // required
		theme: 'dark'
	})
}

export function useWeb3() {
	const [state, dispatch] = useReducer(web3Reducer, web3InitialState)
	const { provider, web3Provider, address, network, balance } = state

	const connect = useCallback(async function () {
		if (web3Modal) {
			try {
				const provider = await web3Modal.connect();
				const web3Provider = new ethers.providers.Web3Provider(provider)
				const accounts = await web3Provider.listAccounts()
				const network = await web3Provider.getNetwork()
				const address = accounts[0]
				const balance = await web3Provider.getBalance(address)

				dispatch({
					type: 'SET_WEB3_PROVIDER',
					provider,
					web3Provider,
					address,
					balance,
					network
				} as Web3Action)
			} catch (error) {
				console.log(`connection error ${error}`)
			}
		} else {
			console.error(`No web3modal`)
		}
	}, [])

	const disconnect = useCallback(async function () {
		if (web3Modal) {
			web3Modal.clearCachedProvider()
			if (provider?.disconnect && typeof provider.disconnect === 'function') {
				await provider.disconnect()
			}
			dispatch({
				type: 'RESET_WEB3_PROVIDER'
			} as Web3Action)
		} else {
			console.error(`No web3modal`)
		}
	}, [])

	useEffect(function () {
		if (web3Modal && web3Modal.cachedProvider) {
			connect()
		}
	}, [connect])

	useEffect(function () {
		if (provider?.on) {
			const handleAccountsChanged = function (accounts: string[]) {
				dispatch({
					type: 'SET_ADDRESS',
					address: accounts[0]
				} as Web3Action)
			}

			const handleChainChanged = function (_hexChainId: string) {
				if (typeof window !== undefined) {
					console.log(`switched to chain ${_hexChainId}`)
					window.location.reload()
				} else {
					console.log(`window is undefined`)
				}
			}

			const handleDisconnect = function (error: { code: number, message: string }) {
				console.log(`diconnected`)
				disconnect()
			}

			provider.on('accountsChanged', handleAccountsChanged)
			provider.on('chainChanged', handleChainChanged)
			provider.on('disconnect', handleDisconnect)

			return function () {
				if (provider.removeListener) {
					provider.removeListener('accountsChanged', handleAccountsChanged)
					provider.removeListener('chainChanged', handleChainChanged)
					provider.removeListener('disconnect', handleDisconnect)
				}
			}
		}
	}, [provider, disconnect])

	return {
		provider,
		web3Provider,
		address,
		balance,
		network,
		connect,
		disconnect
	} as Web3State
}