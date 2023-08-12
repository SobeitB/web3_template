'use client';
import { HomeStyle } from './Home.module.scss';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const Home = () => {
  return (
    <div className={HomeStyle}>
      <ConnectButton />
    </div>
  );
};
