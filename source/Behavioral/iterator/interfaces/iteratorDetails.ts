export interface IteratorDetails<T> {
    next(): T;
    hasNext(): boolean;
}
