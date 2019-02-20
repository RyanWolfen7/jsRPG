import Character from '../../../models/characters/character.js';
import Fighter from '../../../models/characters/classes/fighter.js';

describe('Character load test', function() {
  describe('Classes added', function() {
    describe('Fighter', function() {
      let fighter = new Fighter('skills');
      let character = new Character("Ryan", "Human", fighter);

      it('should load Name, Race, and fighter', function() {
        expect(character.name).to.eql('Ryan');
        expect(character.race).to.eql('Human');
        expect(character.cClass).to.be.instanceOf(Fighter);
      })

      it('should be able to load all of the fighter constructor', function() {
        expect(character.cClass.name).to.eql('Fighter');
        expect(character.cClass.bonus).to.eql( {
          str: 1, dex: 1, const:1,
          char: 0, wis: 0, int: 0
         });
      })

      it('should add bonus to character', function() {
        expect(character.stats.str).to.eql(13)
        expect(character.stats.dex).to.eql(13)
        expect(character.stats.const).to.eql(13)
        expect(character.stats.char).to.eql(12)
        expect(character.stats.wis).to.eql(12)
        expect(character.stats.int).to.eql(12)
      })
    })
  })
})
