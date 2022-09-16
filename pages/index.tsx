'use strict'

import Head from 'next/head'
import { NextPage } from 'next'
import { Web3Address, Web3Button, MintNft, TransferNft } from '../components'

const Home: NextPage = function () {
  return (
    <div className='container lg mt-10'>
      <main >
        <h1 className='text-4xl text-center font-bold'>
          Dapp Demo
        </h1>
        <h2 className='text-2xl text-center leading-looses'>
          In this demo you will connect to Goerli test network using Metamask/WalletConnect. <br />
          Make sure to connect to Goerli test network.
        </h2>
        <div className='grid grid-cols-3 mt-10'>
          <div className='content-center'>
            <Web3Address />
            <Web3Button />
          </div>
          <div>
            <MintNft />
          </div>
          <div>
            <TransferNft />
          </div>
        </div>
      </main>
    </div>
  )

}

export default Home