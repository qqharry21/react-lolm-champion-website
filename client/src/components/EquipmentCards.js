/** @format */

import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Flip from 'react-reveal/Flip';

export default function Champions(data) {
  // const history = useHistory();

  return (
    <Flip left>
      <Card
        className='championContainer shadow-lg'
        key={data.eid}
        // onClick={() => {
        //   history.push(
        //     `/champions_detail/id=${data.cid}&${data.cname_eng}`,
        //     {}
        //   );
        // }}
      >
        <Card.Img className='championImg' variant='top' src={data.e_img} />
        <Card.Body className='champion' style={{ height: '121px' }}>
          <Card.Title
            className='championName'
            style={{ textShadow: '2px 2px 8px var(--mainDark)' }}
          >
            {data.ename}
          </Card.Title>
        </Card.Body>
        <Card.Footer className='championType'>
          <hr className='hr' />
          <small className='championTypeText '>{data.e_type}</small>
        </Card.Footer>
      </Card>
    </Flip>
  );
}

// export default Champions;
