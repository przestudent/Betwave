import { FC } from 'react';
import styles from '../../app/user/user-page.module.css';
import Link from 'next/link';
interface YourBetRowProps {
  data: POST_AKOChosenBets | POST_SingleChosenBets;
}

//TODO HERE
const YourBetRow: FC<YourBetRowProps> = ({ data }) => {
  if (data.type === 'AKO') {
    return (
      <>
        <div>
          {data.payload.betData.map((AKObet) => (
            <AKORow {...AKObet} key={AKObet.matchId} />
          ))}
        </div>
        <summary className={styles.summary}>
          <div>
            Amount win: {data.payload.winAmount}
            <span className={styles.dollar}>$</span>
          </div>
          <div>
            Bet Amount: {data.payload.paidAmount}
            <span className={styles.dollar}>$</span>
          </div>
        </summary>
      </>
    );
  } else {
    return (
      <div>
        <h3 className={styles['bet-opponents']}>
          <p>
            <span
              className={
                styles[`bet-opp-chosen-${data.payload.opponents[0].chosen}`]
              }
            >
              {data.payload.opponents[0].opponentName}
            </span>
          </p>
          <span className={styles.vs}> -/- </span>
          <p>
            <span
              className={
                styles[`bet-opp-chosen-${data.payload.opponents[1].chosen}`]
              }
            >
              {data.payload.opponents[1].opponentName}
            </span>
          </p>
        </h3>
        <div className={styles['bet-details']}>
          <div>
            Bet amount:{data.payload.paidAmount}
            <span className={styles.dollar}>$</span>
          </div>
          <div>
            Bet win:{data.payload.winAmount}
            <span className={styles.dollar}>$</span>
          </div>
        </div>
      </div>
    );
  }
};

export default YourBetRow;

type AKORowProps = {
  matchId: string;
  opponents:
    | [
        { chosen: true; opponentName: string; opponentOdds: string },
        { chosen: false; opponentName: string; opponentOdds: string }
      ]
    | [
        { chosen: false; opponentName: string; opponentOdds: string },
        { chosen: true; opponentName: string; opponentOdds: string }
      ];
};

const AKORow: FC<AKORowProps> = ({ matchId, opponents }) => {
  return (
    <>
      <h3 className={styles['bet-opponents']}>
        <p>
          <span className={styles[`bet-opp-chosen-${opponents[0].chosen}`]}>
            {opponents[0].opponentName}
          </span>
        </p>
        <span className={styles.vs}> -/- </span>
        <p>
          <span className={styles[`bet-opp-chosen-${opponents[1].chosen}`]}>
            {opponents[1].opponentName}
          </span>
        </p>
      </h3>
      <div className={styles['bet-details']}>
        <div>
          Winner odds:{' '}
          <span className={styles.dollar}>
            {opponents[0].chosen
              ? opponents[0].opponentOdds
              : opponents[1].opponentOdds}
          </span>
        </div>
      </div>
    </>
  );
};
