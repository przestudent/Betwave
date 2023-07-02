import { FC } from 'react';

const ChosenBetOddsAro: FC<{ chosenOdds: number }> = ({ chosenOdds }) => {
  return <div className='row-chosen-bet-chosen-odds'>{chosenOdds}x</div>;
};

export default ChosenBetOddsAro;
