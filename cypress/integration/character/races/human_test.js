import Human from '../../../../models/characters/races/human.js';

describe('Human', function() {
  let human = new Human();
  let steelEye = new Human("Steel Eye")

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
  })
})
