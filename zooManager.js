class Animal {
    constructor(name, species) {
      this.name = name;
      this.species = species;
    }
  
    speak() {
      return "Animal sound";
    }
  }
  
  class Mammal extends Animal {
    giveBirth() {
      return `${this.name} the ${this.species} mammal has given birth`;
    }
  }
  
  class Bird extends Animal {
    constructor(name, species, wingspan) {
      super(name, species);
      this.wingspan = wingspan;
    }
  }
  
  class Reptile extends Animal {
    baskInSun() {
      return `${this.name} the ${this.species} reptile is basking in the sun`;
    }
  }
  
  class Primate extends Mammal {
    climbTrees() {
      return `${this.name} the ${this.species} primate is climbing trees`;
    }
  }
  
  class Marsupial extends Mammal {
    carryBaby() {
      return `${this.name} the ${this.species} marsupial is carrying its baby`;
    }
  }
  
  class Aviary {
    constructor() {
      this.birds = [];
    }
  }
  
  class ReptileEnclosure {
    constructor() {
      this.reptiles = [];
    }
  }
  
  module.exports = {
    Animal,
    Mammal,
    Bird,
    Reptile,
    Primate,
    Marsupial,
    Aviary,
    ReptileEnclosure,
  };
  