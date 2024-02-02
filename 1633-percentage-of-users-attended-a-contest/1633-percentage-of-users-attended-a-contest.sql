# Write your MySQL query statement below


select 
contest_id, 
round(count(distinct user_id) * 100 / (select count(user_id) from Users), 2) as percentage
from Register 
group by contest_id 
order by percentage desc, contest_id;




# select p.project_id  , IFNULL(ROUND(SUM(experience_years)/COUNT(experience_years),2),0) average_years 
# from Project p
# left join Employee e on p.employee_id = e.employee_id 
# group by p.project_id

# select 
# contest_id, 
# round(count(distinct user_id) * 100 /(select count(user_id) from Users) ,2) as percentage
# from  Register
# group by contest_id
# order by percentage desc,contest_id