// number is the tuple length and string is the identifier
let role: [number, string] = [2, 'author'];

// values can be pushed to the tuple
role.push('admin');

// tuples can be reassigned (is declared using let)
role = [0, 'author'];

// cannot be reassigned with extra elements -> will throw error
// role = [2, 'author', 'admin'];

