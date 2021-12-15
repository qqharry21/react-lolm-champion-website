/** @format */

import { React } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function Description(data) {
  const desc = data.desc;
  return (
    <div className='storyContainer col-lg-7 text-lg-start'>
      <Zoom cascade>
        <h1 className='storyTitle display-4 fw-bold lh-1 mb-3'>英雄背景</h1>
      </Zoom>
      <Fade cascade>
        <p className='storyText col-lg-10 fs-4'>{`${desc}`}</p>
      </Fade>
    </div>
  );
}

export default Description;
