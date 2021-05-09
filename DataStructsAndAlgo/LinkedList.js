// //10-->5-->16
// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }
    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
    printList() {
        const array = []
        let currentNode = this.head
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value)
        }

        const newNode = {
            value: value,
            next: null
        }

        const leader = this.traverserToIndex(index-1)
        const holdingPointer = leader.next
        leader.next = newNode
        newNode.next = holdingPointer
        this.length++
        return this.printList()
    }
    traverserToIndex(index) {
        let currentNode = this.head
        for(let i = 0; i < index; i++) {
            currentNode = currentNode.next
        }
        return currentNode
    }
    remove(index) {
        const leader = this.traverserToIndex(index-1)
        const unwantedNode = leader.next
        leader.next = unwantedNode.next
        this.length--
        return this.printList()
    }
}

const minhalistaLigada = new LinkedList(10)
minhalistaLigada.append(5)
minhalistaLigada.append(16)
minhalistaLigada.prepend(1)
// console.log(minhalistaLigada.printList())
console.log(minhalistaLigada.insert(2, 99))
console.log(minhalistaLigada.remove(2))
// console.log(minhalistaLigada)