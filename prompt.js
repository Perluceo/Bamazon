var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
	host:"localhost",
	port:3306,
	user:"root",
	password:"password",
	database:"bamazon"
});

connection.connect(function(err){
	if(err)throw err;
	console.log("connected as id" + connection.threadId);
});

function beginPurchase() {
	connection.query('SELECT * FROM Products', function(err, res){
		
		for(var i = 0; i < res.length; i++){
			table.push([res[i].item_id, res[i].product_name, res[i].price.toFixed(2), res[i].stock_quantity])
    }
    console.log(table.toString());

	inquirer.prompt([{
		name: "choice",
		type: "list",
		message:"Use the arrow key to select what you would like to purchase."
	},
	{
		name:"quantity",
		type:"input",
		message:"How many would you wish to purchase?",
		validate: function (value) {
			if (isNaN(value) == false) {
			  return true;
			} else {
			  return false;
			}
		  }
	}]).then(function(answer){

// refactoring code here to remedy parse error
//  	var quantityRequested = answers.Quantity;
//  	var IDrequested = answers.ID;
//  	purchaseOrder(IDrequested, quantityRequested);
//  });
// };

// function purchaseOrder(ID, quantityRequested){
// 	connection.query('Select * FROM products WHERE item_id = ' + ID, function(err,res){
// 		if(err){console.log(err)};
// 		if(quantityRequested <= res[0].stock_quantity){
// 			var totalCost = res[0].price * quantityRequested;
// 			console.log("Good news your order is in stock!");
// 			console.log("Your total cost for " + quantityRequested + " " +res[0].product_name + " is " + totalCost + " Thank you!");

// 			connection.query("UPDATE products SET stock_quantity = stock_quantity - " + quantityRequested + "WHERE item_id = " + ID);
// 		} else{
// 			console.log("Sorry we do not have enough in stock " + res[0].product_name + " to complete your order.");
// 		};
// 		beginPurchase();
// 	});
// };

