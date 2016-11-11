var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'vidya999',
	port: '3306',
	database: 'burgers_db'
});

connection.connect(function(err,data){
console.log("connected to db", connection.threadId);
});

module.exports = connection;
