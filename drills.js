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

    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null)
            return this.top
        }
        const node = new _Node(data, this.top)
        this.top = node
    }

    pop() {
        const node = this.top
        this.top = node.next
        return node.data
    }
}

function peek(stack) {
    if (!stack.top) {
        return null
    }
    console.log('PEEK: ', stack.top)
    return stack.top
}

function isEmpty(stack) {
    if (stack.top === null){
        return 'Stack is Empty'
    }
    else {
        return 'Items in Stack'
    }
}

function display(stack) {
    if (stack.top === null) {
        console.log('stack is empty')
    }
    let tempNode = stack.top
    while (tempNode !== null) {
        console.log(tempNode.data)
        tempNode = tempNode.next 
    }
}
    
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
    let stack = new Stack()
    let compare = ''
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i])
    }
    for (let i = 0; i < s.length; i++) {
        compare += stack.pop()
    }
    return s === compare ? true : false
}



console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

function main() {
    const starTrek = new Stack()

    starTrek.push("Kirk")
    starTrek.push("Spock")
    starTrek.push("McCoy")
    starTrek.push("Scotty")
    
    

    // console.log(starTrek)
    peek(starTrek)
    console.log(display(starTrek))
    console.log('IsEmpty: ', isEmpty(starTrek))
  
}



main();
