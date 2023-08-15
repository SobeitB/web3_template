import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const walletConnectId = process.env.NEXT_PUBLIC_RAINBOW_PROJECT_ID ?? '';
const ALCHEMY_ID = process.env.NEXT_PUBLIC_ALCHEMY_ID ?? '';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider(), alchemyProvider({ apiKey: ALCHEMY_ID })]
);

const { connectors } = getDefaultWallets({
  appName: 'Template web3',
  chains,
  projectId: walletConnectId
});

export const configWagmi = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient
});

export { chains };
