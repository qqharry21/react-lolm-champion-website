/** @format */

import React, { useState, useEffect, useRef } from 'react';
import { Image, Overlay, Tooltip } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

function Type(data) {
  const [showType, setShowType] = useState(false);
  const [typeName, setTypeName] = useState('');
  const [isShown, setIsShown] = useState(false);
  const target = useRef(null);

  const type1 = data.types[0];
  const type2 = data.types[1];

  useEffect(() => {
    if (!(type2 === undefined)) {
      setShowType(true);
      setTypeName('/' + type2.tname);
    }
  }, [type2]);

  return (
    <Zoom left>
      <div className='col-10 mx-auto col-lg-4 typeCol'>
        <div className='typeContainer shadow-lg'>
          <div className='typeImg'>
            <Image src={`${type1.t_img}`} />
            {showType ? (
              <Image src={`${type2.t_img}`} style={{ marginLeft: '10px' }} />
            ) : null}
          </div>
          <div
            className='typeText'
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            ref={target}
          >
            {`${type1.tname}`}
            {showType ? typeName : null}
          </div>
        </div>
        {isShown && (
          <Overlay target={target.current} show={isShown} placement='bottom'>
            {(props) => (
              <Tooltip id='overlay' className='typeTooltip' {...props}>
                {`${type1.t_desc}`}
                <br />
                <br />
                {showType ? type2.t_desc : null}
              </Tooltip>
            )}
          </Overlay>
        )}
      </div>
    </Zoom>
  );
}

export default Type;
