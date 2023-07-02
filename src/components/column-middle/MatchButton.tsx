'use client';
import { CSSProperties, FC } from 'react';
import { useChosenBetsContext } from '../../context/ChosenBetsProvider';

interface MatchButtonProps {
  eventState: eventState;
  odds: [number, number];
  fighterOdds: number;
  oddsSum: number;
  opponents:
    | [
        { chosen: true; opponentName: string },
        { chosen: false; opponentName: string }
      ]
    | [
        { chosen: false; opponentName: string },
        { chosen: true; opponentName: string }
      ];
  matchId: string;
  beenPressed?: true;
  buttonOrder: '0' | '1';
}

const MatchButton: FC<MatchButtonProps> = ({
  fighterOdds,
  oddsSum,
  opponents,
  matchId,
  eventState,
  beenPressed,
  buttonOrder,
}) => {
  const opponentRatioWidth = `${
    100 - Math.floor((fighterOdds / oddsSum) * 100)
  }%`;
  const { chosenBets, setChosenBets } =
    useChosenBetsContext() as chosenBetContext;
  return (
    <div className='fighter-odds'>
      <button
        type='button'
        className={`opponent-chances glint-effect button-pressed-${
          beenPressed ? true : false
        }`}
        onClick={(e) => {
          e.preventDefault();
          if (chosenBets && chosenBets.length > 0) {
            for (const bet of chosenBets) {
              if (bet.matchId === matchId && bet.chosenOdds === fighterOdds) {
                setChosenBets({ type: 'delete', betId: bet.betId });
                return;
              }
            }
            setChosenBets({
              type: 'append',
              payload: {
                chosenBetsNext: {
                  betId: `${new Date().getTime()}${matchId}`,
                  chosenOdds: fighterOdds,
                  matchId: matchId,
                  opponents: opponents,
                  buttonPressed: buttonOrder,
                },
              },
            });
          } else {
            setChosenBets({
              type: 'append',
              payload: {
                chosenBetsNext: {
                  betId: `${new Date().getTime()}${matchId}`,
                  chosenOdds: fighterOdds,
                  matchId: matchId,
                  opponents: opponents,
                  buttonPressed: buttonOrder,
                },
              },
            });
          }
        }}
        // disabled={eventState === 'finished' ? true : false}
      >
        {fighterOdds}
      </button>
      <div className='odds-green-to-red'>
        <div
          style={{ '--opponent-ratio': opponentRatioWidth } as CSSProperties}
          className='button-under-colored-background'
        ></div>
      </div>
    </div>
  );
};

export default MatchButton;

// import { CSSProperties } from 'react';

// interface MyCSSProps extends CSSProperties {
//   '--opponent-ratio': string;
// }

// function MatchButton({
//   fighterOdds,
//   modalBetInfo,
//   dispatchModalBet,
//   oddsSum,
//   opponents,
//   matchId,
//   setChosenBetInfoBit,
//   odds,
//   eventState,
// }: {
//   eventState: eventState;
//   odds: [number, number];
//   setChosenBetInfoBit: React.Dispatch<
//     React.SetStateAction<ChosenBetInfoBit | null>
//   >;
//   fighterOdds: number;
//   oddsSum: number;
//   modalBetInfo: betInfo;
//   opponents: [
//     { chosen: boolean; opponentName: string },
//     { chosen: boolean; opponentName: string }
//   ];
//   matchId: string;
//   dispatchModalBet: React.Dispatch<modalBetAction>;
// }) {
//   const opponentRatioWidth = `${
//     100 - Math.floor((fighterOdds / oddsSum) * 100)
//   }%`;
//   return (
//     <div className='fighter-odds'>
//       <button
//         type='button'
//         className='opponent-chances glint-effect'
//         onClick={(e) => {
//           e.preventDefault();
//           const newModalBetInfo = structuredClone(modalBetInfo);
//           setChosenBetInfoBit({
//             matchId: matchId,
//             opponents: opponents,
//             odds: odds,
//           });
//           newModalBetInfo.showModal = true;
//           dispatchModalBet({ type: 'toggle' });
//         }}
//         disabled={eventState === 'finished' ? true : false}
//       >
//         {fighterOdds}
//       </button>
//       <div className='odds-green-to-red'>
//         <div
//           style={{ '--opponent-ratio': opponentRatioWidth } as MyCSSProps}
//           className='button-under-colored-background'
//         ></div>
//       </div>
//     </div>
//   );
// }

// export default MatchButton;
