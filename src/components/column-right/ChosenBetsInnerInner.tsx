import { FunctionComponent } from 'react';
import ARO from './ARO';
import Single from './Single';

interface ChosenBetsInnerInnerProps {
  chosenBets: chosenBet[];
  edit: boolean;
  isAro: boolean;
  setBetAmount: React.Dispatch<React.SetStateAction<number>>;
  betAmount: number;
  setAroCorrect: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChosenBetsInnerInner: FunctionComponent<ChosenBetsInnerInnerProps> = ({
  chosenBets,
  setAroCorrect,
  betAmount,
  edit,
  isAro,
  setBetAmount,
}) => {
  if (chosenBets.length < 1) {
    return <div></div>;
  }
  if (isAro) {
    return (
      <>
        <div className='chosen-bet-wrapper'>
          {IsAroValid(chosenBets, setAroCorrect) ? (
            <ARO chosenBets={chosenBets} edit={edit} />
          ) : (
            <>
              <h4>AKO not valid</h4>
              <div>You cannot bet on two winners one match</div>
            </>
          )}
        </div>
        <div className='input-middle'>
          <input
            className='column-right-input column-right-input-extra aro-input'
            type='number'
            name='bet-amount-one'
            value={betAmount}
            onChange={({ target }) => {
              window.localStorage.setItem('aro-amount', target.value);
              console.log(setBetAmount);
              setBetAmount(target.valueAsNumber);
            }}
            min={0}
          />
        </div>
      </>
    );
  } else {
    return (
      <div className='chosen-bet-wrapper'>
        <Single chosenBets={chosenBets} edit={edit} />
      </div>
    );
  }
};

export default ChosenBetsInnerInner;

function IsAroValid(
  chosenBets: chosenBet[],
  setAroCorrect: React.Dispatch<React.SetStateAction<boolean>>
): boolean {
  const matchesMap = new Set<string>();
  for (const bet of chosenBets) {
    if (matchesMap.has(bet.matchId)) {
      setAroCorrect(false);
      return false;
    } else {
      setAroCorrect(true);
      matchesMap.add(bet.matchId);
    }
  }
  return true;
}
