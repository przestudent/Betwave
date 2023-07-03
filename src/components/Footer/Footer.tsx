/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import LogoBetWave from '../logos/BetWave';
import MediaLinks from '../logos/MediaLinks';
import { FC } from 'react';
import { prisma } from '../../../db/db';

const Footer: FC = async () => {
  return (
    <>
      <div className='seo-footer-wrapper'>
        <dl className='seo-footer'>
          <div>
            <dt>
              Welcome to <span className='bookie-name'>BETWAVE</span>
            </dt>
            <dd>
              Welcome to <span className='bookie-name'>BETWAVE</span>, your
              ultimate destination for top-notch online betting and gambling
              experiences. As a leading bookmaker in the industry, we strive to
              provide you with an unparalleled selection of sports betting
              options, casino games, and exciting promotions.
            </dd>
          </div>
          <div>
            <dt>Extensive Selection of Sports Betting and Casino Games</dt>
            <dd>
              Whether you're a seasoned bettor or a novice exploring the world
              of online gambling, we've got you covered. Our dedicated team of
              experts ensures that you have access to a wide range of sports
              events from around the globe, including popular leagues and
              tournaments.
            </dd>
          </div>
          <div>
            <dt>Safety and Security as Our Top Priority</dt>
            <dd>
              At <span className='bookie-name'>BETWAVE</span>, we prioritize
              your safety and security. We employ state-of-the-art encryption
              technology to safeguard your personal and financial information.
              Our platform is fully licensed and regulated, giving you peace of
              mind as you enjoy our services.
            </dd>
          </div>
          <div>
            <dt>User-Friendly Platform with Competitive Odds</dt>
            <dd>
              To enhance your betting experience, we offer competitive odds and
              a user-friendly interface. Our intuitive platform allows you to
              place bets effortlessly and enjoy seamless navigation.
              Additionally, our live betting feature enables you to bet in
              real-time, adding excitement and anticipation to every game.
            </dd>
          </div>
          <div>
            <dt>Generous Promotions and Bonuses for Our Valued Customers</dt>
            <dd>
              To reward our valued customers, we offer generous promotions and
              bonuses. From welcome offers to loyalty programs, we make sure
              you're always rewarded for your loyalty and dedication. Keep an
              eye on our promotions page to take advantage of exclusive deals
              and special offers.
            </dd>
          </div>
          <div>
            <dt>Promoting Responsible Gambling and Providing Support</dt>
            <dd>
              We take responsible gambling seriously and promote a safe and
              enjoyable environment for all our users. We provide tools and
              resources to help you stay in control of your gambling habits,
              including deposit limits, self-exclusion options, and links to
              professional support organizations.
            </dd>
          </div>
          <div>
            <dt>24/7 Customer Support for a Seamless Experience</dt>
            <dd>
              Our customer support team is available around the clock to assist
              you with any queries or concerns you may have. We strive to
              deliver excellent customer service, ensuring that your experience
              with us is smooth and hassle-free.
            </dd>
          </div>
          <div>
            <dt>
              Join <span className='bookie-name'>BETWAVE</span> for an
              Unforgettable Betting Journey
            </dt>
            <dd>
              Join us at <span className='bookie-name'>BETWAVE</span> today and
              embark on an unforgettable journey filled with thrilling sports
              betting, exciting casino games, and incredible promotions. Place
              your bets with confidence and let us take your online gambling
              experience to new heights.
            </dd>
          </div>
          <h3>Place your bets responsibly. Gamble responsibly.</h3>
        </dl>
      </div>
      <div id='sponsors'>
        <div className='sponsors-wrapper'>
          <h2>Sponsors</h2>
          <div className='sponsors-container'>
            <Image
              height={75}
              width={300}
              src='\sponsors\logo-color-1.svg'
              alt='Apex Sports Club'
            />
            <Image
              height={75}
              width={300}
              src='\sponsors\logo-color-2.svg'
              alt='Victory Financial Group'
            />
            <Image
              height={75}
              width={300}
              src='\sponsors\logo-color-3.svg'
              alt='Elite Gaming Solutions'
            />
            <Image
              height={75}
              width={300}
              src='\sponsors\logo-color-4.svg'
              alt='Phoenix Insurance Agency'
            />
            <Image
              height={75}
              width={300}
              src='\sponsors\logo-color-5.svg'
              alt='Golden Star Sports Management'
            />
            <Image
              height={75}
              width={300}
              src='\sponsors\logo-color-6.svg'
              alt='Sapphire Investments Ltd.'
            />
          </div>
        </div>
      </div>
      <footer className='footer-navbar-styler'>
        <div className='footer-wrapper'>
          <div>
            <LogoBetWave />
          </div>
          <MediaLinks measurements={'24px'} />
        </div>
      </footer>
    </>
  );
};
// CreateMatch();
async function CreateMatch() {
  const count = await prisma.match.count();
  if (count === 2) {
    console.log('FOUND 2 MATCHES');
    const Deletemany = await prisma.match.deleteMany();
    const res2 = await prisma.match.createMany({
      data: [
        {
          matchDate: new Date('2023-07-04, 14:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'Australia',
          opponentTwoName: 'Anglia',
          opponentOneOdds: 4.2,
          opponentTwoOdds: 1.23,
          eventId: '5',
        },
        {
          matchDate: new Date('2023-09-11, 02:15:00'),
          matchState: 'upcoming',
          opponentOneName: 'New York Jets',
          opponentTwoName: 'Buffalo',
          opponentOneOdds: 2.08,
          opponentTwoOdds: 1.64,
          eventId: '8',
        },
        {
          matchDate: new Date('2023-09-10, 19:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'Minnesota',
          opponentTwoName: 'Tampa Bay',
          opponentOneOdds: 1.39,
          opponentTwoOdds: 3.4,
          eventId: '8',
        },
        {
          matchDate: new Date('2023-09-10, 19:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'Cleveland',
          opponentTwoName: 'Cincinnati',
          opponentOneOdds: 2.2,
          opponentTwoOdds: 1.8,
          eventId: '8',
        },
        {
          matchDate: new Date('2023-09-10, 19:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'New Orleans',
          opponentTwoName: 'Tennessee',
          opponentOneOdds: 1.55,
          opponentTwoOdds: 2.7,
          eventId: '8',
        },
        {
          matchDate: new Date('2023-07-07, 01:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'Jamajka',
          opponentTwoName: 'Sw. Krzysztof i Nevis',
          opponentOneOdds: 1.01,
          opponentTwoOdds: 80,
          eventId: '6',
        },
        {
          matchDate: new Date('2023-09-11, 02:20:00'),
          matchState: 'upcoming',
          opponentOneName: 'New York Giants',
          opponentTwoName: 'Dallas ',
          opponentOneOdds: 2.44,
          opponentTwoOdds: 1.66,
          eventId: '8',
        },
        {
          matchDate: new Date('2023-07-09, 03:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'Kostaryka',
          opponentTwoName: 'Martynika',
          opponentOneOdds: 1.6,
          opponentTwoOdds: 5.4,
          eventId: '6',
        },
        {
          matchDate: new Date('2023-07-04, 11:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'Włochy',
          opponentTwoName: 'Gruzja',
          opponentOneOdds: 1.51,
          opponentTwoOdds: 2.65,
          eventId: '5',
        },
        {
          matchDate: new Date('2023-07-04, 11:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'RPA',
          opponentTwoName: 'Argentyna',
          opponentOneOdds: 1.15,
          opponentTwoOdds: 5.4,
          eventId: '5',
        },
        {
          matchDate: new Date('2023-07-07, 19:30:00'),
          matchState: 'upcoming',
          opponentOneName: 'Francja',
          opponentTwoName: 'Ukraina',
          opponentOneOdds: 1.64,
          opponentTwoOdds: 5.2,
          eventId: '1',
        },
        {
          matchDate: new Date('2023-07-07, 01:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'USA',
          opponentTwoName: 'Trynidad i Tobago',
          opponentOneOdds: 1.12,
          opponentTwoOdds: 18,
          eventId: '6',
        },
        {
          matchDate: new Date('2023-09-10, 19:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'Atlanta',
          opponentTwoName: 'Carolina',
          opponentOneOdds: 1.69,
          opponentTwoOdds: 2.41,
          eventId: '8',
        },
        {
          matchDate: new Date('2023-09-10, 22:25:00'),
          matchState: 'upcoming',
          opponentOneName: 'Cicago Bears',
          opponentTwoName: 'Green Bay',
          opponentOneOdds: 1.75,
          opponentTwoOdds: 2.29,
          eventId: '8',
        },
        {
          matchDate: new Date('2023-07-05, 19:30:00'),
          matchState: 'upcoming',
          opponentOneName: 'Anglia',
          opponentTwoName: 'Portugalia',
          opponentOneOdds: 1.93,
          opponentTwoOdds: 4,
          eventId: '1',
        },
        {
          matchDate: new Date('2023-09-10, 19:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'Washington',
          opponentTwoName: 'Arizona',
          opponentOneOdds: 1.44,
          opponentTwoOdds: 3.15,
          eventId: '8',
        },
        {
          matchDate: new Date('2023-07-09, 03:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'Panama',
          opponentTwoName: 'Salwador',
          opponentOneOdds: 1.96,
          opponentTwoOdds: 3.75,
          eventId: '6',
        },
        {
          matchDate: new Date('2023 -09-10, 22:25:00'),
          matchState: 'upcoming',
          opponentOneName: 'Denver Broncos',
          opponentTwoName: 'Las Vegas',
          opponentOneOdds: 1.57,
          opponentTwoOdds: 2.7,
          eventId: '8',
        },
        {
          matchDate: new Date('2023-07-07, 03:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'Honduras',
          opponentTwoName: 'Haiti',
          opponentOneOdds: 2.31,
          opponentTwoOdds: 3,
          eventId: '6',
        },
        {
          matchDate: new Date('2023-09-10, 22:25:00'),
          matchState: 'upcoming',
          opponentOneName: 'Seattle',
          opponentTwoName: 'LA Rams',
          opponentOneOdds: 1.43,
          opponentTwoOdds: 3.15,
          eventId: '8',
        },
        {
          matchDate: new Date('2023-19-04 15:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'Pheonix Mercury',
          opponentTwoName: 'Minnesota Lynx',
          opponentOneOdds: 1.77,
          opponentTwoOdds: 1.99,
          eventId: '4',
        },
        {
          matchDate: new Date('2023-09-10, 19:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'Indianapolis',
          opponentTwoName: 'Jacksonville',
          opponentOneOdds: 2.5,
          opponentTwoOdds: 1.64,
          eventId: '8',
        },
        {
          matchDate: new Date('2023-09-08, 02:20:00'),
          matchState: 'upcoming',
          opponentOneName: 'Kansas',
          opponentTwoName: 'Detroit',
          opponentOneOdds: 1.38,
          opponentTwoOdds: 3.35,
          eventId: '8',
        },
        {
          matchDate: new Date('2023-09-10, 22:25:00'),
          matchState: 'upcoming',
          opponentOneName: 'LA Chargers',
          opponentTwoName: 'Miami',
          opponentOneOdds: 1.77,
          opponentTwoOdds: 2.23,
          eventId: '8',
        },
        {
          matchDate: new Date('2023-07-09, 01:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'Kanada',
          opponentTwoName: 'Kuba',
          opponentOneOdds: 1.16,
          opponentTwoOdds: 13,
          eventId: '6',
        },
        {
          matchDate: new Date('2023-09-10, 19:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'Baltimore',
          opponentTwoName: 'Houston',
          opponentOneOdds: 1.26,
          opponentTwoOdds: 4.5,
          eventId: '8',
        },
        {
          matchDate: new Date('2023-07-04, 14:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'Australia U20',
          opponentTwoName: 'Anglia U20',
          opponentOneOdds: 4.2,
          opponentTwoOdds: 1.23,
          eventId: '7',
        },
        {
          matchDate: new Date('2023-07-03, 19:30:00'),
          matchState: 'upcoming',
          opponentOneName: 'Hiszpania',
          opponentTwoName: 'Szwajcaria',
          opponentOneOdds: 1.4,
          opponentTwoOdds: 7.4,
          eventId: '1',
        },
        {
          matchDate: new Date('2023-07-07, 03:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'Meksyk',
          opponentTwoName: 'Katar',
          opponentOneOdds: 1.34,
          opponentTwoOdds: 7.4,
          eventId: '6',
        },
        {
          matchDate: new Date('2023-08-16, 21:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'Manchester City',
          opponentTwoName: 'Sevilla',
          opponentOneOdds: 1.39,
          opponentTwoOdds: 7.4,
          eventId: '2',
        },
        {
          matchDate: new Date('2023-07-04, 11:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'Włochy U20',
          opponentTwoName: 'Gruzja U20',
          opponentOneOdds: 1.51,
          opponentTwoOdds: 2.65,
          eventId: '7',
        },
        {
          matchDate: new Date('2023-09-10, 22:25:00'),
          matchState: 'upcoming',
          opponentOneName: 'New England',
          opponentTwoName: 'Philadelphia',
          opponentOneOdds: 2.75,
          opponentTwoOdds: 1.54,
          eventId: '8',
        },
        {
          matchDate: new Date('2023-07-09, 01:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'Guadelupa',
          opponentTwoName: 'Gwantemala',
          opponentOneOdds: 4.5,
          opponentTwoOdds: 1.8,
          eventId: '6',
        },
        {
          matchDate: new Date('2023-07-05, 03:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'Las Vegas Aces',
          opponentTwoName: 'Conntecticut Sun',
          opponentOneOdds: 1.12,
          opponentTwoOdds: 5.2,
          eventId: '4',
        },
        {
          matchDate: new Date('2023-09-10, 19:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'Pitsburgh ',
          opponentTwoName: 'San Francisco ',
          opponentOneOdds: 2.35,
          opponentTwoOdds: 1.73,
          eventId: '8',
        },
        {
          matchDate: new Date('2023-09-11, 21:00:00'),
          matchState: 'upcoming',
          opponentOneName: 'RPA U20',
          opponentTwoName: 'Argentyna U20',
          opponentOneOdds: 1.15,
          opponentTwoOdds: 5.4,
          eventId: '7',
        },
        {
          matchDate: new Date('2023-07-01, 19:30:00'),
          matchState: 'upcoming',
          opponentOneName: 'Gruzja',
          opponentTwoName: 'Izreal',
          opponentOneOdds: 1.9,
          opponentTwoOdds: 2,
          eventId: '1',
        },
      ],
    });
  } else {
    console.log('MATRCHES FOUND');
  }
}

export default Footer;
