# Task 1: Database Query Optimization

## SQL Query
This query fetches the top 5 users with the highest total order amount in the last month.

### Indexing

1. In Users table we can index `user_id` column because it is used in the JOIN operation

```sql
CREATE INDEX idx_users_user_id ON users(user_id);

```
2. In Orders table, 
    - index user_id column for the join
    - index the order_date column to speed up filtering by date

```sql 
CREATE INDEX idx_orders_user_id ON orders(user_id);

CREATE INDEX idx_orders_order_date ON orders(order_date);


```