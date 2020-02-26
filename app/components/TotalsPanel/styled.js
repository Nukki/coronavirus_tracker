import styled from 'styled-components';

export const Smol = styled.div`
  font-size: 0.9em;
  @media (max-width: 770px) {
    font-size: 0.6em;
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 770px) {
    width: 26%;
  }
`;

export const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 770px) {
    width: 37%;
  }
`;

export const JustifyCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 770px) {
    width: 37%;
  }
`;

export const Wrapper = styled.div`
  background-color: #141414;
  border: 1px solid #7a290e;
  padding: 16px;
  height: 70vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 770px) {
    width: 92vw;
    height: 15vh;
    padding: 16px 7px 16px 20px;
    flex-direction: row;
    align-items: center;
  }
`;

export const Label = styled.div`
  font-size: 1em;
  margin-bottom: 5px;
  @media (max-width: 770px) {
    font-size: 0.7em;
  }
`;

export const Date = styled.div`
  font-size: 2em;
  @media (max-width: 770px) {
    font-size: 1em;
  }
`;
