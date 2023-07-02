import { FC } from 'react';
import ColumnLeft from './ColumnLeft';
import { prisma } from '../../../db/db';

const getPopularEvents = async () => {
  const data = prisma.event.findMany({
    select: { eventId: true, eventName: true, sport: true },
    where: { OR: [{ eventState: 'live' }, { eventState: 'upcoming' }] },
  });
  return data;
};

const ColumnLeftWrapper: FC = async () => {
  const data2 = await getPopularEvents();
  const data3: APIPopularEvents[] = [
    {
      eventId: data2[0].eventId.toString(),
      eventName: data2[0].eventName,
      sport: data2[0].sport as sports,
    },
  ];
  return <ColumnLeft data={data3} />;
};

export default ColumnLeftWrapper;