import { FC } from 'react';
import RowChosenBet from './RowChosenBet';
import ChosenBetOddsSingle from './ChosenBetOddsSingle';

interface SingleProps {
  chosenBets: chosenBet[];
  edit: boolean;
}

const Single: FC<SingleProps> = ({ chosenBets, edit }) => {
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
            <ChosenBetOddsSingle
              idx={idx}
              fighterOdds={chosenBet.chosenOdds}
              matchId={chosenBet.matchId}
              chosenOdds={chosenBet.chosenOdds}
            />
          </RowChosenBet>
        );
      })}
    </>
  );
};
export default Single;
