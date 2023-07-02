import { SignOutButton, SignedIn, SignedOut, auth } from '@clerk/nextjs';
import { FC } from 'react';

const Login: FC = async () => {
  const { user } = await auth();
  return (
    <>
      <SignedIn>
        <a className='login' href='/'>
          <SignOutButton />
        </a>
      </SignedIn>
      <SignedOut>
        <a className='login' href={'/user'}>
          <div>Login</div>
        </a>
      </SignedOut>
    </>
  );
};

export default Login;
