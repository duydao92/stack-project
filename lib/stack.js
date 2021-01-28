// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node (value)
        if (this.length) {
            newNode.next = this.top;
        }
        this.top = newNode;
        this.length++;

        return this.length
    }

    pop() {
        if (this.length === 0) {
            return null
        }

        let oldNode = this.top;

        if (this.length === 1) {
            this.top = null;
        } else {
            this.top = oldNode.next;
            console.log(this.next)
        }
        this.length--;

        return oldNode.value;
    }

    size () {
        return this.length
    }
}
const stack = new Stack()
stack.push('A');
stack.push('B');
stack.pop()
console.log(stack)

exports.Node = Node;
exports.Stack = Stack;
