import { SharedProps } from 'shared/config/type';
import '../styles/index.scss';
import '@rainbow-me/rainbowkit/styles.css';

import { wrapperBody, mainApp } from './AppWrapper.module.scss';
import { Inter } from 'next/font/google';
import { ProvidersApplication } from 'app-flat/providers';

const inter = Inter({ subsets: ['latin'] });

export const AppWrapper = ({ children }: SharedProps) => {
  return (
    <body className={inter.className}>
      <ProvidersApplication>
        <div className={wrapperBody}>
          <main className={mainApp}>{children}</main>
        </div>
      </ProvidersApplication>
    </body>
  );
};
