'use client';
import NoneFoundMessage from '@/components/Utilities/NoneFoundMessage';
import Link from 'next/link';
import { FunctionComponent, CSSProperties, FC } from 'react';
import SportAndFilterSelect from './SportAndFilterSelects';
import useSportsAndEventFilter from '@/components/hooks/useSportsAndEventFilter';

interface EventsPageInnerProps {
  data: APIEventsPage[];
}

const EventsPageInner: FC<EventsPageInnerProps> = ({ data }) => {
  // const data = EventsPageData;
  const { sport, setSport, filter, setFilter } = useSportsAndEventFilter();
  // API
  let outPutData = data;
  function OutputMatches() {
    if (!data) return false;
    if (filter !== 'all') {
      outPutData = data.filter((individualMatch) => {
        return individualMatch.eventState === filter;
      });
    }
    if (sport !== 'all') {
      outPutData = data.filter((individualMatch) => {
        return individualMatch.sport === sport;
      });
    }
    if (!outPutData || outPutData.length < 1) {
      return false;
    }
    return true;
  }
  return (
    <div className='events'>
      <SportAndFilterSelect setFilter={setFilter} setSport={setSport} />
      {OutputMatches() ? (
        outPutData.map((eventSnippet, idx) => (
          <EventSnippet
            key={eventSnippet.eventId}
            animationOrder={idx.toString()}
            {...eventSnippet}
          />
        ))
      ) : (
        <NoneFoundMessage />
      )}
    </div>
  );
};

export default EventsPageInner;

const EventSnippet: FC<
  {
    animationOrder: string;
  } & APIEventsPage
> = ({
  animationOrder,
  eventDate,
  eventId,
  eventName,
  eventState,
  prizePool,
  sport,
  country,
}) => {
  return (
    <Link
      href={`events/${eventId}`}
      style={{ '--animation-order': animationOrder } as CSSProperties}
      className='event match-event event-snippet'
    >
      <div className='events-page-event-wrapper-wrapper'>
        <div className='events-page-event-wrapper'>
          <h3 className='events-page-event-name'>{eventName}</h3>
          <div>
            <div>
              <div>Status</div>
              <div className={`events-page-event-state-${eventState}`}>
                {eventState}
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>Prize Pool</div>
              <div>{prizePool}$</div>
            </div>
          </div>
          <div>
            <div>
              <div>Date</div>
              <div>{eventDate}</div>
            </div>
          </div>
          <div>
            <div>
              <div>Sport</div>
              <div>{sport}</div>
            </div>
          </div>
        </div>
        <div className={`fi fi-${country} fis`}></div>
      </div>
    </Link>
  );
};
