'use client';
import { FunctionComponent, PropsWithChildren } from 'react';

const ProviderOftheSession: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return <>{children}</>;
};

export default ProviderOftheSession;
