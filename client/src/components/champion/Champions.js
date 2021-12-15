/** @format */

import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Flip from 'react-reveal/Flip';

export default function Champions(data) {
  const history = useHistory();

  if (data.tname2 !== null) {
    var type = '/' + data.tname2;
  }
  return (
    <Flip left>
      <Card
        className='championContainer shadow-lg'
        key={data.cid}
        onClick={() => {
          history.push(`/champions_detail/id=${data.cid}&${data.cname_eng}`, {
            cId: `${data.cid}`,
            cName: `${data.cname}`,
            cName_eng: `${data.cname_eng}`,
            cType1: `${data.c_type1}`,
            cTypeName1: `${data.tname}`,
            cType2: `${data.c_type2}`,
            cTypeName2: `${data.tname2}`,
            img: `${data.c_img}`,
            desc: `${data.c_desc}`,
          });
        }}
      >
        <Card.Img className='championImg' variant='top' src={data.c_img} />
        <Card.Body className='champion'>
          <Card.Title
            className='championName'
            style={{ textShadow: '2px 2px 8px var(--mainDark)' }}
          >
            {data.cname}
          </Card.Title>
          <Card.Text
            className='championEngName'
            style={{ textShadow: '2px 2px 8px var(--mainDark)' }}
          >
            {data.cname_eng}
          </Card.Text>
        </Card.Body>
        <Card.Footer className='championType'>
          <hr className='hr' />
          <small className='championTypeText '>
            {data.tname}
            {type}
          </small>
        </Card.Footer>
      </Card>
    </Flip>
  );
}

// export default Champions;
