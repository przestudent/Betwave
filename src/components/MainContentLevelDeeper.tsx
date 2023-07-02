'use client';
import { ChosenBetsProvider } from '../context/ChosenBetsProvider';
import ColumnRight from './column-right/ColumnRight';
import { FC, PropsWithChildren } from 'react';

const MainContentDeeper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ChosenBetsProvider>
      <section className='column-middle'>
        <div>{children}</div>
      </section>
      <ColumnRight />
    </ChosenBetsProvider>
  );
};

export default MainContentDeeper;
