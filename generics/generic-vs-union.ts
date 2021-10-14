// union types are flexible
// generic types are rigid

class DataStorage {
    // this means data can store an array of mixed types (strings, numbers, and booleans)
    private data: (string | number | boolean)[] = [];

    addItem(item: string | number | boolean) {
        this.data.push(item);
    }

    
    removeItem(item: string | number | boolean) {
        if(this.data.indexOf(item) === -1) {
            return;
        }
        this.data.slice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

// this means we have to select one type
class DataStorage2<T extends string | number | boolean> {
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

const textStorage = new DataStorage2<string>();