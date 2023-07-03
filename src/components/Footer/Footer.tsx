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

export default Footer;
