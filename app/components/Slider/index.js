import React, { useState, useEffect, memo } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import { Styled } from './styled';

const DateSlider = ({ data, setCurDay }) => {
  const [value, setValue] = useState(0);
  const labels = {
    0: data[0],
    30: data[data.length -1],
  }
  const onChangeHandle = (val, e) => {
    setValue(val);
    setCurDay(val);
  }
  return (
    <Styled>
      { data.length > 0 && <Slider
        min={0}
        max={data.length - 1}
        value={value}
        onChange={onChangeHandle}
        tooltip={false}
      />}

    </Styled>
  )
}

export default memo(DateSlider);
