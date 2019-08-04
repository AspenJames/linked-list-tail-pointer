'use strict'

const LinkedList = require('../src/LinkedList');
const Element = require('../src/Element');
const expect = require('expect.js');

describe("LinkedList", function() {
	describe("initialization", function() {
		it("sets `head` and `tail` to null", function() {
			const ll = new LinkedList();

			expect(ll).to.be.a(LinkedList);
			expect(ll.head).to.eql(null);
			expect(ll.tail).to.eql(null);
		});
	});

	describe("appending data", function() {
		context("empty linked list", function() {
			it("creates an Element from passed-in data, sets the head and tail pointers to the newly created element", function() {
				const ll = new LinkedList();
				ll.append("data");

				expect(ll.head).to.be.an(Element);
				expect(ll.tail).to.be.an(Element);
				expect(ll.head.value).to.eql("data");
				expect(ll.tail.value).to.eql("data");
			});
		});

		context("linked list with one element", function() {
			it("creates an Element from passed-in data, set the tail pointer to the newly created element", function() {
				const ll = new LinkedList();
				ll.append("data");
				ll.append(4);

				expect(ll.head.next).to.eql(ll.tail);
				expect(ll.head.value).to.eql("data");
				expect(ll.tail.value).to.eql(4);
			});
		});

		context("linked list with more than one element", function() {
			it("creates an Element, sets the tail pointer and previous tail's next to new element", function() {
				const ll = new LinkedList();
				ll.append("data");
				ll.append(4);
				const prevTail = ll.tail;
				ll.append("newTail");

				expect(ll.head.next).to.eql(prevTail);
				expect(prevTail.value).to.eql(4);
				expect(prevTail.next.value).to.eql("newTail");
				expect(ll.tail.value).to.eql("newTail");
			});
		});
	});

	describe("prepending data", function() {
		context("empty linked list", function() {
			it("creates an Element from passed-in data, sets the head and tail pointers to the newly created element", function() {
				const ll = new LinkedList();
				ll.prepend("data");

				expect(ll.head).to.be.an(Element);
				expect(ll.tail).to.be.an(Element);
				expect(ll.head.value).to.eql("data");
				expect(ll.tail.value).to.eql("data");
			});
		});

		context("linked list with one element", function() {
			it("creates an Element from passed-in data, set the head pointer to the newly created element", function() {
				const ll = new LinkedList();
				ll.prepend("data");
				ll.prepend(4);

				expect(ll.head.next).to.eql(ll.tail);
				expect(ll.head.value).to.eql(4);
				expect(ll.tail.value).to.eql("data");
			});
		});

		context("linked list with more than one element", function() {
			it("creates an Element, sets the head pointer to new element, sets next to previous head", function() {
				const ll = new LinkedList();
				ll.prepend("data");
				ll.prepend(4);
				const prevHead = ll.head;
				ll.prepend("newHead");

				expect(ll.head.value).to.eql("newHead");
				expect(ll.head.next).to.eql(prevHead);
				expect(ll.head.next.value).to.eql(4);
			});
		});
	});

	describe("deleting elements", function() {
		context("empty linked list", function() {
			it("returns false", function() {
				const ll = new LinkedList();
				const el = new Element(4);

				expect(ll.deleteElem(el)).to.eql(false)
			});
		});

		context("populated linked list, element not found", function() {
			it("returns false", function() {
				const ll = new LinkedList();
				ll.append(4);
				ll.append("data");
				ll.prepend("more data");

				const el = new Element("findMe");

				expect(ll.deleteElem(el)).to.eql(false)
			});
		});
	});
});
