---
title: MySQL Troubleshooting with New Relic Pro
parent_guide:
  - developing
filename: source/_guides/mysql-troubleshooting-with-new-relic-pro.md
---

While going through mysql and PHP slow logs is a great way to find issues, modern reporting services that are integrated with your site help speed the process up tremendously. There are a few different systems to choose from, but at Pantheon we use New Relic. It comes integrated with the majority of our service plans. This presentation will show you how, in conjunction with more traditional system logs, to use New Relic Pro. For the sake of this article, I will be walking through a real life scenario to help illustrate the techniques.

**Let’s Begin!**

From within Pantheon, get to the dashboard for whatever website you suspect is having problems with MySQL query performance. Click on the environment in question, in Pantheon speak that’d be Dev, Test or Live. Then click on the New Relic tab on the left, and again on the Open New Relic link.  


![](https://pantheon-systems.desk.com/customer/portal/attachments/333260)  





 ![](https://pantheon-systems.desk.com/customer/portal/attachments/333262)  





 ![](https://pantheon-systems.desk.com/customer/portal/attachments/333263)  





 ![](https://pantheon-systems.desk.com/customer/portal/attachments/333265)  





 ![](https://pantheon-systems.desk.com/customer/portal/attachments/333266)  





 ![](https://pantheon-systems.desk.com/customer/portal/attachments/333267)  





 ![](https://pantheon-systems.desk.com/customer/portal/attachments/333268)  





 ![](https://pantheon-systems.desk.com/customer/portal/attachments/333269)  





 ![](https://pantheon-systems.desk.com/customer/portal/attachments/333271)  





 ![](https://pantheon-systems.desk.com/customer/portal/attachments/333273)  





 ![](https://pantheon-systems.desk.com/customer/portal/attachments/333275)  





 ![](https://pantheon-systems.desk.com/customer/portal/attachments/333284)​  





 ![](https://pantheon-systems.desk.com/customer/portal/attachments/333278)  





 ![](https://pantheon-systems.desk.com/customer/portal/attachments/333283)  





 ![](https://pantheon-systems.desk.com/customer/portal/attachments/333280)  





 ![](https://pantheon-systems.desk.com/customer/portal/attachments/333281)  




**To recap:**

1. Use New Relic Pro to narrow identify periods of time that have high load and/or slow response times.
2. In New Relic, narrow down the scope to one of those time periods, and find the worst performing transactions.
3. Within those transactions, go into the SQL trace to discover long running queries.
4. Using SFTP, download the appropriate MySQL Slow Log to retrieve the query in it's entirety.
5. Connect to a safe MySQL server via CLI. Run the query to test the performance.
6. If the query result is poor, use the EXPLAIN and EXPLAIN EXTENDED MySQL command to get additional information. You can also examine the MySQL tables for structural issues using DESCRIBE and ANALYZE commands.
7. Once identified, fix the issue as appropriate. This can be within the MySQL server itself if that's where the problem is, or it can be within the CMS (Drupal or WordPress) by redoing code or configurations that are creating the errant query.


This article should give you some of the tools and techniques required to use New Relic's Pro level account to properly dig deep down into your CMS for poor performing MySQL queries. Good luck, and have fun!  
