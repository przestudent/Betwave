import { CSSProperties, Dispatch, FC, SetStateAction, useState } from 'react';
import { useChosenBetsContext } from '../../context/ChosenBetsProvider';
import ChosenBetsListing from './ChosenBetsListing';

const ChosenListingOuterWrapper: FC<{
  isAroSet: boolean;
  setIsAroSet: Dispatch<SetStateAction<boolean>>;
  betAmount: number;
  setBetAmount: Dispatch<SetStateAction<number>>;
  aroCorrect: boolean;
  setAroCorrect: Dispatch<SetStateAction<boolean>>;
}> = ({
  isAroSet,
  setIsAroSet,
  betAmount,
  setBetAmount,
  aroCorrect,
  setAroCorrect,
}) => {
  const { chosenBets, setChosenBets } =
    useChosenBetsContext() as chosenBetContext;
  return (
    <>
      <h2>
        My Bet
        <span
          className='rubbish'
          onClick={() => setChosenBets({ type: 'deleteAll' })}
        >
          🗑
        </span>
      </h2>
      <div className='single-aro'>
        <span onClick={() => setIsAroSet(false)}>
          <h3
            style={
              {
                color: isAroSet ? 'inherit' : 'var(--color-accent-2)',
              } as CSSProperties
            }
          >
            Single
          </h3>
        </span>
        <span
          id='ARO-select'
          style={
            { '--translate-x': isAroSet ? '0%' : '-100%' } as CSSProperties
          }
          onClick={() => setIsAroSet(true)}
        >
          <h3
            style={
              {
                color: isAroSet ? 'var(--color-accent-2)' : 'inherit',
              } as CSSProperties
            }
          >
            AKO
          </h3>
        </span>
      </div>
      {!chosenBets || chosenBets.length === 0 ? (
        <div>No bets chosen</div>
      ) : (
        <ChosenBetsListing
          aroCorrect={aroCorrect}
          setAroCorrect={setAroCorrect}
          isAroSet={isAroSet}
          betAmount={betAmount}
          setBetAmount={setBetAmount}
        />
      )}
    </>
  );
};

export default ChosenListingOuterWrapper;
