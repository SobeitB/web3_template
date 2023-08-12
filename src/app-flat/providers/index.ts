'use client';
import { compose } from 'shared/lib/compose';
import { WagmiWrapper } from './with-wagmi';
import { RainbowWrapper } from './with-rainbow';

// export const ProvidersApplication = compose(WagmiWrapper, RainbowWrapper);
export { ProvidersApplication } from './providers';
