let userInput: unknown;
let username: string;

userInput = 5;
userInput = 'Josh';

// will throw error because unknown could be a different type than string
// if userInput is set to type any, this error will go away
// username = userInput;

// must use conditional to type check
if (typeof userInput === 'string') {
    username = userInput;
}