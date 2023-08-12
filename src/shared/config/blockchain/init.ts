import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ALCHEMY_ID, RAINBOW_PROJECT_ID } from '../constants';

export const currentChains = [mainnet];

export const { chains, publicClient } = configureChains(currentChains, [
  //  process.env.ALCHEMY_ID
  alchemyProvider({ apiKey: ALCHEMY_ID }),
  publicProvider()
]);

export const { connectors } = getDefaultWallets({
  appName: 'init web3',
  projectId: RAINBOW_PROJECT_ID,
  chains
});

export const configWagmi = createConfig({
  autoConnect: true,
  connectors,
  publicClient
});
