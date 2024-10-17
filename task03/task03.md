# Task 3: TypeScript Type Inference

This example demonstrates how to use TypeScript's nullish coalescing operator (`??`) to handle missing `age` properties.

```typescript

function getUserInfo(): UserInfo {
    
    const apiResponse = {
        name: "John Doe",
        age: 25
    };

    return {
        name: apiResponse.name,
        age: apiResponse.age ?? -1 // Default value for age if missing
    };
}
```