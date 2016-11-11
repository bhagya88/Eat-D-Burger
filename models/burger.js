
var orm = require('../config/orm.js');

// custom orm which calls generic orm functions
var burgerOrm = {

	// adds burger
	addBurger: function(burger,cb){
		orm.insertOne('burgers',burger,cb);
	},

	// changes devoured column of the burger to true 
	devourBurger: function(burgerId,cb){
		orm.updateOne('burgers',{devoured:true},{id:burgerId},cb);
	},

	// gets all burgers
	getAllBurgers: function(cb){
		orm.selectAll('burgers', cb);
	}
}

module.exports = burgerOrm;