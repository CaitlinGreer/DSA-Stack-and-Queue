class _Node {
    constructor(value){
        this.value = value
        this.next = next
    }
}

/*Consturctor Method for Queue.  Constructor will contain the 1st and the last nodes 
indicating the beginning and the ending of the queue*/
/*main functions of a queue are enqueue(data): adds data to a queue(insertion)
and dequeue(): removes oldest data added to a queue (deletion)
*/
class Queue {
    constructor() {
        this.first = null
        this.last = null
    }

/* enqueue limited to only 1 place (the end of the queue) 
    since items are only added at one place (the end) time complexity
    is constant, O(1)
*/
    enqueue(data) {
        const node = new _Node(data)

        if (this.first === null) {
            this.first = node
        }
        if (this.last) {
            this.last.next = node
        }
        //make new node last item on the queue
        this.last = node
    }

/* dequeue limited to only 1 place (the beginning of the queue) 
    since only removing item from 1 place (the beginning) time complexity
    is constant, O(1)
*/
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