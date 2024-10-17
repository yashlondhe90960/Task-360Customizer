# Task 2: REST API Design

#### 1. Endpoint URL: `api/users/:username` using the GET method.

#### 2. Request params:
-   path params: username
- query params: fields and expand

#### 3. Error handling:
- If the user is not found in userDB, a 404 error is returned.

#### 4. Field filtering:
- If fields query parameter is provided, only the specified fields are included in the response.

#### 5. Response Structure:

```json

{
    "username": "yash_londhe",
    "name": "Yash Londhe",
    "email": "user1@gmail.com",
    "age": "21",
    "location": "pune",
    "active_status": true,
    "additionalFields": {
        "field1": "value1", 
        "field2": "value2"
    }
}
```