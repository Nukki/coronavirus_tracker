import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import ReactTooltip from "react-tooltip";
import UsaMap from 'components/Maps/usa';
import { Text } from 'components/Text/annotation';
import LoadingIndicator from 'components/LoadingIndicator';
import allStates from "./allstates.json";

export default ({ setMap }) => {

  const [data, setData] = useState({});
  const [usContent, setUsContent] = useState("");

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      try {
        const result = await axios('/api/usa');
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
      { setMap('usa') }
      <Helmet>
        <title>COVID-19 USA Map</title>
        <meta
          name="description"
          content="USA"
        />
      </Helmet>
      {
        Object.keys(data).length ? (
        <div>
          <UsaMap
            setTooltipContent={setUsContent}
            data={data}
            stateMap={allStates}
          />
          <Text>Hover or click on the state for more details</Text>
          <ReactTooltip
            multiline={true}
            html={true}
            insecure={true}
          >
            {usContent}
          </ReactTooltip>
        </div>
      ) : <LoadingIndicator />
      }

    </div>
  )
}
