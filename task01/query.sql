SELECT u.user_id,u.user_name,SUM(o.amount) as total_order_amount
FROM users u
JOIN orders o ON u.user_id = o.user_id
WHERE o.order_date >= NOW() - INTERVAL '1 month'
GROUP BY u.user_id, u.user_name
ORDER BY total_order_amount DESC
LIMIT 5;
