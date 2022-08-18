import WalletConnect from "@walletconnect/web3-provider";

export const providerOptions = {
  walletconnect: {
    package: WalletConnect, // required
    options: {
      infuraId: 'd26f67a11efa4b9f930ebded9b620be9' // required
    }
  }
};
