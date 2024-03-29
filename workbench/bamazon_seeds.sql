DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INT(4) NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INT(20) NOT NULL,
    product_updated DECIMAL (10,2) NULL,
	PRIMARY KEY (item_id)
);

Select * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity, product_updated ) 
VALUES  ("6010", "Picasso Magnetic 3D Building Blocks", "Toys", 33.99, 20, 4500),
        ("1010", "Echo Dot Smart Speaker with Alexa Charcoal", "Electronics", 24.99, 19, 4500),
        ("6437", "Alexa Night Vision Camera", "Cameras", 37.98, 16, 4500),
        ("5423", "$25 Playstation Store Gift Card", "Video Games", 25, 15, 4500),
        ("8759", "Where the Crawdads Sing", "Books", 14.99, 9, 4500),
        ("2398", "Women's Racerback Maxi Dress", "Clothing", 24.99, 17, 4500)