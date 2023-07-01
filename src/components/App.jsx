import { Profile } from 'components/Profile/Profile';
import user from './Profile/user';
import { Statistics } from 'components/Statistics/Statistics';
import data from './Statistics/data';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends';
import { TransactionHistory } from './Transactions/TransactionHistory';
import transactions from './Transactions/transactions';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Layout';

export const App = () => {
  return (
    <Container>
      <GlobalStyle/>
      <Profile items={user} />
      <Statistics title="Uploadstats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions}/>
    </Container>
  );
};
