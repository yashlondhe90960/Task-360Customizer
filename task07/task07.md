# Task 7: API Pagination in Node.js

## Overview
Pagination is a crucial feature in any API that deals with large datasets. It helps optimize performance, manage memory usage, and enhance user experience by splitting large sets of data into smaller, manageable chunks.

In this task, we implement a basic pagination mechanism using **limit** and **offset** query parameters in a Node.js REST API. This allows clients to request specific "pages" of data and control how much data is returned in each request.

---

## Implementation

### Step 1: Install Dependencies

Ensure that Node.js and npm are installed on your system. Initialize the project with the required dependencies:
```bash
npm init -y
npm install express