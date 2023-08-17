const {
    Animal,
    Mammal,
    Bird,
    Reptile,
    Primate,
    Marsupial,
    Aviary,
    ReptileEnclosure,
  } = require('./zooManager');
  
  describe('Animal Class', () => {
    const animal = new Animal('Lion', 'Mammal');
  
    test('should have name and species attributes', () => {
      expect(animal.name).toBe('Lion');
      expect(animal.species).toBe('Mammal');
    });
  
    test('speak method should return "Animal sound"', () => {
      expect(animal.speak()).toBe('Animal sound');
    });
  });
  
  describe('Mammal Class', () => {
    const mammal = new Mammal('Elephant', 'Mammal');
  
    test('giveBirth method should return a message', () => {
      expect(mammal.giveBirth()).toBe('Elephant the Mammal mammal has given birth');
    });
  });
  
  describe('Bird Class', () => {
    const bird = new Bird('Eagle', 'Bird', 2);
  
    test('should have wingspan attribute', () => {
      expect(bird.wingspan).toBe(2);
    });
  });
  
  describe('Reptile Class', () => {
    const reptile = new Reptile('Snake', 'Reptile');
  
    test('baskInSun method should return a message', () => {
      expect(reptile.baskInSun()).toBe('Snake the Reptile reptile is basking in the sun');
    });
  });
  
  describe('Primate Class', () => {
    const primate = new Primate('Monkey', 'Primate');
  
    test('climbTrees method should return a message', () => {
      expect(primate.climbTrees()).toBe('Monkey the Primate primate is climbing trees');
    });
  });
  
  describe('Marsupial Class', () => {
    const marsupial = new Marsupial('Kangaroo', 'Marsupial');
  
    test('carryBaby method should return a message', () => {
      expect(marsupial.carryBaby()).toBe('Kangaroo the Marsupial marsupial is carrying its baby');
    });
  });
  
  describe('Aviary Class', () => {
    const aviary = new Aviary();
  
    test('should have birds attribute as an array', () => {
      expect(Array.isArray(aviary.birds)).toBe(true);
    });
  });
  
  describe('ReptileEnclosure Class', () => {
    const reptileEnclosure = new ReptileEnclosure();
  
    test('should have reptiles attribute as an array', () => {
      expect(Array.isArray(reptileEnclosure.reptiles)).toBe(true);
    });
  });
  