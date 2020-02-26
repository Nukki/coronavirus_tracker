import React, { useState, memo } from 'react';
import { scaleLog } from 'd3-scale';
import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';
import DateSlider from '../Slider';
import TotalsPanel from '../TotalsPanel';
import { SliderWrapper, VizWrapper, MapWrapper, Label } from './styled';


// const colorScale = scaleLinear()
//   .domain([0, 100000])
//   .range(["#2d1408", "#ff4500"]);
const colorScale = scaleLog()
  .domain([1, 100000])
  .range(['#1C0800', '#FF4500']); // faed27

const UsaMap = ({ data, setTooltipContent, stateMap }) => {
  const [curDay, setCurDay] = useState(0);
  const days = Object.keys(data);
  const topoJson='https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';
  const projection='geoAlbersUsa';

  return (
    <div>
      <SliderWrapper>
        <Label>{days[0]}</Label>
        <DateSlider data={days} setCurDay={setCurDay}/>
        <Label>{days[days.length - 1]}</Label>
      </SliderWrapper>

      <VizWrapper>
        <TotalsPanel map='us' data={data[days[curDay]]} date={days[curDay]} />
        <MapWrapper>
          <ComposableMap
            data-tip=""
            projection={projection}
          >
          { Object.keys(data).length > 0 && (
            <Geographies geography={topoJson}>
            {({ geographies }) =>
                geographies.map(geo => {
                  let day = data[days[curDay]];
                  let name = '';
                  let confirmed = 0;
                  let recovered = 0;
                  let deaths = 0;
                  if (stateMap) {
                    const stateId = stateMap.find(s => s.val === geo.id).id;
                    if (day[stateId]) {
                      confirmed = day[stateId].confirmed;
                      recovered = day[stateId].recovered;
                      deaths = day[stateId].deaths;
                    }
                    name = geo.properties.name;
                  } else {
                    name = geo.properties.name;
                    if (!day[name]) {
                      const othername = countries.find(c => c.inMap === name);
                      if (othername && day[othername.inData]) {
                        name = othername.inData;
                        confirmed = day[name].confirmed;
                        recovered = day[name].recovered;
                        deaths = day[name].deaths;
                      }
                    } else {
                      confirmed = day[name].confirmed;
                      recovered = day[name].recovered;
                      deaths = day[name].deaths;
                    }
                  }

                  return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      setTooltipContent(`
                        ${name} <br />
                        confirmed: ${confirmed}  <br />
                        recovered: ${recovered}  <br />
                        deaths: ${deaths}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    style={{
                      default: {
                        fill: `${confirmed ? colorScale(confirmed) : "black"}`,
                        stroke: "#f25e3b",
                        strokeWidth: '0.2',
                      },
                      hover: {
                        fill: "#ff7440",
                        outline: "none"
                      },
                      pressed: {
                        fill: "#ff4500",
                        outline: "none"
                      }
                    }}
                  />
                )})
              }
            </Geographies>
          )}
        </ComposableMap>
      </MapWrapper>
    </VizWrapper>
  </div>
  );
};

export default memo(UsaMap);
