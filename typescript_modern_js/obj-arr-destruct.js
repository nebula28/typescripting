const items = ['shovel', 'hatchet', 'beans', 'tent', 'sleeping bag'];
// const item1 = items[0];
// const items2 = items[1];
// destructured arrays pull elements by position
const [item1, item2, ...items] = items;
console.log(item1, item2, items);


const person = {
    personName: 'josh',
    personAge: 30
}
// destructured objects pull elements by key name (must match) but can be overriden using :
const { personName: theirName, personAge } = person;
console.log(theirName, personAge);
