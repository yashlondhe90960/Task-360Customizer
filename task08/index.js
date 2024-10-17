var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validateUserInput(input) {
    if (!emailRegex.test(input.email)) {
        throw new Error('Invalid email format');
    }
    return true;
}
var userInput = { email: 'yashlondhe9151@gmail', password: 'pass123' };
try {
    validateUserInput(userInput);
}
catch (error) {
    console.error(error.message);
}