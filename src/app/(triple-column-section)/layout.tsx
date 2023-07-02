import ColumnLeftWrapper from '@/components/column-left/ColumnLeftWrapper';
import MainContentDeeper from '@/components/MainContentLevelDeeper';
import { FunctionComponent, PropsWithChildren } from 'react';

const TripleColumnLayout: FunctionComponent<PropsWithChildren> = async ({
  children,
}) => {
  return (
    <main className='main-content'>
      <ColumnLeftWrapper />
      <MainContentDeeper>{children}</MainContentDeeper>
    </main>
  );
};

export default TripleColumnLayout;
