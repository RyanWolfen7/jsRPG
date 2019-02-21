import Human from '../../../../models/characters/races/human.js';

describe('Human', function() {
  let human = new Human();
  let steelEye = new Human("Steel Eye")
  let statBonus = {
    str: 0, dex: 0, const: 0,
    char: 2, wis: 0, int: 2
  }
  let coreModifiers = {
    health: 0, magic: 0,
    stamina: 0, xp: -20
  }

  describe('Constructor', function() {
    it('should have the name Human', function() {
      expect(human.name).to.eql('Human')
    })

    it('should have default subrace', function() {
      expect(human.subrace).to.eql("Standard")
    })

    it('should pass a subrace to human on init', function() {
      expect(steelEye.subrace).to.eql("Steel Eye")
    })

    it('should have the right stat bonus', function() {
      expect(human.statBonus).to.eql(statBonus)
    })

    it('should have the right modifiers', function() {
      expect(human.coreModifiers).to.eql(coreModifiers)
    })
  })
})
