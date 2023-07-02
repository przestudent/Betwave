import EventPage from '@/components/column-middle/EventPage';

function EventPageDetails({ params }: { params: { eventId: string } }) {
  //   return <EventPage eventId={eventId} />;
  return <EventPage eventId={params.eventId} />;
}

export default EventPageDetails;
