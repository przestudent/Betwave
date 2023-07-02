import { FunctionComponent } from 'react';
import { useChosenBetsContext } from '../../context/ChosenBetsProvider';

interface ChosenBetOddsSingleProps {
  chosenOdds: number;
  matchId: string;
  fighterOdds: number;
  idx: number;
}

const ChosenBetOddsSingle: FunctionComponent<ChosenBetOddsSingleProps> = ({
  chosenOdds,
  matchId,
  idx,
}) => {
  const { chosenBets, setChosenBets } =
    useChosenBetsContext() as chosenBetContext;
  const { placeAmount } = (chosenBets as chosenBet[])[idx];

  return (
    <div className='bet-setting'>
      <span className='exchange'>
        <div>Kurs: </div>
        <span className='row-chosen-bet-chosen-odds'>{chosenOdds}x </span>
      </span>
      <input
        className='column-right-input column-right-input-extra'
        value={
          (chosenBets as chosenBet[])[idx].placeAmount
            ? (chosenBets as chosenBet[])[idx].placeAmount
            : 0
        }
        type='number'
        min={0}
        onChange={({ target }) =>
          setChosenBets({
            type: 'updateSingleValue',
            payload: {
              chosenOdds: chosenOdds,
              matchId: matchId,
              valueAmount: target.valueAsNumber,
            },
          })
        }
      />
      <span className='exchange'>
        <div>Win: </div>
        <span className='row-chosen-bet-chosen-odds'>
          {(chosenOdds * (placeAmount === undefined ? 0 : placeAmount)).toFixed(
            2
          )}
          $
        </span>
      </span>
    </div>
  );
};

export default ChosenBetOddsSingle;
