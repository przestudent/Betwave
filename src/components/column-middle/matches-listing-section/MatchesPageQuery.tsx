import { FC } from 'react';
import MatchesListWrapper from './MatchesListWrapper';

const Matches: APIMatchFromList[] = [
  {
    matchId: '2',
    eventId: '2',
    eventName: 'Mistrzostwa',
    sport: 'basketball',
    eventDate: 'Jutro czy cos',
    eventState: 'finished',
    opponents: [
      { opponentName: 'kowalski', opponentOdds: 4 },
      { opponentName: 'Adamczyk', opponentOdds: 2 },
    ],
    outCome: { finished: true, winner: 0 },
  },
  {
    matchId: '212121',
    eventId: '4234',
    eventName: 'Coś tam',
    sport: 'football',
    eventDate: 'Nwm już',
    eventState: 'upcoming',
    opponents: [
      { opponentName: 'Powiatowski', opponentOdds: 4 },
      { opponentName: 'Miastowski', opponentOdds: 2 },
    ],
  },
  {
    matchId: '3',
    eventId: '3',
    eventName: 'Olimpiada',
    sport: 'all',
    eventDate: 'Pojutrze',
    eventState: 'live',
    opponents: [
      { opponentName: 'Pałac', opponentOdds: 1 },
      { opponentName: 'Ziółko', opponentOdds: 3 },
    ],
  },
  {
    matchId: '4',
    eventId: '4',
    eventName: 'Jakiś turniej',
    sport: 'soccer',
    eventDate: '10.09.2020',
    eventState: 'upcoming',
    opponents: [
      { opponentName: 'Dworak', opponentOdds: 4 },
      { opponentName: 'Bąk', opponentOdds: 10 },
    ],
  },
  {
    matchId: '5',
    eventId: '5',
    eventName: 'Turniej',
    sport: 'basketball',
    eventDate: 'Jutro czy cos',
    eventState: 'upcoming',
    opponents: [
      { opponentName: 'kowalski', opponentOdds: 3 },
      { opponentName: 'Adamczyk', opponentOdds: 1 },
    ],
  },
];

const MatchesPageQuery: FC = () => {
  const data = Matches;
  return <MatchesListWrapper outPutData={data} />;
};
//TODO-API GOES HERE
export default MatchesPageQuery;
