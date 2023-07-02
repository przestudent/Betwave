import { CSSProperties, FC } from 'react';

const MiddleColumnFallback2: FC = () => {
  return (
    <div className='loading-anim'>
      <div style={{ '--animation-order': '0' } as CSSProperties}></div>
      <div style={{ '--animation-order': '1' } as CSSProperties}></div>
      <div style={{ '--animation-order': '2' } as CSSProperties}></div>
      <div style={{ '--animation-order': '3' } as CSSProperties}></div>
      <div style={{ '--animation-order': '4' } as CSSProperties}></div>
    </div>
    //TODO YOU CAN MAKE IT APPAER INSIDE OF SOMETHING, JUST GET RID OF THAT POSITIOFN FIXED AND IT WILL BE FINE
    //BUT FOR NOW ITS FINE
  );
};

export default MiddleColumnFallback2;
