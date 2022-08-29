'use strict'

import { NextPage } from "next";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Web3Address, Web3Button } from '../components'

const WalletConnect: NextPage = function () {

	return (
		<div className={styles.container}>
			<Head>
				<title>Connect to the wallet</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Dapp Demo
				</h1>
				<Web3Address />
				<div className={styles.grid}>
					<Web3Button />
					{/* <button className={styles.card} onClick={getBalance}> */}
					{/* <p>Get Balance</p> */}
					{/* </button> */}
				</div>
				<h3>
					To work with NFT's, go to the next  <a href='nftPage'>page</a>
				</h3>
			</main>
		</div>
	)
}

export default WalletConnect