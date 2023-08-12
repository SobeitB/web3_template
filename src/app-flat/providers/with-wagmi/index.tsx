import { configWagmi } from 'shared/config/blockchain';
import { SharedProps } from 'shared/config/type';
import { WagmiConfig } from 'wagmi';

export const WagmiWrapper = ({ children }: SharedProps) => {
  return <WagmiConfig config={configWagmi}>{children}</WagmiConfig>;
};
