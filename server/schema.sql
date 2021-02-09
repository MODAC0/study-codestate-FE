DROP DATABASE IF EXISTS cmarket;
CREATE DATABASE cmarket;
USE cmarket;

CREATE TABLE users (
  id INT AUTO_INCREMENT,
  name varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE items (
  id INT AUTO_INCREMENT,
  name varchar(255),
  price INT,
  image BLOB,
  item_quantity INT,
  PRIMARY KEY (id)
);

CREATE TABLE orders (
  order INT AUTO_INCREMENT,
  user_id INT,
  total_price INT,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (order)
);

CREATE TABLE order_items (
  id INT AUTO_INCREMENT,
  order_no INT,
  item_id INT,
  order_quantity INT,
  PRIMARY KEY (id)
);

ALTER TABLE orders ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE order_items ADD FOREIGN KEY (order_id) REFERENCES orders (id);

ALTER TABLE order_items ADD FOREIGN KEY (item_id) REFERENCES items (id);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/