import { useChosenBetsContext } from '../../context/ChosenBetsProvider';
import { FC, PropsWithChildren } from 'react';

type RowChosenBetProps = chosenBet &
  PropsWithChildren<{ edit: boolean; idx: number }>;

const RowChosenBet: FC<RowChosenBetProps> = ({
  betId,
  opponents,
  edit,
  children,
}) => {
  const { setChosenBets } = useChosenBetsContext() as chosenBetContext;
  return (
    <div className='chosen-bet'>
      <div className='chosen-bet-vs'>
        <span className={`chosen-${opponents[0].chosen}`}>
          {opponents[0].opponentName}
        </span>
        <span className='VS'>-/-</span>
        <span className={`chosen-${opponents[1].chosen}`}>
          {opponents[1].opponentName}
        </span>
      </div>
      {children}
      {edit && (
        <div
          onClick={(e) => {
            e.preventDefault();
            setChosenBets({ type: 'delete', betId: betId });
          }}
          className='chosen-bet-delete'
        >
          <div>X</div>
        </div>
      )}
    </div>
  );
};

export default RowChosenBet;
