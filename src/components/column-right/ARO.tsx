import { FC } from 'react';
import ChosenBetOddsAro from './ChosenBetOddsAro';
import RowChosenBet from './RowChosenBet';

interface AROProps {
  chosenBets: chosenBet[];
  edit: boolean;
}

const ARO: FC<AROProps> = ({ chosenBets, edit }) => {
  return (
    <>
      {chosenBets.map((chosenBet, idx) => {
        return (
          <RowChosenBet
            idx={idx}
            edit={edit}
            {...chosenBet}
            key={chosenBet.betId}
          >
            <ChosenBetOddsAro chosenOdds={chosenBet.chosenOdds} />
          </RowChosenBet>
        );
      })}
    </>
  );
};
export default ARO;
