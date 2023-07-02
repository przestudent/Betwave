import Link from 'next/link';
import SportLogo from '../logos/SportsLogos';
import { FC } from 'react';

const EventSnippet: FC<APIPopularEvents> = ({ eventName, sport, eventId }) => {
  return (
    <Link className='glint-effect' href={`events/${eventId}`}>
      <span>
        <SportLogo sport={sport} />
      </span>
      <strong>{eventName}</strong>
    </Link>
  );
};
//TODO: CONSIDER ADDING AN ANIMATION
interface EventSnippetListProps {
  events: APIPopularEvents[];
}

const EventSnippetList: FC<EventSnippetListProps> = ({ events }) => {
  return (
    <>
      {events.map((individualEvent) => (
        <EventSnippet key={individualEvent.eventId} {...individualEvent} />
      ))}
    </>
  );
};

export default EventSnippetList;
