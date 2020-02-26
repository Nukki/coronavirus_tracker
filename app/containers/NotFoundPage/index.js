import React from 'react';
import styled from 'styled-components';
import Toxic from './toxic';

const Warning = styled.h1`
  font-size: 2em;
  margin-bottom: 0.7em;
  color: #f51f49;
`;

const NotFoundContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function NotFound() {
  return (
    <NotFoundContainer>
      <Warning>Page Not Found</Warning>
      <Toxic />
    </NotFoundContainer>
  );
}
