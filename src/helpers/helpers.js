import {
  apiEventTypeName,
  apiEventDescription,
  apiEventDefinition,
  apiEventUrl,
} from '../apis/apiDataInfo';

const months = {
  Jan: '01',
  Feb: '02',
  Mar: '03',
  Apr: '04',
  May: '05',
  Jun: '06',
  Jul: '07',
  Aug: '08',
  Sep: '09',
  Oct: '10',
  Nov: '11',
  Dec: '12',
};

// const verifyApiData = (item, api) => {
//   return Array.isArray(item) ? transformCADData(item, api) : transformSWNData(item, api);
// };

const transformCADData = (item, api) => {
  const dataCAD = {
    name: item[0],
    type: apiEventTypeName[api],
    date: item[3],
    description: apiEventDescription[api],
    definition: apiEventDefinition[api],
    url: apiEventUrl[api],
  };
  // console.log(dataCAD);
  return dataCAD;
};

const transformSWNData = (item, api) => {
  const dataSWN = {
    name: item['messageType'],
    type: apiEventTypeName[api],
    date: item['messageIssueTime'],
    description: apiEventDescription['SWN'][item['messageType']],
    definition: apiEventDefinition[api],
    url: apiEventUrl[api],
  };
  console.log(dataSWN);
  return dataSWN;
};

const transformEData = (item, api) => {
  const dataE = {
    name: item['eclipse'],
    type: apiEventTypeName[api],
    date: item['date'],
    description: item['type'],
    definition: apiEventDefinition[api],
    url: apiEventUrl[api],
  };
  return dataE;
};

// if (Array.isArray(item)) {
//   return transformCADData(item, 'CAD');
// } else {
//   //(!Array.isArray(item))
//   return [transformSWNData(item, 'SWN'), transformEData(item, 'E')];
// }

const verifyApiData = (item) => {
  return Array.isArray(item)
    ? transformCADData(item, 'CAD')
    : { ...transformSWNData(item, 'SWN'), ...transformEData(item, 'E') };
};

export const transformApiData = (list) => {
  return list.map((item) => ({
    name: verifyApiData(item).name,
    type: verifyApiData(item).type,
    date: verifyApiData(item).date,
    description: verifyApiData(item).description,
    definition: verifyApiData(item).definition,
    url: verifyApiData(item).url,
  }));
};

export const eventDate = (list) => {
  const regex = /[A-z]{3}/;
  for (let key in months) {
    if (list.includes(key)) {
      return list.replace(regex, months[key]);
    } else {
      console.log('No');
    }
  }
};
