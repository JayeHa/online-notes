{
    interface Stack<T> {
        readonly size: number;
        push(value: T): void;
        pop(): T;
    }

    type StackNode<T> = {
        readonly value: T;
        readonly next?: StackNode<T>;
    }

    class StackImpl<T> implements Stack<T> {
        private _size: number = 0;
        private head?: StackNode<T>;

        constructor(private capacity: number) {}
        get size(){
            return this._size;
        }

        push(value: T): void {
            if(this.size === this.capacity){
                throw new Error('Stack is full!');
            }
            const node = {value, next: this.head}; //head에 이미 정확한 타입이 명시되어있기때문에 타입추론 활용
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

    const stack = new StackImpl<string>(10);
    stack.push('Ellie 1');
    stack.push('Bob 2');
    stack.push('Steve 3');
    while(stack.size !== 0) {
        console.log(stack.pop());    
    }
    
    const stack2 = new StackImpl<number>(10);
    stack2.push(123);
    stack2.push(456);
    stack2.push(789);
    while(stack2.size !== 0) {
        console.log(stack2.pop());    
    }

    // 내가 담당하고 있는 이 기능, 컴포넌트, 서비스로직, 클래스가 재사용될 필요성이 있는지 질문을 해보시고
    // 재사용될 가능성이 있다면, 재사용성이 중요하다면
    // 이렇게 제네릭을 이용해서 좀 더 다양한 타입을 받을 수 있도록 구현

}