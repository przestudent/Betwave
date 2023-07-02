import MatchesListWrapper from './matches-listing-section/MatchesListWrapper';
import { prisma } from '../../../db/db';
import NoneFoundMessage from '../Utilities/NoneFoundMessage';
import MiddleColumnFallback2 from './MiddleColumnFallback';
import { FC } from 'react';
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

const EventPages: APIEventDetails[] = [
  {
    country: 'pl',
    description: 'Lorem ipsum lorem.',
    endDate: '23.06.2023',
    startDate: '17.06.2023',
    eventId: '0',
    eventName: 'Igrzyska',
    eventState: 'live',
    location: 'Warszawa',
    prizePool: '100.000',
    sport: 'all',
    matches: Matches,
  },
  {
    country: 'jp',
    description: 'Lorem ipsum lorem ipsum.',
    endDate: '30.06.2023',
    startDate: '25.06.2023',
    eventId: '1',
    eventName: 'Olimpiada',
    eventState: 'upcoming',
    location: 'Tokyo',
    prizePool: '1.000.000',
    sport: 'all',
    matches: Matches,
  },
  {
    country: 'gr',
    description: 'Lorem ipsum.',
    endDate: '01.01.2023',
    startDate: '20.01.2023',
    eventId: '2',
    eventName: 'Igrzyska Olimpijskie',
    eventState: 'finished',
    location: 'Berlin',
    prizePool: '50.000',
    sport: 'all',
    matches: Matches,
  },
];

async function getEvent(eventId: string): Promise<APIEventDetails> {
  const events = await prisma.event.findUniqueOrThrow({
    where: { eventId: eventId },
    include: { matches: true },
  });
  if (events === null) return new Promise((resolve) => {});
  const matches: APIMatchFromList[] = events.matches.map((match) => {
    return {
      eventId: events.eventId,
      eventDate: events.startDate.toDateString(),
      eventName: events.eventName,
      matchId: match.matchId,
      eventState: match.matchState,
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
      sport: events.sport,
    };
  });
  return {
    eventName: events.eventName,
    startDate: events.startDate.toDateString(),
    endDate: events.endDate.toDateString(),
    matches: matches,
    country: events.country,
    location: events.location,
    prizePool: events.prizePool.toString(),
    eventId: events.eventId,
    sport: events.sport as sports,
    eventState: events.eventState as eventState,
    description: events.description,
  };
}

interface EventPageProps {
  eventId: string;
}

const EventPage: FC<EventPageProps> = async ({ eventId }) => {
  // const data = EventPages[parseInt(eventId)];
  const data = await getEvent(eventId);
  //TODO CHECK IF EMPTY
  if (Object.keys(data).length === 0)
    return (
      <NoneFoundMessage>
        <h1>Event was not found</h1>
        <p>Event of id: {eventId}. Does not exist.</p>
      </NoneFoundMessage>
    );

  return (
    <>
      <div className='event-page-header'>
        <div className={`fi fi-${data.country} event-page-country-flag`}></div>
        <div>
          <h2>{data.eventName}</h2>
          <h3 className='event-page-description'>{data.description}</h3>
          <div className='event-page-prize-pool'>{`Prize pool: ${data.prizePool}$`}</div>
        </div>
      </div>
      <div className='event-page-extra-info'>
        <div>
          <div>{`Start: ${data.startDate}`}</div>
          <div>{`End: ${data.endDate}`}</div>
        </div>
        <div>{`Location: ${data.location}, ${data.country}`}</div>
      </div>
      <MatchesListWrapper outPutData={data.matches} />
    </>
  );
};

export default EventPage;
