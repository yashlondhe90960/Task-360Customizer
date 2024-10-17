interface UserInfo {
    name: string;
    age?: number; 
}

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

const userInfo = getUserInfo();
console.log(userInfo);