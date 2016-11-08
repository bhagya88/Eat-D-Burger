var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'http://localhost:3306',
	user: 'root',
	password: 'vidya999',
	port: '3306'
});

connection.connect(function(err,data){
console.log("connected to db", connection.processID);
})
