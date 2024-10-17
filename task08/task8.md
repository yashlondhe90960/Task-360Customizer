# Task 8: Data Validation in TypeScript

## Overview
This task focuses on validating user input in a TypeScript application. We will enhance the `UserInput` interface with validation rules (e.g., email format) and implement a strategy to validate user input using regular expressions.

## Key Points
1. **Email Validation**: Uses a regular expression to check for correct email format.
2. **Password Validation**: Enforces a password length of at least 8 characters and requires at least one number.
3. **Optional Fields**: Handles optional fields like `age` with validation only if the field is provided.
4. **Error Handling**: Throws specific error messages to identify which input field fails validation.