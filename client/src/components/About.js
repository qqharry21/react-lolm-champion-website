/** @format */

import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function About() {
  return (
    <Jumbotron className='aboutPage'>
      <div className='mb-auto h1' style={{ fontSize: '80px' }}>
        組員
      </div>
      <div className='mt-auto'>
        <h3>陳泉豪 &nbsp;&nbsp; 馮聖淳</h3>
        <h3>林清峰 &nbsp;&nbsp; 王泓壬</h3>
      </div>
    </Jumbotron>
  );
}

export default About;
