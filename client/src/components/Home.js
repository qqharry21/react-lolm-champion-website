/** @format */

import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    document.title = 'LOLM Game Strategy';
  }, []);
  return (
    <div className='homePage'>
      <div className='px-4 pt-4 text-center homeBackGround'>
        <div className='display-4 fw-bold homeTitle'>LOLM 手遊攻略網</div>
      </div>
    </div>
  );
}

export default Home;
