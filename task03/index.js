"use strict";
function getUserInfo() {
    var _a;
    // Simulate API response
    const apiResponse = {
        name: "John Doe",
        age: 25
    };
    return {
        name: apiResponse.name,
        age: (_a = apiResponse.age) !== null && _a !== void 0 ? _a : -1 // Default value for age if missing
    };
}
const userInfo = getUserInfo();
console.log(userInfo);
