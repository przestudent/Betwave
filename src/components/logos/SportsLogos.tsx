import Image from 'next/image';
import { FC } from 'react';

interface SportLogoProps {
  sport: sports;
}

const SportLogo: FC<SportLogoProps> = ({ sport }) => {
  return (
    <Image
      height={20}
      width={20}
      src={`/svg/sports/${sport}.svg`}
      alt={`${sport}`}
    />
  );
};

export default SportLogo;
