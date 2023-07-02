'use client';
import useSportsAndEventFilter from '@/components/hooks/useSportsAndEventFilter';
import { FC } from 'react';

import NoneFoundMessage from '../../Utilities/NoneFoundMessage';
import MatchesMapping from './MatchesMapping';
import SportAndFilterSelect from './SportAndFilterSelects';

const MatchesListWrapper: FC<{
  outPutData: APIMatchFromList[] | undefined;
}> = ({ outPutData }) => {
  const { sport, setSport, filter, setFilter } = useSportsAndEventFilter();
  return (
    <div className='matches'>
      <SportAndFilterSelect setFilter={setFilter} setSport={setSport} />
      {outPutData ? (
        <MatchesMapping sport={sport} filter={filter} outPutData={outPutData} />
      ) : (
        <NoneFoundMessage />
      )}
    </div>
  );
};

export default MatchesListWrapper;
