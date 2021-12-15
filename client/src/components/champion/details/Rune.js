/** @format */

import React from 'react';
import { Image, OverlayTrigger, Popover } from 'react-bootstrap';
import { GiBurningEmbers } from 'react-icons/gi';
import Bounce from 'react-reveal/Bounce';

function Rune(data) {
  const runes = data.runes;

  return (
    <Bounce right>
      <div className='col-lg-7 h-100 p-5 text-white shadow-lg rounded-3 runeContainer'>
        <h2 style={{ color: 'var(--mainDarker)' }}>
          <GiBurningEmbers size='40px' style={{ paddingBottom: '8px' }} />
          &nbsp; 符文
        </h2>
        {runes.map((val, key) => {
          var desc = val.r_desc;
          var descSubTitle = desc.split('<br>/', 1).shift();
          var descContent = desc.split('<br>/').pop();
          const popover = (
            <Popover id='popover-basic'>
              <Popover.Title as='h3'>
                {`${val.rname}`}
                &nbsp;
                <p
                  style={{ padding: '0px', margin: '0px', display: 'inline' }}
                  dangerouslySetInnerHTML={{ __html: descSubTitle }}
                ></p>
              </Popover.Title>
              <Popover.Content>
                <p dangerouslySetInnerHTML={{ __html: descContent }}></p>
              </Popover.Content>
            </Popover>
          );
          return (
            <OverlayTrigger
              delay={{ show: 200, hide: 1500 }}
              placement='bottom'
              key={val.rid}
              overlay={popover}
            >
              <Image
                roundedCircle
                style={{
                  width: '70px',
                  height: '70px',
                  marginLeft: '15px',
                  marginRight: '5px',
                  marginTop: '35px',
                }}
                src={`${val.r_img}`}
              />
            </OverlayTrigger>
          );
        })}
      </div>
    </Bounce>
  );
}

export default Rune;
