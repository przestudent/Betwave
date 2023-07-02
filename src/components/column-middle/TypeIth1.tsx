'use client';
import { FC } from 'react';
import TypeIt from 'typeit-react';

const TypeItH1: FC = () => {
  return (
    <h1>
      <TypeIt
        options={{
          strings: ['Sail the Waves of Winning with Betwave.com!'],
          speed: 150,
          waitUntilVisible: true,
          loop: true,
          lifeLike: true,
          deleteSpeed: 50,
          startDelay: 200,
          cursorChar: '🌊',
        }}
      />
    </h1>
  );
};

export default TypeItH1;
