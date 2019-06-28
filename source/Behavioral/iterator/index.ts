interface IteratorDetails<T> {
    next(): T;
    hasNext(): boolean;
}

class Iterator2<T> implements IteratorDetails<T> {

    private elements: T[];
    private index: number = 0;

    constructor(public el: T[]) {
        this.index = 0;
        this.elements = el;
    }

    public next() {
        return this.elements[this.index++];
    }

    public hasNext() {
        return this.index < this.elements.length;
    }
}

let test = new Iterator2<number>([5, 6, 785, 34]);
console.log(test.next());
console.log(test.next());
console.log(test.hasNext());
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.hasNext());
