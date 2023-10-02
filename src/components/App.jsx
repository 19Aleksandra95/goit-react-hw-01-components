import { Profile }   from './Profile';
import { Layout } from './Layout/Layout';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';


import user from '../data/user.json'
import stats from '../data/data.json'
import friends from '../data/friends.json'
import items from '../data/transactions.json'



export const App = () => {
  return (
    <Layout>
      <Profile user={user}/>
      <Statistics stats={stats} title="Upload Stats"/>
      <FriendList friends={friends}/>
      <TransactionHistory items={items}/>
    </Layout>
  );
};