import { Profile } from "components/Profile/Profile.jsx";
import { Statistics } from "./Statistics/Statistics.jsx";
import { FriendList } from "./FriendList/FriendList.jsx";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory.jsx";
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';
import css from './App.module.css'

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} 
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  );
};

