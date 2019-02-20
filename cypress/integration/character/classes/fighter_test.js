import Fighter from '../../../../models/characters/classes/fighter.js';

describe('Fighter Class', function() {
  let fighter = new Fighter('skill');
  let bonus = { str: 1, dex: 1, const:1 };

  describe('constructor', function() {
    it('should have the name fighter', function() {
      expect(fighter.name).to.eql("Fighter");
    })

    it('should have + 1 on str, dex, const', function() {
      expect(fighter.bonus).to.eql(bonus);
    })

    it('should have the skill string', function() {
      expect(fighter.skills).to.eql('skill')
    })
  })
})