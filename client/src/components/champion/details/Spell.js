/** @format */

import React from 'react';
import { Image, OverlayTrigger, Popover } from 'react-bootstrap';
import { GiUnstableOrb } from 'react-icons/gi';
import Bounce from 'react-reveal/Bounce';

function Spell(data) {
  const spells = data.spells;

  return (
    <Bounce left>
      <div className=' col-lg-4 h-100 p-5 shadow rounded-3 spellContainer'>
        <h2 style={{ color: 'var(--mainLightGrey)' }}>
          <GiUnstableOrb
            size='40px'
            style={{ paddingBottom: '8px', marginRight: '10px' }}
          />
          召喚師技能
        </h2>
        {spells.map((val, key) => {
          const popover = (
            <Popover id='popover-basic'>
              <Popover.Title as='h3'>{`${val.sp_name}`}</Popover.Title>
              <Popover.Content>
                <p dangerouslySetInnerHTML={{ __html: val.sp_coldtime }}></p>
                <p dangerouslySetInnerHTML={{ __html: val.sp_desc }}></p>
              </Popover.Content>
            </Popover>
          );
          return (
            <OverlayTrigger
              delay={{ show: 200, hide: 100 }}
              placement='bottom'
              key={val.sp_id}
              overlay={popover}
            >
              <Image
                roundedCircle
                style={{
                  width: '70px',
                  height: '70px',
                  marginLeft: '10px',
                  marginRight: '5px',
                  marginTop: '35px',
                }}
                src={`${val.sp_img}`}
              />
            </OverlayTrigger>
          );
        })}
      </div>
    </Bounce>
  );
}

export default Spell;
