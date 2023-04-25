# Bon-Appetit-API

Change .env-sample to .env and add your MySQL server credentials to this file.

Node JS version used for this project - v18.16.0

Create table in MySQL database using this SQL query:
```
CREATE TABLE dishes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);
```