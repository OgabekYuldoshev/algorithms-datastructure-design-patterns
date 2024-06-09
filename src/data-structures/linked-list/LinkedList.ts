import { LinkedListNode } from "./LinkedListNode";

export class LinkedList {
  head: LinkedListNode | null = null
  tail: LinkedListNode | null = null
  length: number = 0

  public add(value: unknown) {
    this.head = new LinkedListNode(value)
    this.tail = this.head
    this.length++

    return this
  }

  public addByList(values: unknown[]) {
    for (const value of values) {
      if (this.tail) {
        this.tail.next = new LinkedListNode(value)
        this.tail = this.tail.next
        this.length++
      } else {
        this.head = new LinkedListNode(value)
        this.tail = this.head
        this.length++
      }
    }

    return this
  }

}