type APIMatchFromList = {
  matchId: string;
  eventId: string;
  eventName: string;
  sport: sports;
  eventDate: string;
  opponents: [
    { opponentName: string; opponentOdds: number },
    { opponentName: string; opponentOdds: number }
  ];
  eventState: eventState;
};
type eventStates =
  | {
      eventState: 'upcoming';
    }
  | {
      eventState: 'finished';
      outCome: { finished: true; winner: 0 | 1 };
    }
  | { eventState: 'live' };

type APIPopularEvents = {
  eventId: string;
  sport: sports;
  eventName: string;
};

type APIMatchDetails = APIMatchFromList & {
  eventDescription: string;
};
type APIEventsPage = {
  eventId: string;
  eventDate: string;
  prizePool: string;
  eventState: eventState;
  eventName: string;
  sport: sports;
  country: string;
};

type APIEventDetails = {
  eventName: string;
  startDate: string;
  endDate: string;
  matches: APIMatchFromList[];
  country: string;
  location: string;
  prizePool: string;
  eventId: string;
  sport: sports;
  eventState: eventState;
  description: string;
};
type POST_SingleChosenBets = {
  type: 'SINGLE';
  payload: {
    betId: string;
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
    winAmount: string;
    paidAmount: string;
  };
};

type POST_AKOChosenBets = {
  type: 'AKO';
  payload: {
    betId: string;
    betData: {
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
    }[];
    winAmount: string;
    paidAmount: string;
  };
};

type eventState = 'live' | 'upcoming' | 'finished';
type sports = 'basketball' | 'soccer' | 'football' | 'all';
type sportsIcons = Omit<sports, 'all'>;
type filters = 'all' | eventState;

type chosenBet = {
  betId: string;
  matchId: string;
  placeAmount?: number;
  opponents:
    | [
        { chosen: true; opponentName: string },
        { chosen: false; opponentName: string }
      ]
    | [
        { chosen: false; opponentName: string },
        { chosen: true; opponentName: string }
      ];
  chosenOdds: number;
  buttonPressed: '0' | '1';
};

type ChosenBetsAction =
  | { type: 'append'; payload: { chosenBetsNext: chosenBet } }
  | { type: 'delete'; betId: string }
  | { type: 'deleteAll' }
  | { type: 'localStorage'; payload: { chosenBets: chosenBet[] } }
  | {
      type: 'updateSingleValue';
      payload: { valueAmount: number; matchId: string; chosenOdds: number };
    };

type chosenBetContext = {
  chosenBets: chosenBet[] | null;
  setChosenBets: React.Dispatch<ChosenBetsAction>;
};
type opponents = [
  { chosen: boolean; opponentName: string },
  { chosen: boolean; opponentName: string }
];
type ChosenBetInfoBit = {
  matchId: string;
  opponents: opponents;
  odds: [number, number];
};
// type betsContext = {
//   // matchId: string;
//   chosenBets: string[];
//   setChosenBets: React.Dispatch<React.SetStateAction<string[]>>;
// };

type betInfo = {
  showModal: boolean;
};

type modalBetAction = { type: 'toggle' };
// | {
//     type: 'append';
//     payload: {
//       matchId: string;
//       opponents: [{ opponentName: string }, { opponentName: string }];
//     };
//   }
// | { type: 'clear' };
