export class Queue<T> {
    _store : T[] = [];
    enqueue(val:T) {
        this._store.push(val);
    }
    dequeue(): T | undefined {
        return this._store.shift();
    }
    getLength() : number {
        return this._store.length;
    }
    isEmpty() : boolean {
        if(this._store.length > 0) {
            return false;
        } else {
            return true;
        }
    }
    peek() : T | undefined {
        return this._store[0];
    }
}

export class Stack<T> {
    _store: T[] = [];
    isEmpty(): boolean {
        if(this._store.length > 0) {
            return false;
        } else {
            return true;
        }
    }
    getLength() : number {
        return this._store.length;
    }
    push(val :T) {
        this._store.push(val);
    }
    pop() : T | undefined {
      return  this._store.pop();
    }

}
