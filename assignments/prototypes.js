/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  function GameObject(attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions.call(...dimensions);
    this.destroy = attributes.destroy; 
  }

  GameObject.prototype.destroy = function() {
      return (`${this.name} was removed from the game.`);
  }

  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
  === CharacterStats ===

  function CharacterStats(attributes) {
    GameObject.call(this, attributes);
    this.healthPoints = attributes.healthPoints
    this.takeDamage = attributes.takeDamage; 
  }

  CharacterStats.prototype.takeDamage = function() {
      return (`${this.name} took damage); 
  }

  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===

  function Humanoid(attributes) {
    CharacterStats.call(this, attributes);
    this.team = attributes.team; 
    this.weapons = attributes.weapons.call(...weapons);
    this.language = attributes.language; 
    this.greet = attributes.greet; 
  }


  Humanoid.prototype.greet = function () {
    return `${this.name} offers a greeting in ${this.language}`; 
  }
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
zs
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

/*
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
*/

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  //----------------gameobject
function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
}


//method
GameObject.prototype.destroy = function() {
    return `${this.name} was removed from the game.`;
  }

//-----------characterstats
function CharacterStats(attributes) {
  GameObject.call(this, attributes);
  this.healthPoints = attributes.healthPoints
}


//method
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage`; 
}

CharacterStats.prototype = Object.create(GameObject.prototype);

//---------humanoid
function Humanoid(attributes) {
  CharacterStats.call(this, attributes);
  GameObject.call(this,attributes);
  this.team = attributes.team; 
  this.weapons = attributes.weapons;
  this.language = attributes.language; 
  
  this.attack = attributes.attack;
  this.strength = attributes.strength;
  this.defense = attributes.defense; 
  this.opponent = attributes.opponent;
  
}


//methods 
Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}`; 
}

Humanoid.prototype.damage = function() {
  return `${this.name} health = ${this.healthpoints}`;
}


Humanoid.prototype = Object.create(CharacterStats.prototype);

//-----------Villain

function Villain(attributes) {
  GameObject.call(this, attributes);
  CharacterStats.call(this, attributes);
  Humanoid.call(this, attributes);
  
  this.damagePts = attributes.damagePts; 
  this.extraAttack = attributes.extraAttack;
}

Villain.prototype = Object.create(Humanoid.prototype);
//method

Villain.prototype.attack = function () {
  return `${this.name} attacks ${opponent} with ${weapons} and deals out ${this.damagePts} with additional damage of ${this.extraAttack}`;
  this.opponent.healthpoints -= (this.damage + this.extraAttack); 
}


//-----------Hero
function Hero(attributes) {
  GameObject.call(this, attributes);
  CharacterStats.call(this, attributes);
  Humanoid.call(this, attributes);
  
  this.damagePts = attributes.damagePts; 
  this.counterstrikePts = attributes.counterstrikePts;
}

//Hero.prototype = Object.create(Humanoid.prototype);

//method

Hero.prototype.counterstrike = function () {
  return `${this.name} counterstrikes for ${this.counterstrikePts} damage`;
  this.opponent.healthpoints -= this.counterstrikePts;
}

Hero.prototype.attack = function () {
  return `${this.name} attacks ${this.opponent} with ${this.weapons} and deals out ${this.damagePts}`;
  this.opponent.healthpoints -= this.damage; 
}


//--------------------
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const hobbit = new Hero({
    healthPoints: 15,
    name: 'Frodo',
    counterstrikePts: 2,
    weapons: ['stick'],
    damagePts: 3,
  });
  
  const wizard = new Villain({
    healthPoints: 11,
    name: 'Saruman',
    extraAttack: 3,
    opponent: hobbit, 
    damagePts: 2,
  });

  hobbit.opponent= wizard; 
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log(hobbit.name);
console.log(hobbit.opponent.name);
console.log(hobbit.counterstrike());
console.log(wizard.name);


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  