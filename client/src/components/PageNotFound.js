/** @format */

import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { MdErrorOutline } from 'react-icons/md';
import { BsArrowLeftShort } from "react-icons/bs";
import { Jumbotron, Button } from 'react-bootstrap';
function PageNotFound() {
  const location = useLocation();
  const history = useHistory();
  // console.log(location);
  return (
    <Jumbotron className='notFoundPage'>
      <MdErrorOutline size='150px' />
      <h1 style={{fontSize:'100px'}}>Error 404</h1>
      <h2>Sorry about that, page "{location.pathname}" doesn't exist!</h2>
      <BsArrowLeftShort size='60px' />
      <Button variant='dark' onClick={()=>{history.push('/')}}>Back to Home</Button>
    </Jumbotron>
  );
}

export default PageNotFound;
