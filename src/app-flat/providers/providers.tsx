'use client';

import { useEffect, useState } from 'react';
import { WagmiWrapper } from './with-wagmi';
import { RainbowWrapper } from './with-rainbow';
import { SharedProps } from 'shared/config/type';

export function ProvidersApplication({ children }: SharedProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  // console.log(mounted);
  return (
    <WagmiWrapper>
      <RainbowWrapper>{mounted && children}</RainbowWrapper>
    </WagmiWrapper>
  );
}
