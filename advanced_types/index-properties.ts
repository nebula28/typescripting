interface ErrorContainer {
    // additional properties must be of the same type: string
    // id: string;
    // property indexing
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email...',
    username: 'Must start with a captial character...'
}