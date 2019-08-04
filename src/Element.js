'use strict'

class Element {
	constructor(data) {
		this.value = data;
		this.next = null;
	}

	/**
	 * Accepts data, sets value property
	 * 
	 * @param {any} data 
	 * 
	 * @returns {Element}
	 */
	setValue(data) {
		this.value = data;
		return this;
	}

	/**
	 * Accepts an Element, sets next property 
	 * 
	 * @param {Element} elem 
	 * 
	 * @returns {Element}
	 */
	setNext(elem) {
		this.next = elem;
		return this;
	}
}

module.exports = Element;
