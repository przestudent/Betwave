'use client';
import useMediaQuery from '../hooks/useMediaQuery';
import { FC, PropsWithChildren, useState } from 'react';
import EventSnippetList from './EventSnippetList';

interface ColumnLeftProps {
  data: APIPopularEvents[];
}

const ColumnLeft: FC<ColumnLeftProps> = ({ data }) => {
  const isIn1024px = useMediaQuery(1024);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  //! NOTE for self: this might break! Perhaps the return value, if undefined is {} by definition, and wont be falsy here!
  if (!data || data.length === 0)
    return (
      <Wrapper>
        <div>Not Found</div>
      </Wrapper>
    );
  return (
    <Wrapper>
      <h2>On Top</h2>
      {isIn1024px ? (
        <div className='popular-events-hamburger'>
          <button
            className='popular-events-hamburger-button'
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
          >
            <svg
              className='hamburger-icon'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='Menu / Hamburger_MD'>
                <path
                  id='Vector'
                  d='M5 17H19M5 12H19M5 7H19'
                  stroke='#f7f6fe'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
            </svg>
          </button>
          {hamburgerOpen && (
            <div className='hamburger-popular-events'>
              <div className='event-snipper-wrapper'>
                <EventSnippetList events={data} />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className='popular-events'>
          <EventSnippetList events={data} />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className='column-left-wrapper columns-side'>
      <div className='column-inside column-inside-left'>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default ColumnLeft;
