'use client';
import Link from 'next/link';
import SportLogo from '../../logos/SportsLogos';
import MatchButton from '../MatchButton';
import { CSSProperties, FC } from 'react';

type MatchProps = APIMatchFromList & {
  animationOrder: string;
  buttonPressed?: { '0': boolean; '1': boolean };
};

const Match: FC<MatchProps> = ({
  buttonPressed,
  matchId,
  eventId,
  eventName,
  animationOrder,
  sport,
  opponents,
  eventState,
  eventDate,
}) => {
  // API
  // ! TODO ADD THE MATCH STATE, ONLY IF ITS UPCOMING ALLOW BETS
  const oddsSum = opponents[0].opponentOdds + opponents[1].opponentOdds;
  if (buttonPressed === undefined) {
    return (
      <div
        style={{ '--animation-order': animationOrder } as CSSProperties}
        className='match match-event'
      >
        <SportLogo sport={sport} />
        <h3>{opponents[0].opponentName}</h3>
        <span className='event-time'>
          <div className={`game-status-${eventState}`}>
            <EventState eventState={eventState} />
          </div>
          <time className='game-time-start'>{eventDate}</time>
        </span>
        <h3>{opponents[1].opponentName}</h3>
        <MatchButton
          buttonOrder={'0'}
          eventState={eventState}
          odds={[opponents[0].opponentOdds, opponents[1].opponentOdds]}
          oddsSum={oddsSum}
          fighterOdds={opponents[0].opponentOdds}
          matchId={matchId}
          opponents={[
            { opponentName: opponents[0].opponentName, chosen: true },
            { opponentName: opponents[1].opponentName, chosen: false },
          ]}
        />
        <Link href={`/events/${eventId}`} className='event-name'>
          <h4>{eventName}</h4>
        </Link>
        <MatchButton
          buttonOrder={'1'}
          eventState={eventState}
          odds={[opponents[0].opponentOdds, opponents[1].opponentOdds]}
          fighterOdds={opponents[1].opponentOdds}
          oddsSum={oddsSum}
          matchId={matchId}
          opponents={[
            { opponentName: opponents[0].opponentName, chosen: false },
            { opponentName: opponents[1].opponentName, chosen: true },
          ]}
        />
      </div>
    );
  } else {
    return (
      <div
        style={{ '--animation-order': animationOrder } as CSSProperties}
        className='match match-event'
      >
        <SportLogo sport={sport} />
        <h3>{opponents[0].opponentName}</h3>
        <span className='event-time'>
          <div className={`game-status-${eventState}`}>
            <EventState eventState={eventState} />
          </div>
          <time className='game-time-start'>{eventDate}</time>
        </span>
        <h3>{opponents[1].opponentName}</h3>
        <MatchButton
          buttonOrder={'0'}
          beenPressed={buttonPressed[0] ? true : undefined}
          eventState={eventState}
          odds={[opponents[0].opponentOdds, opponents[1].opponentOdds]}
          oddsSum={oddsSum}
          fighterOdds={opponents[0].opponentOdds}
          matchId={matchId}
          opponents={[
            { opponentName: opponents[0].opponentName, chosen: true },
            { opponentName: opponents[1].opponentName, chosen: false },
          ]}
        />
        <Link href={`/events/${eventId}`} className='event-name'>
          <h4>{eventName}</h4>
        </Link>
        <MatchButton
          buttonOrder={'1'}
          beenPressed={buttonPressed[1] ? true : undefined}
          eventState={eventState}
          odds={[opponents[0].opponentOdds, opponents[1].opponentOdds]}
          fighterOdds={opponents[1].opponentOdds}
          oddsSum={oddsSum}
          matchId={matchId}
          opponents={[
            { opponentName: opponents[0].opponentName, chosen: false },
            { opponentName: opponents[1].opponentName, chosen: true },
          ]}
        />
      </div>
    );
  }
};

export default Match;

function EventState({ eventState }: { eventState: eventState }) {
  if (eventState === 'live') {
    return (
      <>
        <span className='live-styler'></span>
        {eventState}
      </>
    );
  }
  return <>{eventState}</>;
}
