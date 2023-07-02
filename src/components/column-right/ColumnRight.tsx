'use client';
import { Dispatch, FC, useState } from 'react';
import { useChosenBetsContext } from '../../context/ChosenBetsProvider';
import ChosenListingOuterWrapper from './ChosenListingOuterWrapper';
import { useAuth } from '@clerk/nextjs';

const ColumnRight: FC = () => {
  const [aroCorrect, setAroCorrect] = useState(true);

  const { isSignedIn } = useAuth();
  const [isAroSet, setIsAroSet] = useState(false);
  const { chosenBets, setChosenBets } =
    useChosenBetsContext() as chosenBetContext;
  const [betAmount, setBetAmount] = useState(0);
  return (
    <section className='column-right-wrapper  columns-side'>
      <div className='column-inside column-inside-right'>
        <div>
          <ChosenListingOuterWrapper
            aroCorrect={aroCorrect}
            setAroCorrect={setAroCorrect}
            betAmount={betAmount}
            setBetAmount={setBetAmount}
            isAroSet={isAroSet}
            setIsAroSet={setIsAroSet}
          />

          <div className='bet-summary'>
            <button
              className='glint-effect button-styler button-bet'
              disabled={!chosenBets || chosenBets.length === 0 ? true : false}
              onClick={() =>
                fecthAPI(
                  isSignedIn,
                  isAroSet,
                  chosenBets,
                  setChosenBets,
                  betAmount,
                  aroCorrect
                )
              }
            >
              Bet!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColumnRight;

async function fecthAPI(
  isSignedIn: boolean | undefined,
  isAroSet: boolean,
  chosenBets: chosenBet[] | null,
  setChosenBets: Dispatch<ChosenBetsAction>,
  betAmount: number,
  aroCorrect: boolean
) {
  if (isSignedIn && chosenBets) {
    let dataAKO: POST_AKOChosenBets[];
    let dataSingle: POST_SingleChosenBets[];
    if (isAroSet) {
      if (!aroCorrect) {
        alert("AKO isn't correct!");
        return;
      }
      const overAllMultiplier = chosenBets
        .map((chosenBets) => chosenBets.chosenOdds)
        .reduce((acc, chosenOdds) => acc * chosenOdds);
      console.log(overAllMultiplier);
      const data2: {
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
      }[] = (chosenBets as chosenBet[]).map((bet) => {
        const opponents = [
          {
            chosen: bet.opponents[0].chosen,
            opponentName: bet.opponents[0].opponentName,
            opponentOdds: bet.opponents[0].chosen
              ? bet.chosenOdds.toString()
              : '0',
          },
          {
            chosen: bet.opponents[1].chosen,
            opponentName: bet.opponents[1].opponentName,
            opponentOdds: bet.opponents[1].chosen
              ? bet.chosenOdds.toString()
              : '0',
          },
        ];
        return { matchId: bet.matchId, opponents: opponents };
      });
      dataAKO = [
        {
          type: 'AKO',
          payload: {
            betId: performance.now().toString(),
            paidAmount: betAmount.toString(),
            betData: data2,
            winAmount: (overAllMultiplier * betAmount).toString(),
          },
        },
      ];
      await fetch(
        new Request(`${window.location.origin}/api/events`, {
          method: 'POST',
          body: JSON.stringify(dataAKO),
        })
      );
    } else {
      dataSingle = (chosenBets as chosenBet[])
        .filter((bet) => bet.placeAmount !== undefined)
        .map((bet) => {
          let opponents:
            | [
                {
                  opponentOdds: string;
                  chosen: true;
                  opponentName: string;
                },
                {
                  opponentOdds: string;
                  chosen: false;
                  opponentName: string;
                }
              ]
            | [
                {
                  opponentOdds: string;
                  chosen: false;
                  opponentName: string;
                },
                {
                  opponentOdds: string;
                  chosen: true;
                  opponentName: string;
                }
              ] = bet.opponents;
          opponents[0].opponentOdds = opponents[0].chosen
            ? bet.chosenOdds.toString()
            : '0';
          opponents[1].opponentOdds = opponents[1].chosen
            ? bet.chosenOdds.toString()
            : '0';
          return {
            type: 'SINGLE',
            payload: {
              betId: bet.betId,
              matchId: bet.matchId,
              paidAmount: (bet.placeAmount as number).toString(),
              winAmount: (
                (bet.placeAmount as number) * bet.chosenOdds
              ).toString(),
              opponents: opponents,
            },
          };
        });
      await fetch(
        new Request(`${window.location.origin}/api/events`, {
          method: 'POST',
          body: JSON.stringify(dataSingle),
        })
      );
    }
    setChosenBets({ type: 'deleteAll' });
  } else {
    alert('You have to sign in!');
  }
}
