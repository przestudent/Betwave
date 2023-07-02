'use client';
import { useChosenBetsContext } from '@/context/ChosenBetsProvider';
import { FC } from 'react';
import Match from './Match';

type MatchesMappingProps = {
  filter: filters;
  sport: sports;
  outPutData: APIMatchFromList[];
};

const MatchesMapping: FC<MatchesMappingProps> = ({
  outPutData,
  sport,
  filter,
}) => {
  //TODO: CONTINUE HERE, ADD READING THE ACTIVE BUTTONS FROM LOCAL STORAGE
  const { chosenBets } = useChosenBetsContext() as chosenBetContext;
  function Filterer(matches: APIMatchFromList[]): APIMatchFromList[] {
    let outPuted = structuredClone(matches);
    if (filter !== 'all') {
      outPuted = outPuted.filter((e) => e.eventState === filter);
    }
    if (sport !== 'all') {
      outPuted = outPuted.filter((e) => e.sport === sport);
    }
    return outPuted;
  }
  if (chosenBets === null || chosenBets.length === 0) {
    return (
      <>
        {Filterer(outPutData).map((individualMatch, i) => {
          return (
            <Match
              key={individualMatch.matchId}
              animationOrder={i + ''}
              {...individualMatch}
            />
          );
        })}
      </>
    );
  } else {
    const localeData = [...chosenBets];
    return (
      <>
        {Filterer(outPutData).map((individualMatch, i) => {
          if (localeData.length <= 0) {
            return (
              <Match
                key={individualMatch.matchId}
                animationOrder={i + ''}
                {...individualMatch}
              />
            );
          } else {
            const foundIdx = localeData.findIndex(
              (e) => individualMatch.matchId === e.matchId
            );
            const lastFoundIdx = localeData.findLastIndex(
              (e) => individualMatch.matchId === e.matchId
            );
            if (foundIdx === -1 && lastFoundIdx === -1) {
              return (
                <Match
                  key={individualMatch.matchId}
                  animationOrder={i + ''}
                  {...individualMatch}
                />
              );
            } else {
              const buttonPressed = { '0': false, '1': false };
              const firstMatch = localeData[foundIdx];
              const secondMatch = localeData[lastFoundIdx];
              buttonPressed[firstMatch.buttonPressed] = true;
              buttonPressed[secondMatch.buttonPressed] = true;
              localeData.splice(foundIdx, 1);
              //we do this for optimization
              if (lastFoundIdx !== foundIdx) {
                localeData.splice(lastFoundIdx - 1, 1);
              }
              return (
                <Match
                  buttonPressed={structuredClone(buttonPressed)}
                  key={individualMatch.matchId}
                  animationOrder={i + ''}
                  {...individualMatch}
                />
              );
            }
          }
        })}
      </>
    );
  }
};

export default MatchesMapping;

// function MatchesMapping({
//   outPutData,
//   dispatchModalBet,
//   modalBetInfo,
//   setChosenBetInfoBit,
//   sport,
//   filter,
// }: {
//   filter: filters;
//   sport: sports;
//   outPutData: APIMatchFromList[];
//   setChosenBetInfoBit: React.Dispatch<
//     React.SetStateAction<ChosenBetInfoBit | null>
//   >;
//   modalBetInfo: betInfo;
//   dispatchModalBet: React.Dispatch<modalBetAction>;
// }) {
//   function Filterer(matches: APIMatchFromList[]): APIMatchFromList[] {
//     let outPuted = matches;
//     if (filter !== 'all') {
//       outPuted = outPuted.filter((e) => e.eventState === filter);
//     }
//     if (sport !== 'all') {
//       outPuted = outPuted.filter((e) => e.sport === sport);
//     }
//     return outPuted;
//   }
//   return (
//     <>
//       {Filterer(outPutData).map((individualMatch, i) => {
//         return (
//           <Match
//             setChosenBetInfoBit={setChosenBetInfoBit}
//             key={individualMatch.eventId}
//             modalBetInfo={modalBetInfo}
//             dispatchModalBet={dispatchModalBet}
//             animationOrder={i + ''}
//             {...individualMatch}
//           />
//         );
//       })}
//     </>
//   );
// }

// export default MatchesMapping;
