import { formatDate } from '../helpers/helpers';

/*
 * serializes cad data
 * data coming from API are: string[]
 * */

import {
  apiEventDefinition,
  apiEventDescription,
  apiEventTypeName,
  apiEventUrl,
} from '../apis/apiDataInfo';

export function cadSerializer(apiData) {
  return apiData.map((item) => ({
    name: item[0],
    type: apiEventTypeName.CAD,
    date: formatDate(item[3].split(' ')[0]),
    description: apiEventDescription.CAD,
    definition: apiEventDefinition.CAD,
    url: apiEventUrl.CAD,
  }));
}
