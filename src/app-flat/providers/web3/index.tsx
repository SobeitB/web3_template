'use client';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { useState, useEffect } from 'react';
import { WagmiConfig } from 'wagmi';

import { chains, configWagmi } from 'shared/config/blockchain';
import { SharedProps } from 'shared/config/type';

export function ProvidersWeb3({ children }: SharedProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <WagmiConfig config={configWagmi}>
      <RainbowKitProvider chains={chains}>
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
