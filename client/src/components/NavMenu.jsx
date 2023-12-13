import React from 'react';
import Nav from 'react-bootstrap/Nav';

const NavMenu = () => {
  return (
    <Nav activeKey="/" style={{ backgroundColor: 'hotpink' }} as="ul">
      <Nav.Item as="li">
        <Nav.Link style={{ color: '#fff' }} href="/">
          FoodHouse
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link style={{ color: '#fff' }} href="/about">
          About Us
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link style={{ color: '#fff' }}>Recipe of the Day</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavMenu;
