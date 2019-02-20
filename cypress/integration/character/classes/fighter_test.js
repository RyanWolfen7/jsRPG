import Fighter from '../../../../models/characters/classes/fighter.js';

describe('Fighter Class', function() {
  let fighter = new Fighter();
  let bonus = {
    str: 1, dex: 1, const: 1,
    char: 0, wis: 0, int: 0
   };

  describe('constructor', function() {
    it('should have the name fighter', function() {
      expect(fighter.name).to.eql("Fighter");
    })

    it('should have + 1 on str, dex, const', function() {
      expect(fighter.bonus).to.eql(bonus);
    })
  })

  describe('Simple First Aid', function() {
    it('should heal within 3-5', function() {
      var target = 0;
      expect(fighter.simpleFirstAid(target)).to.be.within(3,5)
    })
  })
})
