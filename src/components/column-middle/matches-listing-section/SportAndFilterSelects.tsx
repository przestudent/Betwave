import { ChangeEvent, FC } from 'react';

interface SportAndFilterSelectProps {
  setSport: React.Dispatch<React.SetStateAction<sports>>;
  setFilter: React.Dispatch<React.SetStateAction<filters>>;
}

const SportAndFilterSelect: FC<SportAndFilterSelectProps> = ({
  setSport,
  setFilter,
}) => {
  return (
    <div className='matches-selection'>
      <select
        className='my-select'
        onChange={({ target }: ChangeEvent<HTMLSelectElement>) => {
          setSport(target.value as sports);
        }}
        name='sport-select'
        id='sport-select'
      >
        <option value='all'>All sports</option>
        <option value='basketball'>Basketball</option>
        <option value='soccer'>Soccer</option>
        <option value='football'>Football</option>
      </select>
      <select
        className='my-select'
        dir='rtl'
        name='sorting-selection'
        id='sorting-selection'
        onChange={({ target }: ChangeEvent<HTMLSelectElement>) => {
          setFilter(target.value as filters);
        }}
      >
        <option value='all'>All</option>
        <option value='live'>Live</option>
        <option value='upcoming'>Upcoming</option>
        <option value='finished'>Finished</option>
      </select>
    </div>
  );
};

export default SportAndFilterSelect;
