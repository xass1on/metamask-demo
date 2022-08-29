'use strict'

import React, { createContext, ReactChild, useContext } from 'react'
import { web3InitialState, Web3State } from '../reducers/web3Provider'
import { useWeb3 } from '../service'


const Web3Context = createContext<Web3State>(web3InitialState)

interface Props {
	children: ReactChild
}

export const Web3ContextProvider = ({ children }: Props) => {
	const web3ProviderState = useWeb3()

	return (
		<Web3Context.Provider value={web3ProviderState}>
			{children}
		</Web3Context.Provider>
	)
}

export function useWeb3Context() {
	return useContext(Web3Context)
}