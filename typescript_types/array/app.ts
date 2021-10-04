// type: string[]
let hobbies = ['coding', 'drumming', 'gaming', 'reading'];

let favNums: number[] = [3, 7, 21];

let anyArray: any[] = [1, 'jessica', false];

for (let hobbie of hobbies) {
    // typescript knows hobbie is a string and therefore provides autocomplete options for String operations
    console.log(hobbie.charAt(4));
    // typescript will throw an error because it knows hobbie is not an array
    // hobbie.map();
}