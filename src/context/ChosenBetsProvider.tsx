'use client';
import { FC, createContext, useContext, useEffect, useReducer } from 'react';

const ChosenBetsContext = createContext<chosenBetContext | null>(null);

export function useChosenBetsContext() {
  return useContext(ChosenBetsContext);
}

function reducer(
  state: chosenBet[] | null,
  action: ChosenBetsAction
): chosenBet[] | null {
  switch (action.type) {
    case 'updateSingleValue': {
      //This can only happen when we list the chosen bets on the right, they cannot possibly be null.
      if (!state) {
        throw new Error('BETS WERE NULL');
      }
      let idx = 0;
      for (idx; idx < state.length; idx++) {
        const element = state[idx];
        if (
          element.chosenOdds === action.payload.chosenOdds &&
          element.matchId === action.payload.matchId
        ) {
          break;
        }
      }
      const returnedStateWithUpdatedValue = structuredClone(state);
      returnedStateWithUpdatedValue[idx].placeAmount =
        action.payload.valueAmount;
      window.localStorage.setItem(
        'chosen-bets',
        JSON.stringify(returnedStateWithUpdatedValue)
      );
      return returnedStateWithUpdatedValue;
    }
    case 'append': {
      let returnedBets: chosenBet[] = [];
      if (!state) {
        returnedBets = [action.payload.chosenBetsNext];
      } else {
        returnedBets = state.concat(action.payload.chosenBetsNext);
      }
      window.localStorage.setItem('chosen-bets', JSON.stringify(returnedBets));
      return returnedBets;
    }
    case 'delete': {
      let returnedBets: chosenBet[] | null = null;
      if (state) {
        returnedBets = state.filter(
          (chosenBet) => chosenBet.betId !== action.betId
        );
        window.localStorage.setItem(
          'chosen-bets',
          JSON.stringify(returnedBets)
        );
      }
      return returnedBets;
    }
    case 'deleteAll':
      window.localStorage.removeItem('chosen-bets');
      return null;
    case 'localStorage':
      return action.payload.chosenBets;
    // TODO: FIX THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    default:
      console.trace();
      throw new Error('Action does not exist, useChosenBetsContext, reducer');
  }
}

export const ChosenBetsProvider: FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [chosenBets, setChosenBets] = useReducer(reducer, null);
  useEffect(() => {
    const localData = window.localStorage.getItem('chosen-bets');
    if (localData) {
      const localStorageBets: chosenBet[] = JSON.parse(localData);
      setChosenBets({
        type: 'localStorage',
        payload: { chosenBets: localStorageBets },
      });
    }
  }, []);
  return (
    <ChosenBetsContext.Provider value={{ chosenBets, setChosenBets }}>
      {children}
    </ChosenBetsContext.Provider>
  );
};

const initbet = [
  {
    betId: '21021',
    matchId: '0',
    chosenOdds: 2,
    opponents: [
      { chosen: false, opponentName: 'Pałac' },
      { chosen: true, opponentName: 'Adamski' },
    ],
  },
  {
    betId: '2102121',
    matchId: '1',
    chosenOdds: 2,
    opponents: [
      { chosen: true, opponentName: 'Adam' },
      { chosen: false, opponentName: 'Przemek' },
    ],
  },
  {
    betId: '21043341',
    matchId: '2',
    chosenOdds: 2,
    opponents: [
      { chosen: false, opponentName: 'Żeromski' },
      { chosen: true, opponentName: 'Nowak' },
    ],
  },
  {
    betId: '201',
    matchId: '3',
    chosenOdds: 2,
    opponents: [
      { chosen: true, opponentName: 'Kowalski' },
      { chosen: false, opponentName: 'Rusek' },
    ],
  },
];
