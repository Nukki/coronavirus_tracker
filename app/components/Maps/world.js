import React, { useEffect, useState, memo } from 'react';
import { scaleLinear, scaleThreshold, scaleLog } from 'd3-scale';
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';
import styled from 'styled-components';
import DateSlider from '../Slider';
import TotalsPanel from '../TotalsPanel';
import { SliderWrapper, VizWrapper, MapWrapper, yellowOranges, Label } from './styled';

const colorScale = scaleLog()
  .domain([1, 100000])
  .range(['#1C0800', '#FF4500']); // faed27

const WorldMap = ({ data, setTooltipContent, countries }) => {
  const [curDay, setCurDay] = useState(0);
  const days = Object.keys(data);
  const topoJson = '/api/topo';
  const projection = 'geoMercator';

  return (
    <div>
      <SliderWrapper>
        <Label>{days[0]}</Label>
        <DateSlider data={days} setCurDay={setCurDay}/>
        <Label>{days[days.length - 1]}</Label>
      </SliderWrapper>

      <VizWrapper>
        <TotalsPanel map='world' data={data[days[curDay]]} date={days[curDay]} />
        <MapWrapper>
          <ComposableMap
            data-tip=""
            projection={projection}
          >
            <ZoomableGroup
              center={[0,25]}
              zoom={1}
              minZoom={0.9}
              maxZoom={7}
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


                    return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        // console.log(`inside onMouseEnter ${name} ${confirmed} ${recovered} ${deaths}`)
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
                          strokeWidth: '0.3',
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
          </ZoomableGroup>
        </ComposableMap>
      </MapWrapper>
    </VizWrapper>
  </div>
  );
};

export default memo(WorldMap);
