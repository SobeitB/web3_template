import { SharedProps } from 'shared/config/type';
import '@rainbow-me/rainbowkit/styles.css';
import 'app-flat/styles/index.scss';
// import {wrapperBody, mainApp} from 'app-flat/ui';
import { ProvidersWeb3 } from 'app-flat/providers/web3';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'wagmi'
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: SharedProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProvidersWeb3>
          <div className="">
            <main className="">{children}</main>
          </div>
        </ProvidersWeb3>
      </body>
    </html>
  );
}
