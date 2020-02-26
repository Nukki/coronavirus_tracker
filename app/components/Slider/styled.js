import styled from 'styled-components';

export const Styled = styled.div`
  .rangeslider-horizontal {
    height: 5px;
    background: black;
    border: 1px solid #7a290e;
    margin: 15px;
    width: 60vw;
    -webkit-touch-callout: none;
    user-select: none;
    @media (max-width: 700px) {
      width: 50vw;
    }
  }
  .rangeslider__label-item {
    width: 70px;
  }
  .rangeslider-horizontal .rangeslider__fill {
    background-color: #7a290e;
  }
  .rangeslider .rangeslider__handle {
    cursor: grab;
    border: 1px solid #ff4500;
    background: black;
    width: 20px;
    height: 20px;
    outline: none !important;
  }
  .rangeslider-horizontal .rangeslider__handle:after {
    width: 10px;
    height: 10px;
    top: 4px;
    left: 4px;
    background-color: #ff4500;
    box-shadow: none;
  }
`;
