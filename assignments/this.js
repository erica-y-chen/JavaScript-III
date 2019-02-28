/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding: "the entire forest" it's referencing the entire console/window
* 2. Implicit Binding: references object literals, brings the scope from the entire forest to point to a single tree 
* 3. New Binding: This is used with constructor functions (functions meant to build other objects) and helps built objects inherit characteristics of the parent
* 4. Explicit Binding: Used with the "Call" and apply methods -- it stores the this keyword for later use 
*
* write out a code example of each explanation above


// Principle 1

// code example for Window Binding
console.log(this)

// Principle 2

// code example for Implicit Binding

const bread = {
    flour: "whole wheat";
    sugar: "granulated";
    bake: function(){
        return `This recipe needs ${this.flour} flour and ${this.sugar} sugar`
    }
}
console.log(bread.bake());

// Principle 3

// code example for New Binding

function Bread(type) {
    this.flour=flour; 
    this.bake = function() {
        console.log(`use ${flour} to make this bread);
    }
}


// Principle 4

// code example for Explicit Binding

const strawberry = new Fruit({
    color: "red", 
    type: "berry",
    season: "winter",
    water: "frequently",
})

function grow(howTo) {
    return `Remember to water ${this.water} and plant in ${season}`;
}