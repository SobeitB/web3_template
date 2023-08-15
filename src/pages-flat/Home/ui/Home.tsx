import { CounterZustand } from 'features/zustandTest';
import { HomeStyle } from './Home.module.scss';
import { ConnectWallet } from 'entities/User';
import { List } from 'features/JestTest';

export const Home = () => {
  return (
    <div className={HomeStyle}>
      <h1>Home Page</h1>
      <ConnectWallet />
      <CounterZustand />
      <List items={['css', 'html', 'js']} />
    </div>
  );
};
