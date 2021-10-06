const items = ['shovel', 'hatchet', 'beans', 'tent', 'sleeping bag'];
const prizes = ['cooking pan', 'flint and steel', 'knife'];

items.push(...prizes);
console.log(items);

const mob = {
    hp: 45,
    dmg: 11,
    mana: 20,
    exp: 18
};
const mob2 = { ...mob };

console.log(mob2);