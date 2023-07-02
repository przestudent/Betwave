import Link from 'next/link';
import { FC } from 'react';
import { SignedIn, auth, useAuth } from '@clerk/nextjs';

//TODO: AUTH
const UserLogo: FC = async () => {
  const { user } = await auth();
  return (
    <SignedIn>
      <Link className='register' href='/user'>
        <img
          width={24}
          height={24}
          style={{ borderRadius: '100%' }}
          src={
            user
              ? user.imageUrl
              : 'https://freesvg.org/img/abstract-user-flat-4.png'
          }
          alt='Profile picture'
        />
      </Link>
    </SignedIn>
  );
};

export default UserLogo;
