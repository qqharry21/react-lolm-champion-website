/** @format */

import { React, useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Logo } from '../logo.svg';

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const history = useHistory();
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
      sticky='top'
      expanded={expanded}
    >
      <Logo className='App-logo' alt='logo' strokeWidth='1px' />
      <Navbar.Toggle
        aria-controls='responsive-navbar-nav'
        onClick={() => {
          setExpanded(!expanded);
        }}
      />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link
            onClick={() => {
              setExpanded(false);
              history.push('/');
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              setExpanded(false);
              history.push('/champions');
            }}
          >
            Champions
          </Nav.Link>
          {/* <Nav.Link
            onClick={() => {
              setExpanded(false);
              history.push('/equipments');
            }}
          >
            Equipments
          </Nav.Link> */}
          <NavDropdown title='About us' id='collasible-nav-dropdown'>
            <NavDropdown.Item
              onClick={() => {
                setExpanded(false);
                history.push('/about');
              }}
            >
              About
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                setExpanded(false);
                history.push('/test');
              }}
            >
              Test PageNotFound
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
        {/* <Form inline>
          <FormControl type='text' placeholder='Search..' className='mr-sm-2' />
          <Button variant='outline-success'>Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
