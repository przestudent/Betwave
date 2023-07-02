import { prisma } from '../../../db/db';
import EventsPageInner from './matches-listing-section/EventsPageInner';

async function getEvents(): Promise<APIEventsPage[]> {
  const events = await prisma.event.findMany();

  return events.map((event) => ({
    eventId: event.eventId,
    eventDate: event.startDate.toDateString(),
    prizePool: event.prizePool.toString(),
    eventState: event.eventState as eventState,
    eventName: event.eventName,
    sport: event.sport as sports,
    country: event.country,
  }));
}

const EventsPage = async () => {
  const data = await getEvents();
  return (
    <>
      <h1>
        <i>🌊Events🌊</i>
      </h1>
      <EventsPageInner data={data} />
    </>
  );
};

export default EventsPage;
