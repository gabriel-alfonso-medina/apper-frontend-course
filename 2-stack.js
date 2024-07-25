class Stack {

    constructor (){
        this.groceryItems = []
    }

    check () {
        console.log(this.groceryItems);
    }

    push(...items) {
        items.flat().forEach(item => {
            if (typeof(item) === 'string') {
                this.groceryItems.push(item);
            }
        });
        console.log('All items added.');
    }

    pop () {
        if (this.groceryItems.length === 0) {
            console.log('Stack is currently empty.')
        } else {
            this.groceryItems.pop();
        }
    }


}



const stack = new Stack()
stack.push('Milk')
stack.push('Eggs')
stack.check()  // [“Milk”, “Eggs”]
stack.pop()
stack.check()  // [“Milk”]
stack.pop()
stack.check()  // []
stack.push(['Ice Cream', 10, [], 'Cellphone'])
stack.check()  // ["Ice Cream", "Cellphone"]
stack.pop()
stack.check()  // [“Ice Cream”]
stack.pop()
stack.check()  // []
stack.pop()    // “Stack is currently empty.”