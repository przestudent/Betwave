import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

const LogoBetWave: FC = () => {
  return (
    <Link href='/'>
      <Image
        height={50}
        width={200}
        className='betwave'
        src='/sponsors/betwave.svg'
        alt='Betwave'
      />
    </Link>
  );
};

export default LogoBetWave;
