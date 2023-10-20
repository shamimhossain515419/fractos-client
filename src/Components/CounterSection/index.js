'use client';
import React from 'react';
import CountUp, { CountUpProps } from 'react-countup'

const Counter = ({ end }) => {
  return (
    <CountUp end={end} duration={5} />
  );
};

export default Counter;
