import Human from '../../../../models/characters/races/human.js';

describe('Human', function() {
  let human = new Human();

  describe('Constructor', function() {
    it('Should have the name Human', function() {
      expect(human.name).to.eql('Human')
    })

    it('should have default subrace', function() {
      expect(human.subrace).to.eql("Standard")
    })
  })
})
