# Linked List Tail Pointer

Implement a linked list which maintains pointers for both `head` and `tail`.
Without losing reference to either `head` or `tail`, implement the following
prototypes on the LinkedList class:

```js
deleteElem(Element) // => boolean
insertAfter(Element, data) // => boolean
```

## Structure

Class definitions for Element (linked list node) and LinkedList are in `src/`.
The implementations listed above are defined on the LinkedList class.

## Test suite

Tests are written using [Mocha][mocha] and [Expect.js][expect]. Tests may be
found in the `test/` directory. Each class has its own test file.

[mocha]: https://mochajs.org/
[expect]: https://github.com/Automattic/expect.js
