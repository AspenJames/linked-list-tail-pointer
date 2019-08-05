'use strict'

const Element = require('./Element');

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	/**
	 * Accepts data, appends data as an Element to the end of the list
	 * 
	 * @param {any} data 
	 * 
	 * @returns {LinkedList}
	 */
	append(data) {
		let elem = new Element(data);
		if (!this.head) {
			this.head = elem;
			this.tail = elem;
		} else {
			let currElem = this.head;
			while (currElem !== this.tail) {
				currElem = currElem.next;
			}
			currElem.setNext(elem);
			this.tail = elem;
		}
		return this;
	}

	/**
	 * Accepts data, prepends data as an Element to beginning of list
	 * 
	 * @param {any} data 
	 * 
	 * @returns {LinkedList}
	 */
	prepend(data) {
		let elem = new Element(data);
		if (!this.head) {
			this.head = elem;
			this.tail = elem;
		} else {
			elem.setNext(this.head);
			this.head = elem;
		}
		return this;
	}

	/**
	 * Accepts an Element, returns true for successful deletion, false otherwise
	 * 
	 * @param {Element} elem 
	 * 
	 * @returns {boolean}
	 */
	deleteElem(elem) {
		if (!this.head) {
			return false;
		} else {
			let currElem = this.head;
			if (currElem === elem && currElem === this.tail) {
				this.head = null;
				this.tail = null;
				return true;
			} else if (currElem === elem) {
				this.head = currElem.next
				return true;
			}
			while (currElem !== this.tail) {
				if (currElem.next === elem) {
					if (this.tail === elem) {
						this.tail = currElem;
						currElem.setNext(null);
						return true;
					}
					let next = currElem.next.next;
					currElem.setNext(next);
					return true;
				}
				currElem = currElem.next;
			}
		}
		console.log('at Func end')
		return false;
	}

}

module.exports = LinkedList;
