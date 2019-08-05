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
found in the `test/` directory. Each class has its own test file. To run the
tests, first install the dependencies, then run the test command:

```bash
npm install
npm test
```
This runs the tests and displays the results in your terminal emulator. Yarn
commands `yarn install && yarn test` will also work if you have [Yarn][yarn]
installed on your machine. You should see all the tests passing if everything
went well so far.

## Contributing

Feel free to check out the code in `src/` and refactor, it could probably
benefit from some efficiency/readability edits. If you feel like sharing those
refactors or rewrties, submit an [issue][issue] or a [pull request][pr]. For
more information on pull requests, check out [this tutorial by Digital
Ocean][do].

[mocha]: https://mochajs.org/
[expect]: https://github.com/Automattic/expect.js
[yarn]: https://yarnpkg.com/
[issue]: https://github.com/AspenJames/linked-list-tail-pointer/issues
[pr]: https://github.com/AspenJames/linked-list-tail-pointer/pulls
[do]: https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github
