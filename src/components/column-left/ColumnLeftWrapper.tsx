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
  return <ColumnLeft data={data2.splice(0, 5)} />;
};

export default ColumnLeftWrapper;
