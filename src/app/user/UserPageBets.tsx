import YourBetRow from '@/app/user/YourBetRow';
import { FunctionComponent } from 'react';
import styles from './user-page.module.css';

interface UserPageBetsProps {
  AKOBets: POST_AKOChosenBets[];
  SingleBets: POST_SingleChosenBets[];
  userId: string;
}

const UserPageBets: FunctionComponent<UserPageBetsProps> = async ({
  userId,
  AKOBets,
  SingleBets,
}) => {
  // const bets = await fetchBets(userId);
  return (
    <div className={styles['row-bet']}>
      <h4 className={styles['bet-title']}>Single</h4>
      {SingleBets.length > 0 ? (
        SingleBets.map((indBet) => (
          <YourBetRow data={indBet} key={indBet.payload.betId} />
        ))
      ) : (
        <div>No bets Found</div>
      )}
      <h4 className={styles['bet-title']}>AKO</h4>
      {AKOBets.length > 0 ? (
        AKOBets.map((indBet) => (
          <YourBetRow data={indBet} key={indBet.payload.betId} />
        ))
      ) : (
        <div>No bets Found</div>
      )}
    </div>
  );
};

export default UserPageBets;
