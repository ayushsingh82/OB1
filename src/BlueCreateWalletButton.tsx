import React, { useCallback } from 'react';
import { useConnect } from 'wagmi';
import { CoinbaseWalletLogo } from './CoinbaseWalletLogo';
import { CSSProperties } from 'react';  // Import CSSProperties type

// Define the button styles and cast them to CSSProperties
const buttonStyles: CSSProperties = {
  background: 'transparent',
  border: '1px solid transparent',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 200,
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'bold',
  fontSize: 18,
  backgroundColor: '#0052FF',
  paddingLeft: 15,
  paddingRight: 30,
  borderRadius: 10,
};

export function BlueCreateWalletButton() {
  const { connectors, connect } = useConnect();

  const createWallet = useCallback(() => {
    const coinbaseWalletConnector = connectors.find(
      (connector) => connector.id === 'coinbaseWalletSDK'
    );
    if (coinbaseWalletConnector) {
      connect({ connector: coinbaseWalletConnector });
    }
  }, [connectors, connect]);

  return (
    <button style={buttonStyles} onClick={createWallet}>
      <CoinbaseWalletLogo />
      Create Wallet
    </button>
  );
}
