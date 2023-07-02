import { FC } from 'react';

type SummaryProps = {
  isAroSet: boolean;
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  overAllMultiplier: number;
  betAmount: number;
  chosenBets: chosenBet[];
  aroCorrect: boolean;
};

const Summary: FC<SummaryProps> = ({
  betAmount,
  aroCorrect,
  chosenBets,
  overAllMultiplier,
  setEdit,
  edit,
  isAroSet,
}) => {
  function SINGLESectionReturnedValue(): number {
    let sum = 0;
    for (let idx = 0; idx < chosenBets.length; idx++) {
      const element = chosenBets[idx];
      if (element.placeAmount === undefined) {
        continue;
      } else {
        sum += element.placeAmount * element.chosenOdds;
      }
    }
    return parseFloat(sum.toFixed(2));
  }
  return (
    <>
      <div className='bet-cost-sum'>
        <div>Your Win!</div>

        <div className='money-gain-sum'>
          {isAroSet
            ? aroCorrect
              ? (overAllMultiplier * betAmount).toFixed(2)
              : 0
            : SINGLESectionReturnedValue()}
          $
        </div>
      </div>
      {chosenBets.length > 0 && (
        <div className='edit-pen-wrapper'>
          <img
            className='edit-pen'
            src='\svg\pen-svg.svg'
            alt='Edit'
            onClick={() => setEdit(!edit)}
          />
        </div>
      )}
    </>
  );
};

export default Summary;
