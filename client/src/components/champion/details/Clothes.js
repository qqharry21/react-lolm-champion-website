/** @format */

import React from 'react';
import { Carousel } from 'react-bootstrap';
import { AiFillSkin } from 'react-icons/ai';
import Roll from 'react-reveal/Roll';
function Clothes(data) {
  const clothes = data.clothes;
  return (
    <div className='container col-xl-10  clothesContainer' id='hanging-icons'>
      <Roll cascade>
        <h1 className='pb-1 border-bottom clothesTitle'>
          <AiFillSkin style={{ marginBottom: '8px' }} /> 英雄造型
        </h1>
      </Roll>
      <div className='g-5 py-4'>
        <Carousel style={{ margin: 'auto' }}>
          {clothes.map((val, key) => {
            return (
              <Carousel.Item key={key}>
                <img
                  className='d-block w-100'
                  src={`${val.cl_img}`}
                  alt={`${val.clname}`}
                />
                <Carousel.Caption>
                  <h3
                    style={{
                      color: "var(--mainWhite)",
                      textShadow: "2px 2px 8px var(--mainDark)",
                    }}
                  >{`${val.clname}`}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Clothes;
