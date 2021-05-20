class _Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
    }

    enqueue(data) {
        const node = new _Node(data)
    
        if (this.first === null){
            this.first = node
        }
        if (this.last) {
            this.last.next = node
        }
        this.last = node
    }

    dequeue() {
        if (this.first === null) {
            return
        }
        const node = this.first
        this.first = this.first.next
        if (node === this.last) {
            this.last = null
        }
        return node.value
    }
}

function peek(q) {
    return q.first.value
}

function isEmpty(q) {
    if (q.first === null) {
        return true
    }
    return false
}

function display(q) {
    if (q.first === null) {
        console.log('queue is empty')
    }
    let tempNode = q.first
    while (tempNode !== null) {
        console.log(tempNode.value)
        tempNode = tempNode.next 
    }
}

function mainQ() {
    const starTrekQ = new Queue

    starTrekQ.enqueue('Kirk')
    starTrekQ.enqueue('Spock')
    starTrekQ.enqueue('Uhura')
    starTrekQ.enqueue('Sulu')
    starTrekQ.enqueue('Checkov')

    console.log('PEEK: ', peek(starTrekQ))
    console.log('isEmpty: ', isEmpty(starTrekQ))
    display(starTrekQ)
}

mainQ()