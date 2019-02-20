import Character from '../../../models/characters/character.js';
import Fighter from '../../../models/characters/classes/fighter.js';

describe('Character load test', function() {
  let fighter = new Fighter('skills');
  let character = new Character("Ryan", "Human", fighter);

  it('should load Name, Race, and fighter', function() {
    expect(character.name).to.eql('Ryan');
    expect(character.race).to.eql('Human');
    expect(character.cClass).to.be.instanceOf(Fighter);
  })

  it('should be able to load all of the fighter constructor', function() {
    expect(character.cClass.name).to.eql('Fighter');
    expect(character.cClass.bonus).to.eql( { str: 1, dex: 1, const:1 } );
  })
})
