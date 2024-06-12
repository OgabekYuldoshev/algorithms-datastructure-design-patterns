import { expect, test } from "@jest/globals";
import { LinkedList } from "../../src/data-structures/linked-list/LinkedList";
import { describe, it } from "node:test";

describe("LinkedList tests", ()=>{
    let linkedList:LinkedList

    test("should create and add linked list",()=>{
        linkedList = new LinkedList();
        linkedList.add(5)
        expect(linkedList.head?.value).toBe(5);
    })
})