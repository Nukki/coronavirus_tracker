import React, { useState, memo } from 'react';
import {
  Smol,
  Wrapper,
  DataWrapper,
  JustifyCenter,
  DateWrapper,
  MiddleWrapper,
  Label,
  Date
} from './styled';
import { Tiny } from '../Text/annotation';

const getTotals = dataObj => {
  let conf = 0;
  let rec = 0;
  let dea = 0;
  for (let key in dataObj) {
    conf += dataObj[key].confirmed;
    rec += dataObj[key].recovered;
    dea += dataObj[key].deaths;
  }
  return [conf, rec, dea];
}

const parseDate = date => {
  const arr = date.split('/');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[parseInt(arr[0]) - 1]} ${arr[1]}`
}

const TotalsPanel = ({ data, date, map }) => {
  const [confirmed, recovered, deaths] = getTotals(data);
  const diamondPrincess = data['Others'];
  return (
    <Wrapper>
      <DateWrapper>
        <Smol>Date:</Smol>
        <Date> {parseDate(date)}</Date>
      </DateWrapper>
      <MiddleWrapper>
        <Label><u>Infection Totals</u></Label>
        <JustifyCenter>
          <Smol>Confirmed: {confirmed}</Smol>
          <Smol>Recovered: {recovered}</Smol>
          <Smol>Deaths: {deaths}</Smol>
        </JustifyCenter>
      </MiddleWrapper>
      { diamondPrincess && map === 'world' ? (
        <DataWrapper>
          <Label> <u>Diamond Princess</u></Label>
          <JustifyCenter>
            <Smol>Infected: {data['Others'].confirmed}</Smol>
            <Smol>Recovered: {data['Others'].recovered}</Smol>
            <Smol>Deaths: {data['Others'].deaths}</Smol>
          </JustifyCenter>
        </DataWrapper>
      ) : null
      }
      { diamondPrincess && map === 'us' ? (
        <DataWrapper>
          <Label> <u>Unknown Location</u> <Tiny>(from Diamond Princess)</Tiny></Label>
          <JustifyCenter>
            <Smol>Infected: {data['Others'].confirmed}</Smol>
            <Smol>Recovered: {data['Others'].recovered}</Smol>
            <Smol>Deaths: {data['Others'].deaths}</Smol>
          </JustifyCenter>
        </DataWrapper>
      ) : null
      }
    </Wrapper>
  );
}
export default memo(TotalsPanel);
