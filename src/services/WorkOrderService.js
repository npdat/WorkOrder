import { Alert } from 'react-native';

class WorkOrderService {
    getWorkOrder() {
        let url = 'https://saas-it.onespresso.net/T1Default/CiAnywhere/Web/SAAS-IT/Api/WS/v1/WorkOrder/ReadForAll';
        const body = {
            "Items": [
                {
                    "WorkSystemName": "F1.WKIA",
                    "KeyedWorkOrderNumber": "O.00202"
                },
                {
                    "WorkSystemName": "F1.WKIA",
                    "KeyedWorkOrderNumber": "O.00001"
                },
                {
                    "WorkSystemName": "F1.WKIA",
                    "KeyedWorkOrderNumber": "C.00008"
                },
                {
                    "WorkSystemName": "F1.WKIA",
                    "KeyedWorkOrderNumber": "O.00036"
                },
                {
                    "WorkSystemName": "F1.WKIA",
                    "KeyedWorkOrderNumber": "O.00037"
                },
                {
                    "WorkSystemName": "F1.WKIA",
                    "KeyedWorkOrderNumber": "O.00038"
                },
                {
                    "WorkSystemName": "F1.WKIA",
                    "KeyedWorkOrderNumber": "O.00039"
                },
                {
                    "WorkSystemName": "F1.WKIA",
                    "KeyedWorkOrderNumber": "C.00010"
                },
                {
                    "WorkSystemName": "F1.WKIA",
                    "KeyedWorkOrderNumber": "C.00011"
                },
                {
                    "WorkSystemName": "F1.WKIA",
                    "KeyedWorkOrderNumber": "C.00012"
                },
                {
                    "WorkSystemName": "F1.WKIA",
                    "KeyedWorkOrderNumber": "C.00013"
                },
                {
                    "WorkSystemName": "F1.WKIA",
                    "KeyedWorkOrderNumber": "O.00054"
                },
                {
                    "WorkSystemName": "F1.WKIA",
                    "KeyedWorkOrderNumber": "O.00094"
                },
                {
                    "WorkSystemName": "F1.WKIA",
                    "KeyedWorkOrderNumber": "O.00095"
                }

            ]
        }
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic aHVuZ2Q6aW5ub3ZhdGU='
            },
            body: JSON.stringify(body)
        })
            .then((res) => res.json())
            .catch((err) => {
                Alert.alert('Error ' + err);
            })
    }

    getWorkOrderLocal(){
          let db = SQLite.openDatabase({ name: 'work_order.db', createFromLocation: "~work_order.db", location: 'Library' }, this.openCB, this.errorCB);
          db.transaction((tx) => {
              tx.executeSql('SELECT * FROM WorkOrder', [], (tx, results) => {
                  return results.rows;
              });
          });
    }
}

module.exports = new WorkOrderService();
