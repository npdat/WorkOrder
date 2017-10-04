
// API
const API_BASE_URL = 'https://saas-it.onespresso.net/T1Default/CiAnywhere/Web/SAAS-IT/Api/WS/v1';
const LOOKUP_WORKTYPE = '/WorkType/Lookup';
const LOOKUP_PROJECT = '/Project/Lookup2';
const GET_WORKORDER_LIST = '/WorkOrder/ReadForAll';
const BULKREAD = '/Asset/BulkRead';

const headerConfig = {
  'Content-Type' : 'application/json',
  'Authorization': 'Basic aHVuZ2Q6aW5ub3ZhdGU='
}

export const getWorkOrderDetail = () => {

  const url = `${API_BASE_URL}${GET_WORKORDER_LIST}`;

  const payLoad = {
    Items: [
      {
        WorkSystemName: 'F1.WKIA',
        KeyedWorkOrderNumber: 'O.00001'
      },
      {
        WorkSystemName: 'F1.WKIA',
        KeyedWorkOrderNumber: 'O.00002'
      },
      {
        WorkSystemName: 'F1.WKIA',
        KeyedWorkOrderNumber: 'O.00003'
      },
      {
        WorkSystemName: 'F1.WKIA',
        KeyedWorkOrderNumber: 'O.00004'
      },
      {
        WorkSystemName: 'F1.WKIA',
        KeyedWorkOrderNumber: 'O.00005'
      },
      {
        WorkSystemName: 'F1.WKIA',
        KeyedWorkOrderNumber: 'O.00006'
      },
      {
        WorkSystemName: 'F1.WKIA',
        KeyedWorkOrderNumber: 'O.00007'
      },
      {
        WorkSystemName: 'F1.WKIA',
        KeyedWorkOrderNumber: 'O.00008'
      },
      {
        WorkSystemName: 'F1.WKIA',
        KeyedWorkOrderNumber: 'O.00009'
      },
      {
        WorkSystemName: 'F1.WKIA',
        KeyedWorkOrderNumber: 'O.00010'
      },
      {
        WorkSystemName: 'F1.WKIA',
        KeyedWorkOrderNumber: 'O.00011'
      },
      {
        WorkSystemName: 'F1.WKIA',
        KeyedWorkOrderNumber: 'O.00012'
      },
      {
        WorkSystemName: 'F1.WKIA',
        KeyedWorkOrderNumber: 'O.00013'
      },
      {
        WorkSystemName: 'F1.WKIA',
        KeyedWorkOrderNumber: 'O.00014'
      },
      {
        WorkSystemName: 'F1.WKIA',
        KeyedWorkOrderNumber: 'O.00015'
      }
    ]
  }

  return fetch(url, {
    method: 'POST',
    headers: headerConfig,
    body: JSON.stringify(payLoad)
  })
  .then((response) => response.json())
}

export const getAssetDetail = (workSystemName, workOrderNumberInternal, assetRegisterName, assetNumberInternal) => {

  const url = `${API_BASE_URL}${BULKREAD}`;

  // WorkOrderAssets


  return fetch(url, {
    method: 'POST',
    headers: headerConfig,
    body: JSON.stringify(payLoad)
  })
  .then((response) => response.json())
}

export const lookupProject = (WorkSystemName, KeyedProjectCode) => {

  const url = `${API_BASE_URL}${LOOKUP_PROJECT}`;

  const payload = {
    Items: [
      {
        WorkSystemName: `${WorkSystemName}`,
        KeyedProjectCode: `${KeyedProjectCode}`,
      }
    ]
  }

  return fetch(url, {
    method: 'POST',
    headers: headerConfig,
    body: JSON.stringify(payload)
  })
  .then((response) => response.json())
}

export const lookupWorkType = (WorkSystemName, WorkTypeCode) => {

  const url = `${API_BASE_URL}${LOOKUP_WORKTYPE}`;

  const payload = {
    Items: [
      {
        WorkSystemName: `${WorkSystemName}`,
        WorkTypeCode: `${WorkTypeCode}`,
      }
    ]
  }

  return fetch(url, {
    method: 'POST',
    headers: headerConfig,
    body: JSON.stringify(payload)
  })
  .then((response) => response.json())
}
