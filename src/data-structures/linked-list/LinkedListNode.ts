export class LinkedListNode {
  public value: unknown
  public next: LinkedListNode | null = null

  constructor(value: unknown, next?: LinkedListNode) {
    this.value = value
    this.next = next ?? null
  }
}