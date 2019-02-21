import Character from '../../../models/characters/character.js';
import Fighter from '../../../models/characters/classes/fighter.js';
import Human from '../../../models/characters/races/human.js';

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

      it('should be able to heal target between 3-5', function() {
        var target = { max:100, current:95 };
        character.cClass.simpleFirstAid(target);
        expect(target.current).to.be.within(97,100)
      })

      it('should be able to heal target without exceeding max hp', function() {
        var target = { max:100, current:99 };
        character.cClass.simpleFirstAid(target);
        expect(target.current).to.eql(100);
      })
    })
  })

  describe('Races added', function() {
    describe('Human', function() {
      let human = new Character("Ryan", new Human(), "Fighter");

      it('should have an instance of Human in character race', function() {
        expect(human.race).to.be.instanceOf(Human);
      })

      it('should have a stat bonus in race', function() {
        expect(human.race.statBonus).to.eql({
          str: 0, dex: 0, const: 0,
          char: 2, wis: 0, int: 2
        })
      })

      it('should apply the stat bonus to the character', function() {
        expect(human.stats.str).to.eql(12)
        expect(human.stats.dex).to.eql(12)
        expect(human.stats.const).to.eql(12)
        expect(human.stats.char).to.eql(13)
        expect(human.stats.wis).to.eql(12)
        expect(human.stats.int).to.eql(13)
      })
    })
  })
})
