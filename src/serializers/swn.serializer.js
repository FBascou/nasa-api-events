import { apiEventDescription, apiEventTypeName, apiEventUrl } from '../apis/apiDataInfo';

/*
 * data comming from API are
 * {
 * messageType: string,
 * messageID: string,
 * messageURL: string,
 * messageIssueTime: string
 * }
 * */

export function swnSerializer(apiData) {
  return apiData
    .filter((filtered) => filtered.messageType !== 'Report')
    .map((item) => ({
      name: item.messageType,
      type: apiEventTypeName.SWN,
      date: item.messageIssueTime.split('T')[0],
      description: apiEventDescription.SWN[item.messageType],
      url: apiEventUrl.SWN,
    }));
}
