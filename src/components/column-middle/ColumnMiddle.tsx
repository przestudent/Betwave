import { prisma } from '../../../db/db';
import MatchesListWrapper from './matches-listing-section/MatchesListWrapper';
import MatchesPageQuery from './matches-listing-section/MatchesPageQuery';
import TypeItH1 from './TypeIth1';

const Matches: APIMatchFromList[] = [
  {
    matchId: '2',
    eventId: '2',
    eventName: 'Mistrzostwa',
    sport: 'basketball',
    eventDate: 'Jutro',
    eventState: 'finished',
    opponents: [
      { opponentName: 'kowalski', opponentOdds: 4 },
      { opponentName: 'Adamczyk', opponentOdds: 2 },
    ],
  },
  {
    matchId: '212121',
    eventId: '4234',
    eventName: 'Mistrzostwa-rzut dyskiem',
    sport: 'football',
    eventDate: 'Pojutrze',
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
    eventName: 'Liga Europy',
    sport: 'soccer',
    eventDate: '10.09.2023',
    eventState: 'upcoming',
    opponents: [
      { opponentName: 'Dworak', opponentOdds: 4 },
      { opponentName: 'Bąk', opponentOdds: 10 },
    ],
  },
  {
    matchId: '5',
    eventId: '5',
    eventName: 'Liga amatorska',
    sport: 'basketball',
    eventDate: 'Niedziela',
    eventState: 'upcoming',
    opponents: [
      { opponentName: 'kowalski', opponentOdds: 3 },
      { opponentName: 'Adamczyk', opponentOdds: 1 },
    ],
  },
];

async function getMatch(): Promise<APIMatchFromList[]> {
  const matches = await prisma.match.findMany({
    include: {
      event: true,
    },
  });

  return matches.map((match) => ({
    matchId: match.matchId,
    eventState: match.matchState as eventState,
    eventId: match.eventId,
    eventName: match.event.eventName,
    sport: match.event.sport,
    eventDate: match.matchDate.toDateString(),
    opponents: [
      {
        opponentName: match.opponentOneName,
        opponentOdds: match.opponentOneOdds,
      },
      {
        opponentName: match.opponentTwoName,
        opponentOdds: match.opponentTwoOdds,
      },
    ],
  }));
}

// const data = getMatch();
// console.log('MATCHES-DATA');

const ColumnMiddle = async () => {
  const data3 = await getMatch();
  return (
    <>
      <TypeItH1 />
      <MatchesListWrapper outPutData={data3} />
    </>
  );
};

export default ColumnMiddle;
