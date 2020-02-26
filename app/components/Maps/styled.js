import styled from 'styled-components';

export const oranges = [
  '#2D1408',
  '#401807',
  '#531D07',
  '#662106',
  '#792605',
  '#8C2A04',
  '#A02F04',
  '#B33303',
  '#C63802',
  '#D93C01',
  '#EC4101',
  '#FF4500'
];

export const yellowOranges = [
  '#202000',
  '#3C3C00',
  '#585800',
  '#747400',
  '#909000',
  '#ABAB00',
  '#C7C700',
  '#E3E300',
  '#FFFF00',
  '#FFEA00',
  '#FFD800',
  '#FFC500',
  '#FFB300',
  '#FFA100',
  '#FF8E00',
  '#FF7C00',
  '#FF6A00',
  '#FF5700',
  '#FF4500'
]

export const VizWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Tomorrow','Helvetica Neue', Helvetica, Arial, sans-serif;
  @media (max-width: 770px) {
     flex-direction: column;
     justify-content: center;
     align-items: center;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4vh 0;
  @media (max-width: 770px) {
    margin: 3vh 0;
  }
`;


export const MapWrapper = styled.div`
  input:focus, textarea:focus, select:focus{
      outline: none;
  }
  max-height: 100vh;
  overflow: crop;
  display: flex;
  justify-content: center;
  .rsm-svg {
    display: inline-block;
    vertical-align: middle;
    height: 70vh;
    width: 60vw;
    border: 1px solid #7a290e;
    background-color: #141414;
    /* background-color: #0C0C0C; */
    @media (max-width: 770px) {
      height: 40vh;
      width: 92vw;
    }

  }

`;

export const Label = styled.div`
  font-size: 1em;
  font-family: 'Tomorrow','Helvetica Neue', Helvetica, Arial, sans-serif;
  @media (max-width: 770px) {
    font-size: 0.8em;
  }

`;
