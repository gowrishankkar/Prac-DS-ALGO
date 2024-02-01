
# Write your MySQL query statement below

# select p.product_name, s.year, s.price
# from Sales as s
# left join Product as p
# on s.product_id = p.product_id;

SELECT Product.product_name AS product_name, Sales.year AS year, Sales.price AS price
FROM Sales NATURAL JOIN Product