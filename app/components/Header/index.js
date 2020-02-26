import React, { Component } from 'react';
import { NavBar, Title, LinkWrapper, HeaderLink, HeaderLinkActive } from './styled';

const Header = ({ map }) => {
  return (

    <NavBar>
      <Title> Coronavirus COVID-19 Tracker</Title>
      <div>
      { map === 'world' ? (
          <LinkWrapper>
            <HeaderLinkActive to="/">World</HeaderLinkActive>
            <HeaderLink to="/usa" >USA</HeaderLink>
          </LinkWrapper>
        ) : (
          <LinkWrapper>
            <HeaderLink to="/">World</HeaderLink>
            <HeaderLinkActive to="/usa">USA</HeaderLinkActive>
          </LinkWrapper>
        ) }
        </div>
      </NavBar>

  );
}

export default Header;
