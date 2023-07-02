import MatchButton from './MatchButton';
import NoneFoundMessage from '../Utilities/NoneFoundMessage';
import Link from 'next/link';
import { FC } from 'react';
import { prisma } from '../../../db/db';

const MatchPages: APIMatchDetails[] = [
  {
    eventDate: '19.06.2022',
    eventId: '0',
    eventDescription:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, corporis!',
    eventName: 'Olimpiada',
    eventState: 'live',
    matchId: '0',
    opponents: [
      { opponentName: 'Adamski', opponentOdds: 1 },
      { opponentName: 'Piotrowski', opponentOdds: 2 },
    ],
    sport: 'all',
  },
  {
    eventDate: '19.06.2022',
    eventId: '1',
    eventDescription:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, corporis!',
    eventName: 'Igrzyska',
    eventState: 'upcoming',
    matchId: '1',
    opponents: [
      { opponentName: 'Adamski', opponentOdds: 1 },
      { opponentName: 'Piotrowski', opponentOdds: 2 },
    ],
    sport: 'all',
  },
  {
    eventDate: '19.12.2022',
    eventId: '2',
    eventDescription:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, corporis!',
    eventName: 'Igrzyska',
    eventState: 'upcoming',
    matchId: '2',
    opponents: [
      { opponentName: 'Adamski', opponentOdds: 1 },
      { opponentName: 'Piotrowski', opponentOdds: 2 },
    ],
    sport: 'all',
  },
];

interface MatchPageProps {
  matchId: string;
}

const getMatchDetails = async (matchId: string): Promise<APIMatchDetails> => {
  console.log('fetcgin match');
  const data = await prisma.match.findUniqueOrThrow({
    where: { matchId: matchId },
    include: { event: true },
  });
  const dataMatchDetails: APIMatchDetails = {
    eventDate: data.matchDate.toDateString(),
    eventDescription: data.event.description,
    eventId: data.event.eventId,
    eventName: data.event.eventName,
    eventState: data.matchState as eventState,
    matchId: data.matchId,
    sport: data.event.sport as sports,
    opponents: [
      {
        opponentName: data.opponentOneName,
        opponentOdds: data.opponentOneOdds,
      },
      {
        opponentName: data.opponentTwoName,
        opponentOdds: data.opponentTwoOdds,
      },
    ],
  };
  return new Promise(() => dataMatchDetails);
};

const MatchPage: FC<MatchPageProps> = async ({ matchId }) => {
  const data = await getMatchDetails(matchId);
  if (!data || Object.keys(data).length === 0)
    return (
      <NoneFoundMessage>
        <h1>Match was not Found</h1>
        <p>Match of id: {matchId}. Does not exist.</p>
      </NoneFoundMessage>
    );
  const oddsSum =
    data.opponents[0].opponentOdds + data.opponents[1].opponentOdds;
  return (
    <>
      <div>
        <div className='match-info'>
          <Link href={'/events/event/1'}>{data.eventName}</Link>
          <div className='match-time'>
            <time>{data.eventDate}</time>
          </div>
        </div>
        <div className='opponents-wrapper'>
          <div className='opponent'>
            <div className='opponent-name-logo'>
              <h3>{data.opponents[0].opponentName}</h3>
            </div>
            <MatchButton
              buttonOrder='0'
              eventState={data.eventState}
              odds={[
                data.opponents[0].opponentOdds,
                data.opponents[1].opponentOdds,
              ]}
              oddsSum={oddsSum}
              fighterOdds={data.opponents[0].opponentOdds}
              matchId={data.matchId}
              opponents={[
                { opponentName: data.opponents[0].opponentName, chosen: true },
                { opponentName: data.opponents[1].opponentName, chosen: false },
              ]}
            />
          </div>
          <div className='match-stats'>
            <div className={`events-page-event-state-${data.eventState}`}>
              {data.eventState}
            </div>
          </div>
          <div className='opponent'>
            <div className='opponent-name-logo'>
              <div>Logo?</div>
              <h3>{data.opponents[1].opponentName}</h3>
            </div>
            <MatchButton
              buttonOrder='1'
              eventState={data.eventState}
              odds={[
                data.opponents[0].opponentOdds,
                data.opponents[1].opponentOdds,
              ]}
              oddsSum={oddsSum}
              fighterOdds={data.opponents[1].opponentOdds}
              matchId={data.matchId}
              opponents={[
                { opponentName: data.opponents[0].opponentName, chosen: false },
                { opponentName: data.opponents[1].opponentName, chosen: true },
              ]}
            />
          </div>
        </div>
      </div>
      <div className='event-page-extra-info'>{data.eventDescription}</div>
    </>
  );
};

export default MatchPage;
