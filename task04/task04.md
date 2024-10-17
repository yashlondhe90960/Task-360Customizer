# Concurrency Handling in Event Booking System

Developed a Node.js application for event bookings with MongoDB, ensuring no double bookings.

1. Database Schema:
-   Created `event` model with `name`, `date`, and `booked` fields.
- Indexed `booked` for fast querying.

2. Concurrency handling
- Implemented `/book-event/:eventId` endpoint.
- Used Mongoose sessions and transactions to handle concurrent booking requests, preventing double bookings.

