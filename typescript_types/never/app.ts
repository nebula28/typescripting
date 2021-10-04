let userInput: unknown;
let username: string;

userInput = 5;
userInput = 'Josh';

if (typeof userInput === 'string') {
    username = userInput;
}

// generateError never returns a value hence never typesetting
function generateError(message: string, code: number): never {
    throw {
        message: message,
        errorCode: code
    }
}

generateError('an error occured', 500);
