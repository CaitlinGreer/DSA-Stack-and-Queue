class _Node {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

class Stack {
    constructor() {
        this.top = null
    }

//A stack has two primary functions push() and pop()

//push() insertion is limited to only inserting onto the top of the stack
// since we are only adding to top of stack, time complexity is constant, O(1)
    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null)
            return this.top
        }
        const node = new _Node(data, this.top)
        this.top = node
    }

//pop() removal also limited to top of stack.
//since only removing from top of stack, time complexity is constant, 0(1)
    pop() {
        /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
        const node = this.top
        this.top = node.next
        return node.data
    }

}