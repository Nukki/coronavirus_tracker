import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import ReactTooltip from "react-tooltip";

import WorldMap from 'components/Maps/world';
import countries from './countries.json';
import { Text } from 'components/Text/annotation';
import LoadingIndicator from 'components/LoadingIndicator';

// https://raw.githubusercontent.com/danutzthe/topojson_world_map/master/world-110m.json
export default ({ setMap }) => {
  const [data, setData] = useState({});
  const [content, setContent] = useState("");

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      try {
        const result = await axios('/api/world');
        if (!didCancel) {
          setData(result.data);
        }
      } catch (error) {
        if (!didCancel) {
          console.log('failed fetch');
        }
      }
    };
    fetchData();

    return () => {
      didCancel = true;
    };
  }, []);

  return (
    <div>
      { setMap('world') }
      <Helmet>
        <title>COVID-19 World Map</title>
        <meta
          name="description"
          content="world map"
        />
      </Helmet>
      { Object.keys(data).length ? (
        <div>
          <WorldMap
            setTooltipContent={setContent}
            data={data}
            countries={countries}
          />
          <Text>
            Zoom in and out. Hover or click on the country for more details.
          </Text>
          <ReactTooltip
            multiline={true}
            html={true}
            insecure={true}
          >
            {content}
          </ReactTooltip>
        </div>
        ) : <LoadingIndicator />
      }
    </div>
  )
}
