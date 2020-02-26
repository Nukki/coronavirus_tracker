const express = require('express');
const router = express.Router();
const fs = require('fs');
const axios = require('axios');
const topo = require('./world.js');


router.get('/world', async (req, res) => {
  console.log('SERVER world')
  res.send(await getData('world'));
})

router.get('/usa', async (req, res) => {
  console.log('SERVER usa')
  res.send(await getData('us'));
})

router.get('/topo', (req, res) => {
  console.log('SERVER topo')
  res.send(topo);
})

// ==================== Parse CSV files ==========================

// https://raw.githubusercontent.com/danutzthe/topojson_world_map/master/world-110m.json
// const confirmedUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/archived_data/archived_time_series/time_series_2019-ncov-Confirmed.csv';
// const deathsUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/archived_data/archived_time_series/time_series_2019-ncov-Deaths.csv';
// const recoveredUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/archived_data/archived_time_series/time_series_2019-ncov-Recovered.csv';
const confirmedUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv';
const deathsUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv';
const recoveredUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv';

const getData = async worldOrUs => {
  const conf = await getCSV('confirmed', worldOrUs);
  const rec = await getCSV('recovered', worldOrUs);
  const dea = await getCSV('deaths', worldOrUs);
  const result = {};
  for (let date in conf) {
    result[date] = {};
    for (let state in conf[date]) {
      result[date][state] = {};
      result[date][state]['confirmed'] = conf[date][state];
      result[date][state]['recovered'] = rec[date][state];
      result[date][state]['deaths'] = dea[date][state];
    }
  }
  return result;
}


const getCSV = async (type, worldOrUs) => {
  let url;
  let all;
  if (type === 'confirmed') url = confirmedUrl;
  if (type === 'deaths') url = deathsUrl;
  if (type === 'recovered') url = recoveredUrl;
  try {
    const response = await axios.get(url);
    all = response.data.split(/\r?\n/).map(el => el.split(','));
    return csvToObject(all, worldOrUs)
  }
  catch(err) { // plan B if the repo is not available
    const csv = fs.readFileSync(__dirname + `/${type}.csv`);
    all = csv.toString().split(/\r?\n/).map(el => el.split(','))
    return csvToObject(all, worldOrUs);
  }
}


const csvToObject = (all, worldOrUs) => {
  const us = all.filter(el => el[2] === 'US' || el[1] === 'US');
  const top = all[0];
  const resObj = {};
  for (let date = 4; date < top.length; date++) {
    const keyDate = top[date].split(' ')[0];
    resObj[keyDate] = {};
    if (worldOrUs === 'us') {
      us.forEach(el => {
        let state = el[1].trim().slice(0,2);
        let data = el[date + 1] ? parseInt(el[date + 1]) : 0;
        if (el[0] === 'Unassigned Location (From Diamond Princess)') {
          state = 'Others';
          data = el[date] ? parseInt(el[date]) : 0;
        }
        if (resObj[keyDate][state]) resObj[keyDate][state] = resObj[keyDate][state] + data;
        else resObj[keyDate][state] = data;
      })
    } else {
      all.forEach(el => {
        let withComplexName = el.length > top.length;
        const country = withComplexName ? el[2] : el[1];
        const dataIndex = withComplexName ? date + 1 : date;
        const data = el[dataIndex] ? parseInt(el[dataIndex]) : 0;
        if (resObj[keyDate][country]) resObj[keyDate][country] = resObj[keyDate][country] + data;
        else resObj[keyDate][country] = data;
      })
      delete resObj[keyDate]['Country/Region'];
    }
  }
  return resObj;
}

module.exports = router;
