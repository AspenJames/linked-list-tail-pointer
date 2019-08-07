'use strict'

const Element = require('./Element');

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	/**
	 * Append an element to the end of a linked list
	 * @param {any} data - data to insert
	 * @returns {LinkedList} - `this`
	 */
	append(data) {
		// create new element
		let elem = new Element(data);
		// if list is empty, set head and tail
		if (!this.head) {
			this.head = elem;
			this.tail = elem;
		} else {
			// iterate through list to find end
			let currElem = this.head;
			while (currElem !== this.tail) {
				currElem = currElem.next;
			}
			// add element and set tail pointer
			currElem.setNext(elem);
			this.tail = elem;
		}
		return this;
	}

	/**
	 * Prepend an element to the front of a linked list
	 * @param {any} data - the data to insert
	 * @returns {LinkedList} - `this`
	 */
	prepend(data) {
		// create new element
		let elem = new Element(data);
		// if list is  empty, set head and tail
		if (!this.head) {
			this.head = elem;
			this.tail = elem;
		} else {
			// insert at head and set head pointer
			elem.setNext(this.head);
			this.head = elem;
		}
		return this;
	}

	/**
	 * Delete an element from a linked list
	 * @param {Element} elem - element to delete
	 * @returns {boolean} - success or failure of operation
	 */
	deleteElem(elem) {
		if (!this.head || !elem) {
			// return early for an empty linked list
			return false;
		} else {
			let currElem = this.head;
			if (currElem === elem && currElem === this.tail) {
				// if list has length 1 and element is found
				// set head and tail to null
				this.head = null;
				this.tail = null;
				return true;
			} else if (currElem === elem) {
				// found element is head, list is longer than 1
				// set head pointer to next
				this.head = currElem.next
				return true;
			}
			while (currElem !== this.tail) {
				// iterate through list until we find the
				// element or the end of the list
				if (currElem.next === elem) {
					if (this.tail === elem) {
						// if element is tail, remove
						// and set tail pointer
						this.tail = currElem;
						currElem.setNext(null);
						return true;
					}
					// found element is not tail, remove
					// and keep reference to the list
					let next = currElem.next.next;
					currElem.setNext(next);
					return true;
				}
				currElem = currElem.next;
			}
		}
		// return false if the element is not found
		return false;
	}

	/**
	 * Inserts an element after an existing element in a linked list
	 * @param {Element} elem - the element to insert after
	 * @param {any} data - the data to insert
	 * @returns {boolean} - success or failure of operation
	 */
	insertAfter(elem, data) {
		// early return for empty list or undef. elem
		if (!this.head || !elem) return false;
		const insertElem = new Element(data);

		// check if head elem
		if (this.head === elem) {
			insertElem.next = this.head.next;
			this.head.next = insertElem;
			return true;
		} else {
			let currElem = this.head;

			// iterate through until we find the element or
			// find the end of the list
			while (currElem !== elem && currElem.next !== null) {
				currElem = currElem.next;
				if (currElem === elem) {
					insertElem.next = currElem.next;
					currElem.next = insertElem;
					return true;
				}
			}
			return false;
		}

	}

}

module.exports = LinkedList;
