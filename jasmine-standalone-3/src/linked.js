class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0;
    }
    insert(data) {
        if (this.head == null) {
            this.head = new LinkedListNode(data)
            this.size += 1
        }
        else {
            let current = this.head;
            while (current.next != null) {
                current = current.next
            }
            current.next = new LinkedListNode(data)
            this.size += 1
        }

    }
    remove(key) {

        if (this.head.data.key == key) {
            this.size -= 1
            this.head = this.head.next

            return null;
        }
        else {

            let previous
            let current = this.head;

            while (current != null) {

                if (current.data.key === key) {

                    previous.next = current.next;

                    this.size -= 1

                    return
                }
                else {

                    previous = current
                    current = current.next

                }
            }
            return
        }


    }
    contains(key) {
        if (this.head == null) {
            return null;
        }
        else {
            let current = this.head;
            while (current != null) {
                if (current.data.key == key) {
                    return current.data;
                }
                else {
                    current = current.next;
                }
            }
            return null
        }
    }
    toString() {

    }
}
