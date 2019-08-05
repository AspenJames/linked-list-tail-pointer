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
				ll.append("more data");

				const el = new Element("findMe");

				expect(ll.deleteElem(el)).to.eql(false)
			});
		});

		context("populated linked list, element found", function() {
			it("removes the element and returns true", function() {
				const ll = new LinkedList();
				ll.append(4);
				ll.append("data");
				ll.append("more data");

				const el = ll.head.next;

				expect(ll.deleteElem(el)).to.eql(true);
				expect(ll.head.value).to.eql(4);
				expect(ll.head.next).to.eql(ll.tail);
				expect(ll.tail.value).to.eql("more data");
			});

			context("found element is head", function() {
				it("removes the head element and updates the head pointer", function() {
				const ll = new LinkedList();
				ll.append(4);
				ll.append("data");
				ll.append("more data");

				const el = ll.head;

				expect(ll.deleteElem(el)).to.eql(true);
				expect(ll.head.value).to.eql("data");
				});
			});

			context("found element is tail", function() {
				it("removes the tail element and updates the tail pointer", function() {
					const ll = new LinkedList();
					ll.append(4);
					ll.append("data");
					ll.append("more data");

					const el = ll.tail;

					expect(ll.deleteElem(el)).to.eql(true);
					expect(ll.head.value).to.eql(4);
					expect(ll.tail.value).to.eql("data");
					expect(ll.tail.next).to.eql(null);
				});
			});

			context("found element is in middle", function() {
				it("removes the element", function() {
					const ll = new LinkedList();
					ll.append(4);
					ll.append("data");
					ll.append("more data");

					const el = ll.head.next;

					expect(ll.deleteElem(el)).to.eql(true);
					expect(ll.head.value).to.eql(4);
					expect(ll.head.next).to.eql(ll.tail);
				});
			});
		});
	});

	describe("inserting data after an element", function() {
		context("the element is not found in the list", function() {
			it("returns false", function() {
				const ll = new LinkedList();
				ll.append(4);
				ll.append("data");
				ll.append("more data");

				const el = new Element("notFound");

				expect(ll.insertAfter(el, "dataToInsert")).to.eql(false);
			});
		});

		context("the element is found in the list", function() {
			it("inserts the new data and returns true", function() {
				const ll = new LinkedList();
				ll.append(4);
				ll.append("data");
				ll.append("more data");

				const el = ll.head.next;

				expect(ll.insertAfter(el, "dataToInsert")).to.eql(true);
				expect(ll.head.next.next.value).to.eql("dataToInsert");
				expect(ll.head.next.next.next).to.eql(ll.tail);
			});
		});
	});
});
