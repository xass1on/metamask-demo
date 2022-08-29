'use strict'

import Head from 'next/head'
import { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = function () {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Dapp Demo
        </h1>
        <h2>
          In this demo you will connect to blockchain using Metamask/WalletConnect
        </h2>
        <h3>
          To connect, go to the next <a href='walletConnect'>page</a>
        </h3>
      </main>
    </div>
  )

}

export default Home