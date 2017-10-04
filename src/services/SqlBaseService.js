import SQLite from 'react-native-sqlite-storage';
import NativeEventEmitter from 'EventEmitter';

class SqlService extends NativeEventEmitter {

	constructor(props) {
		super(props);
	}

	async execute(sql, value, type) {
		type = type || "array";
		let db = SQLite.openDatabase("work_order.db", "1.0", "Word Order Database", 200000);
		const tx = await (
			new Promise(resolve =>
				db.transaction(resolve)
			)
		);
		return await (
			new Promise((resolve, reject) => {
				switch (type) {
					case "array":
						tx.executeSql(sql, value, (tx, res) => {
							let list = [];
							res = res;
							for (var i = 0; i < res.rows.length; i++)
								list.push(res.rows.item(i));
							resolve(list);
						});
						break;
					case "object":
						tx.executeSql(sql, value, (tx, res) => {
							res = res;
							resolve(res.rows.item(0));
						});
						break;
					default:
						tx.executeSql(sql, value, (tx, res) => {
							let list = [];
							res = res;
							for (var i = 0; i < res.rows.length; i++)
								list.push(res.rows.item(i));
							resolve(list);
						});
						break;
				}
			})
		);
	}

	select(table, field = "*", where = "", values = null, order = null) {
		var list = [];

		if (where && values) {
			var sql = 'SELECT ' + field + ' FROM ' + table + ' WHERE ' + where;
		} else {
			var sql = 'SELECT ' + field + ' FROM ' + table;
		}
		if (order)
			sql += " ORDER BY " + order;

		return this.execute(sql, values || [], null).then(function (res) {
			return res;
		});
	}
	syncWorkOrder(values) {
		var sql = 'INSERT INTO WorkOrder(' +
			'Description,' +
			'Detail,' +
			'WorkSystemName,' +
			'KeyedWorkOrderNumber,' +
			'ProjectCode,' +
			'EstimatedStartDate,' +
			'EstimatedStartTime,' +
			'EstimatedStartDateTime,' +
			'EstimatedFinishDate,' +
			'EstimatedFinishTime,' +
			'EstimatedFinishDateTime,' +
			'WorkTypeCode,' +
			'WorkOrderNumberInternal,' +
			'AssetRegisterName,' +
			'AssetNumberInternal' +
			') VALUES ';
		if (typeof values[0] == "object") {
			for (var i = 0; i < values.length; i++) {
				sql += '(';
				sql += "'" + values[i].Description + "',"
				sql += "'" + values[i].Detail + "',"
				sql += "'" + values[i].WorkSystemName + "',"
				sql += "'" + values[i].KeyedWorkOrderNumber + "',"
				sql += "'" + values[i].ProjectCode + "',"
				sql += "'" + values[i].EstimatedStartDate + "',"
				sql += "'" + values[i].EstimatedStartTime + "',"
				sql += "'" + values[i].EstimatedStartDateTime + "',"
				sql += "'" + values[i].EstimatedFinishDate + "',"
				sql += "'" + values[i].EstimatedFinishTime + "',"
				sql += "'" + values[i].EstimatedFinishDateTime + "',"
				sql += "'" + values[i].WorkTypeCode + "',"
				sql += "'" + values[i].WorkOrderNumberInternal + "',"
				sql += "'" + values[i].WorkOrderAssets.AssetRegisterName + "',"
				sql += "'" + values[i].WorkOrderAssets.AssetNumberInternal + "'"
				sql += '),';
			}
			sql = sql.slice(0, sql.length - 1);
		}

		return this.execute(sql, values || [], "popup").then(function (res) {
			return res;
		});
	}
	syncWorkOrderAsset(values){
		var sql = 'INSERT INTO WorkOrderAsset(' +
			'WorkSystemName,' +
			'WorkOrderNumberInternal,' +
			'AssetRegisterName,' +
			'AssetNumberInternal,' +
			') VALUES ';
		if (typeof values[0] == "object") {
			for (var i = 0; i < values.length; i++) {
				sql += '(';
				sql += "'" + values[i].WorkSystemName + "',"
				sql += "'" + values[i].WorkOrderNumberInternal + "',"
				sql += "'" + values[i].AssetAttributes.AssetRegisterName + "',"
				sql += "'" + values[i].AssetAttributes.AssetNumberInternal + "',"
				sql += ')';
			}
			sql = sql.slice(0, sql.length - 1);
		}

		return this.execute(sql, values || [], "popup").then(function (res) {
			return res;
		});
	}

	insert(table, row, values) {
		var sql = 'INSERT INTO ' + table + ' (';
		for (var i = 0; i < row.length; i++) sql += row[i] + ",";
		sql = sql.slice(0, sql.length - 1);
		sql += ') VALUES ';

		if (typeof values[0] == "object") {
			for (var i = 0; i < values.length; i++) {
				sql += '(';
				sql += "'" + values[i].row[i] + "',"
			}
			sql = sql.slice(0, sql.length - 1);
			values = [];
		} else {
			sql += "(";
			for (var i = 0; i < values.length; i++) sql += "?,";
			sql = sql.slice(0, sql.length - 1);
			sql += ")";
		}

		return this.execute(sql, values || [], "popup").then(function (res) {
			return res;
		});
	}

	delete(table, where = null, values = null) {
		if (where && values)
			var sql = 'DELETE FROM ' + table + ' WHERE ' + where;
		else
			var sql = 'DELETE FROM ' + table;

		return this.execute(sql, values || [], "popup").then(function (res) {
			return res;
		});
	}

	update(table: string, row, values, where: string, wValues: Array<any>) {
		var sql = 'UPDATE ' + table + ' SET ';
		for (var i = 0; i < values.length; i++) sql += row[i] + "=?,";
		sql = sql.slice(0, sql.length - 1);
		if (where && wValues) {
			sql += " WHERE " + where;
			for (var i = 0; i < wValues.length; i++)
				values.push(wValues[i]);
		}

		return this.execute(sql, values || [], "popup").then(function (res) {
			return res;
		});
	}

	query(sql: string, values: Array<any>): Promise<any> {
		return this.execute(sql, values, "popup").then(function (res) {
			return res;
		});
	}
}
module.exports = new SqlService();
