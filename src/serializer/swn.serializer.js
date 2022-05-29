import {apiEventDefinition, apiEventDescription, apiEventTypeName, apiEventUrl} from "../apis/apiDataInfo";

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
  return apiData.map((item) => ({
    name: item.messageType,
    type: apiEventTypeName.SWN,
    date: item.messageIssueTime,
    description: apiEventDescription.SWN[item.messageType],
    definition: apiEventDefinition.SWN,
    url: apiEventUrl.SWN,
  }));
}
