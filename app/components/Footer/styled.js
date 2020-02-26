import styled from 'styled-components';

export const A = styled.a`
  color: #ff4500;
  &:hover {
    color: #ff4500;
  }
`;

export const Wrapper = styled.footer`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding: 0.5em 0;
  align-items: center;
  height: 20vh;
  font-family: 'Tomorrow','Helvetica Neue', Helvetica, Arial, sans-serif;
  @media (max-width: 770px) {
    flex-direction: column;
    justify-content: center;
    height: 13vh;
  }
`;

export const SmallSection = styled.section`
  font-size: 0.9em;
  @media (max-width: 770px) {
    font-size: 0.7em;
  }
`;

export const BigSection = styled.section`
  font-size: 0.9em;
  @media (max-width: 770px) {
    margin-bottom: 12px;
    font-size: 0.7em;
  }
`;
