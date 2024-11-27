import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';


// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

function ConnectWallet() {
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <WalletMultiButton className=''/>
          </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default ConnectWallet
