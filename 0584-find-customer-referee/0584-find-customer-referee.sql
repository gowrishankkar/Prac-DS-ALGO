# Write your MySQL query statement below

select c.name
from Customer as c
where c.referee_id != 2 or c.referee_id is null;


# select name from customer

# where referee_id != 2 or referee_id is null;