var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "readingisfun1",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

var start = function() {
	connection.query("SELECT * FROM products", function(err,res) {
		for(var i = 0; i < res.length; i++) {
			console.log("Product number: " + res[i].item_id + "\nProduct Name: " + res[i].product_name + "\nPrice: $" + res[i].price + "\n----------------\n");
		}
	
		inquirer.prompt([{
			name: "choice",
			type: "input",
			message:"Which product number are you interested in?"
		},{
			name: "buyerquantity",
			type: "input",
			message: "How many units of this product would you like to purchase?"

		}]).then(function(answer) {
			var selectedItem = parseInt(answer.choice);
			//console.log(parseInt(selectedItem));
			console.log(res[selectedItem-1].product_name);
			var requestedQuantity = parseInt(answer.buyerquantity);
			
			if (res[selectedItem].stock_quantity > requestedQuantity) {

				var newQuantity = res[selectedItem-1].stock_quantity - requestedQuantity; 
				var purchaseTotal = answer.buyerquantity * res[selectedItem].price;
				// console.log(typeof(newQuantity));
				// console.log(newQuantity);
				// console.log(requestedQuantity);
				// console.log(res[selectedItem-1].stock_quantity);
				connection.query("UPDATE products SET ? WHERE ?", [{
					stock_quantity: newQuantity
				},{
					item_id: selectedItem
				}],function(err,res) {
					console.log("Order successfully placed. Your total is $" + purchaseTotal);
				})
			}else{
				console.log("Sorry, not enough of selected items in stock.");
			}
		})

	})


}

start();