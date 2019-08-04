'use strict'

const Element = require('../src/Element');
const expect = require('expect.js');

describe("Element", function() {
	it("can be created with a value", function() {
		const el = new Element(4);

		expect(el).to.be.an(Element);
	});

	describe("value property", function() {
		it("can return its value", function() {
			const el1 = new Element(4);
			const el2 = new Element("data");

			expect(el1.value).to.eql(4);
			expect(el2.value).to.eql("data");
		});

		it("can update its value", function() {
			const el = new Element(4);
			el.setValue("data");

			expect(el.value).to.eql("data");
		});
	});

	describe("next property", function() {
		it("defaults to null", function() {
			const el = new Element(4);
			
			expect(el.next).to.eql(null);
		});

		it("can be set to another Element", function() {
			const el1 = new Element(4);
			const el2 = new Element("data");

			el1.setNext(el2);

			expect(el1.next).to.eql(el2);
		});
	});
});
