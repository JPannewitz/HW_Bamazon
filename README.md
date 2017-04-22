# HW_Bamazon
Homework Assignment Week 12

## Description on how to use the app
Challenge 1: When the user runs the app, the 10 items for sale in Bamazon are displayed. Then the user is prompted as to which product he or she would like to buy, as well as the quantity of that item.  The app then returns whether or not there is enough stock to complete the purchase and the total cost to the user.  The database gets updated to show the remaining stock.

## Requirements

- Create a MySQL database called 'Bamazon' and a table inside that database called 'products' with the following columns: item_id, product_name, department_name, price, and stock_quantity. Then populate table with 10 products for sale.
- Create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
- Then prompt the user with two messages: what is the the ID of the product they would like to buy, and should how many units of the product they would like to buy.
- If there is not sufficient quantity in the store, the app alerts the user.  If there is enough of the product in stock, the SQL database gets updated to reflect the remaining quantity and the app shows the customer the total cost of their purchase.

## Technologies Used

- Node.js used to add functionality to bamazonCustomer.js file in command line
- Node packages (MySql & Inquirer) to grab info from MySql database and user inputs
- MySql Workbench to host database in MySQL


## Code Explaination
- Created table in MySQL: 
// USE bamazon_db;

// CREATE TABLE products (
//  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
//  product_name VARCHAR(50) NOT NULL,
//  department_name VARCHAR(50) NOT NULL,
//  price INTEGER(7) NOT NULL,
//  stock_quantity INTEGER(7),
//  PRIMARY KEY (item_id)
// );

- Insert mock data into table:
// INSERT INTO products (product_name, department_name, price, stock_quantity) 
// VALUES ('Adulterio', 'books', 12, 100), ('pug phone case', 'miscellaneous', 30, 26), ('dish drying rack', 'household', 25, 60);

-------------





