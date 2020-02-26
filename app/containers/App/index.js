import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import UsaMap from 'containers/UsaMap/Loadable';
import WorldMap from 'containers/WorldMap/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';
import { withTracker } from '../../withTracker';

const AppWrapper = styled.article`
  margin: 0;
  display: flex;
  min-height: 100vh;
  background-color: black;
  color: #ff4500;
  flex-direction: column;
  justify-content: space-between;
`;

export default () => {
  const [map, setMap] = useState('');
  return (
    <AppWrapper>
      <Header map={map} />
      <Switch>
        <Route exact path="/" component={ withTracker(() => <WorldMap setMap={setMap}/>) } />
        <Route path="/usa" component={ withTracker(() => <UsaMap setMap={setMap}/>) } />
        <Route path="" component={ withTracker(NotFoundPage) } />
      </Switch>
      <Footer />
    </AppWrapper>
  );
}
