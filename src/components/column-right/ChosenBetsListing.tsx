import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useChosenBetsContext } from '../../context/ChosenBetsProvider';
import Summary from './Summary';
import ChosenBetsInnerInner from './ChosenBetsInnerInner';

const ChosenBetsListing: FC<{
  isAroSet: boolean;
  betAmount: number;
  aroCorrect: boolean;
  setAroCorrect: Dispatch<SetStateAction<boolean>>;
  setBetAmount: Dispatch<SetStateAction<number>>;
}> = ({ isAroSet, betAmount, setBetAmount, aroCorrect, setAroCorrect }) => {
  const { chosenBets } = useChosenBetsContext() as chosenBetContext;
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    const localStorageAroValue = window.localStorage.getItem('aro-amount');
    if (localStorageAroValue === null) return;
    setBetAmount(parseFloat(localStorageAroValue));
  }, []);

  if (!chosenBets || chosenBets.length === 0) return <></>;

  const overAllMultiplier = chosenBets
    .map((chosenBets) => chosenBets.chosenOdds)
    .reduce((acc, chosenOdds) => acc * chosenOdds);

  return (
    <>
      <ChosenBetsInnerInner
        setAroCorrect={setAroCorrect}
        betAmount={betAmount}
        chosenBets={chosenBets}
        edit={edit}
        setBetAmount={setBetAmount}
        isAro={isAroSet}
      />
      <Summary
        aroCorrect={aroCorrect}
        isAroSet={isAroSet}
        betAmount={betAmount}
        chosenBets={chosenBets}
        edit={edit}
        overAllMultiplier={overAllMultiplier}
        setEdit={setEdit}
      />
    </>
  );
};

export default ChosenBetsListing;
