import React, { Component } from 'react';
import SQLite from 'react-native-sqlite-storage';
import WorkOrderService from '../WorkOrderService';
import workOrderAssetService from '../WorkOrderAssetService';
import SqlService from '../SqlBaseService';

const databaseManager = {
    createTable: () => {
        let db = SQLite.openDatabase({ name: 'work_order.db', createFromLocation: "~work_order.db", location: 'Library' }, this.openCB, this.errorCB);
        // Create table work order
        db.transaction(function (tx) {
            // tx.executeSql('DROP TABLE IF EXISTS WorkOrder');
            let sqlQuery = 'CREATE TABLE IF NOT EXISTS WorkOrder(' +
                'Description text,' +
                'Detail text,' +
                'Status text,' +
                'EstimatedStartDate numeric,' +
                'EstimatedStartTime numeric,' +
                'EstimatedStartDateTime numeric,' +
                'EstimatedFinishDate  numeric,' +
                'EstimatedFinishTime numeric,' +
                'EstimatedFinishDateTime numeric,' +
                'WorkSystemName text,' +
                'Address text,' +
                'Latitude text,' + // get from api
                'Longitude text,' + // get from api
                'MapCenterLatitude text,' +
                'MapCenterLongitude text,' +
                'Zoom text,' +
                'ProjectCode text,' +
                'ProjectName text,' + // get from api
                'WorkTypeCode text,' +
                'KeyedWorkOrderNumber text,' +
                'AssetRegisterName text,' +
                'AssetNumberInternal text,' +
                'WorkOrderNumberInternal text,' +
                'Type text)';
            tx.executeSql(sqlQuery);
            // tx.executeSql('INSERT INTO WorkOrder (Description, Detail) VALUES ("my Description 1", "my details 1"), ("my Description 2", "my details 2")');
        }, function (error) {
            console.log('Transaction ERROR: ' + error.message);
        }, function () {
            console.log('Populated database OK');
        });


        // Create table work order asset
        db.transaction(function (tx) {
            // tx.executeSql('DROP TABLE IF EXISTS WorkOrderAsset');
            tx.executeSql('CREATE TABLE IF NOT EXISTS WorkOrderAsset(' +
                'Description text,' +
                'AssetRegisterName text,' +
                'AssetNumberInternal text,' +
                'KeyedAssetNumber text,' +
                'Location text,' +
                'Latitude text,' +
                'Longitude text,' +
                'MapCenterLatitude text,' +
                'MapCenterLongitude text,' +
                'Zoom text)'
            );
        }, function (error) {
            console.log('Transaction ERROR: ' + error.message);
        }, function () {
            console.log('Populated database OK');
        });
        // Work order
        WorkOrderService.getWorkOrder().then((res) => {
            SqlService.syncWorkOrder(res.Items);
        });
        // Work order asset
        workOrderAssetService.getWorkOrderAsset().then((res) => {
            SqlService.syncWorkOrderAsset(res.Items);
        });

        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM WorkOrder', [], (tx, results) => {
                console.log("Query completed");
                // Get rows with Web SQL Database spec compliance.
                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                    let row = results.rows.item(i);
                    console.log(`Record: ${row.name}`);
                    this.setState({ record: row });
                }
            });
        });
    }
}

export default databaseManager;
