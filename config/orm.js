var connection = require('./connection.js');

// generic object relational mapper (ORM)

var orm = {

	// selects all rows
	selectAll: function (table,cb) {
		var queryString = 'SELECT * FROM ' + table ;
		connection.query(queryString, cb);
	},

	// inserts one row
	insertOne: function (table,row,cb) {
		var queryString = 'INSERT INTO ' + table + ' SET ?';
		connection.query(queryString,row,cb);
	
	},

	// updates one row
	updateOne: function (table,columns,where,cb) {
		var queryString = 'UPDATE ' + table + ' SET ? WHERE ?';
		connection.query(queryString,[columns,where],cb);
		
	}
};


module.exports = orm;
