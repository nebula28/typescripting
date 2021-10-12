// because this doesn't work properly with objects it is best to specify primitive types only
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    // generic types can be declared on methods as well i.e. removeItem<T>
    removeItem(item: T) {
        if(this.data.indexOf(item) === -1) {
            return;
        }
        this.data.slice(this.data.indexOf(item), 1); // returns -1 for objects not stored in a const variable
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Josh');
textStorage.addItem('Jess');
textStorage.removeItem('Josh');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(30);

// const textOrNumberStorage = new DataStorage<string | number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name:'Josh'});
// objStorage.addItem({name:'Jess'});
// objStorage.addItem({name:'Bailey'});

// objStorage.removeItem({name: 'Josh'}); // this will remove 'Bailey' because objects are created by reference
// console.log(objStorage.getItems());

// // this will work
// // const joshObj = {name: 'Josh'};
// // objStorage.addItem(joshObj);
// // objStorage.removeItem(joshObj); // this will remove the proper object from storage

// console.log(objStorage.getItems());