/** @format */

import React from 'react';
import { Image } from 'react-bootstrap';

function DetailHeader(data) {
  const name = data.name;
  const nameEng = data.nameEng;
  const img = data.headerImg;

  return (
    <div className='px-4 pt-5 text-center headerBackGround'>
      <div className='display-4 fw-bold headerName'>{`${name}`}</div>
      <div className='col-lg-6 mx-auto headerNameEng text-uppercase'>
        {`${nameEng}`}
      </div>
      <div className='headerImgContainer'>
        <div className='container px-1'>
          <Image
            className='headerImg rounded-3 shadow-md mb-4'
            src={`${img}`}
          />
        </div>
      </div>
    </div>
  );
}
export default DetailHeader;
