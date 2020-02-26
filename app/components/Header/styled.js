import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderLink = styled(Link)`
  display: inline-flex;
  padding: 0.2em 2em;
  margin: 0.3em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Tomorrow','Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 1px solid #ff4500;
  color: #ff4500;

  &:active {
    background: #ff4500;
    color: #232732;
  }
`;

export const HeaderLinkActive = styled(Link)`
  display: inline-flex;
  padding: 0.2em 2em;
  margin: 0.3em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Tomorrow','Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  background: #ff4500;

  color: #232732;
`;

export const LinkWrapper = styled.div`
 display: inline-flex;
`;

export const Title = styled.div`
  display: inline-flex;
  /* padding: 0.25em 2em; */
  padding-right: 20px;
  margin: 0.3em;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  font-family: 'Tomorrow','Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 1.6em;
  @media (max-width: 770px) {
    margin-top: 16px;
    margin-bottom: 16px;
    font-size: 1em;
    padding-right: 0;
  }
`;

export const NavBar = styled.div`
  text-align: center;
  padding: 16px 5vw;
  padding-bottom: 0;
  color: #ff4500;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 770px) {
    /* margin-top: 16px; */
    font-size: 1.23em;
    flex-direction: column;
  }
`;
