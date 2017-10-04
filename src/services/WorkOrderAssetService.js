import { Alert } from 'react-native';
import SqlBaseService from './SqlBaseService';
import SQLite from 'react-native-sqlite-storage';
class WorkOrderAssetService {
    getHeaderWorkOrder(){
        let db = SQLite.openDatabase({ name: 'work_order.db', createFromLocation: "~work_order.db", location: 'Library' }, this.openCB, this.errorCB);
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM WorkOrder', [], (tx, results) => {
                console.log("Query completed");
                // Get rows with Web SQL Database spec compliance.
                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                    let row = results.rows.item(i);
                }
            });
        });

        return SqlBaseService.select('WorkOrder');
    }
    getWorkOrderAsset() {
        const headers = this.getHeaderWorkOrder();
        let url = 'https://rdsgscm01.onespresso.net/WS.Dev.Web.Start/SQL.DEV/Api/WS/v1/Asset/Read';
        const body = {
            "Items": [
                {
                    "WorkSystemName": "F1.WKIA",
                    "WorkOrderNumberInternal": "O00088",
                    "AssetRegisterName": "MOB_TEST",
                    "AssetNumberInternal": "000004"
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
}

module.exports = new WorkOrderAssetService();