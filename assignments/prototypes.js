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
CharacterStats.prototype = Object.create(GameObject.prototype);

function CharacterStats(attributes) {
  GameObject.call(this, attributes);
  this.healthPoints = attributes.healthPoints;
}


//method
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage`; 
}



//---------humanoid
Humanoid.prototype = Object.create(CharacterStats.prototype);
function Humanoid(attributes) {
  CharacterStats.call(this, attributes);
  this.team = attributes.team; 
  this.weapons = attributes.weapons;
  this.language = attributes.language; 
  
  this.attack = attributes.attack;
  this.strength = attributes.strength;
  this.defense = attributes.defense; 
  
}


//methods 
Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}`; 
}

Humanoid.prototype.damage = function() {
  return `${this.name} health = ${this.healthPoints}`;
}




//-----------Villain
Villain.prototype = Object.create(Humanoid.prototype);

function Villain(attributes) {
  Humanoid.call(this, attributes);
  
  this.damagePts = attributes.damagePts; 
  this.extraAttack = attributes.extraAttack;
  this.opponent = attributes.opponent;
}

//method

Villain.prototype.attacking = function () {
    this.opponent.healthPoints -= (this.damagePts + this.extraAttack); 
  return `${this.name} attacks ${this.opponent.name} with ${this.weapons} and deals out ${this.damagePts} damange with additional damage of ${this.extraAttack}`;
}


//-----------Hero

Hero.prototype = Object.create(Humanoid.prototype);


function Hero(attributes) {
  Humanoid.call(this, attributes);
  
  this.damagePts = attributes.damagePts; 
  this.counterstrikePts = attributes.counterstrikePts;
  this.opponent = attributes.opponent;
}


//method

Hero.prototype.counterstrike = function () {
  this.opponent.healthPoints -= this.counterstrikePts;
  return `${this.name} counterstrikes for ${this.counterstrikePts} damage`;
}

Hero.prototype.attacking = function () {
  this.opponent.healthPoints -= this.damagePts;
  return `${this.name} attacks ${this.opponent.name} with ${this.weapons} and deals out ${this.damagePts} damage`;
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
    healthPoints: 20,
    name: 'Frodo',
    counterstrikePts: 2,
    weapons: ['stick'],
    damagePts: 3,
  });
  
  const wizard = new Villain({
    healthPoints: 11,
    name: 'Saruman',
    extraAttack: 3,
    weapons: ['staff'],
    opponent: hobbit, 
    damagePts: 2,
  });

  hobbit.opponent = wizard; 
  // console.log(mage.createdAt); // Today's date
  // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.healthPoints); // 15
  // console.log(mage.name); // Bruce
  // console.log(swordsman.team); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  // console.log(mage.takeDamage()); // Bruce took damage.
  // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log(hobbit.damage());
console.log(wizard.damage());
console.log(hobbit.attacking());
console.log(wizard.damage());
console.log(wizard.attacking());
console.log(hobbit.damage());
console.log(hobbit.counterstrike());
console.log(wizard.damage());




  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  