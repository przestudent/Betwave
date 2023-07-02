import { PropsWithChildren } from 'react';

function NoneFoundMessage({ children }: PropsWithChildren) {
  return (
    <div className='match match-event message-none-found'>
      <div className='message-none'>{children}</div>
    </div>
  );
}

export default NoneFoundMessage;
