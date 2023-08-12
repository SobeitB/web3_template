import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { chains } from 'shared/config/blockchain/init';
import { SharedProps } from 'shared/config/type';

export const RainbowWrapper = ({ children }: SharedProps) => {
  return <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>;
};
