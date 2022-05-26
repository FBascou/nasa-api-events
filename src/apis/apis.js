import urls from './urls';
import endpoints from './endpoints';

const endpointCAD = urls().urlCAD;
const endpointSWN = urls().urlSWN;
const endpointFD = urls().urlFD;
let apiCAD = endpoints()[0];
let apiSWN = endpoints()[1];
let apiFD = endpoints()[2];

const apis = () => {
  let APIList = [];
  let linkCAD = endpointCAD + apiCAD;
  let linkSWN = endpointSWN + apiSWN;
  let linkFD = endpointFD + apiFD;
  // let linkE = urls().urlE;

  APIList.push(linkCAD, linkSWN, linkFD);

  return APIList;
};

export default apis;
