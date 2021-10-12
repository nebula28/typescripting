const fetchedData = {
    id: 'u1',
    name: 'josh',
    job: { 
        title: 'Engineer',
        description: 'Backend JavaScript Engineer'
    }
}
// JavaScript method
console.log(fetchedData.job && fetchedData.job.title);

// Typescript equivalent chaining method
console.log(fetchedData?.job?.title);