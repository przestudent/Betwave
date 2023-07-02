import Link from 'next/link';
import LogoBetWave from '../logos/BetWave';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const NavBar = async () => {
  return (
    <nav className='footer-navbar-styler'>
      <div className='betwave-nav'>
        <LogoBetWave />
      </div>
      <Link href='/'>Matches</Link>
      <Link href='/events'>Events</Link>
      <div className='login-register'>
        <SignedIn>
          <div className='your-logo'>
            <UserButton afterSignOutUrl='/' />
          </div>
          <Link href={'/user'}>YourBets</Link>
        </SignedIn>
        <SignedOut>
          {/* <SignInButton /> */}
          <Link href={'/new-user'}>Log in</Link>
        </SignedOut>
      </div>
    </nav>
  );
};

export default NavBar;
