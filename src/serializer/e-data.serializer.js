
/*
* data comming from api
* {
* date: string,
* eclipse: string,
* timeGreatestEclipse: string,
* type: string,
* saros: string
* }
* */
import {apiEventDefinition, apiEventTypeName, apiEventUrl} from "../apis/apiDataInfo";

export function eDataSerializer(apiData) {
  return apiData.map((item) => ({
    name: item.eclipse,
    type: apiEventTypeName.E,
    date: item.date,
    description: item.type,
    definition: apiEventDefinition.E,
    url: apiEventUrl.E,
  }));
}
