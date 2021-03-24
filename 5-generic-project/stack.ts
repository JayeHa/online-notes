{
    interface Stack<T> {
        readonly size: number;
        push(value: T): void;
        pop(): T;
    }

    type StackNode = {
        readonly value;
        readonly next?: StackNode;
    }

    class StackImpl<T> implements Stack<T> {
        private _size: number = 0;
        private head?: StackNode;

        constructor(private capacity: number) {}
        get size(){
            return this._size;
        }

        push(value: T): void {
            if(this.size === this.capacity){
                throw new Error('Stack is full!');
            }
            const node: StackNode = {value, next: this.head};
            this.head = node;
            this._size++;
        }
        pop(): T { 
            if (this.head == null) { // null == undefined, null !== undefined
                throw new Error('Stack is empty!');
            }
            const node = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        }
    }

    const stack = new StackImpl(10);
    stack.push('Ellie 1');
    stack.push('Bob 2');
    stack.push('Steve 3');
    while(stack.size !== 0) {
        console.log(stack.pop());    
    }
    // stack.pop();

}