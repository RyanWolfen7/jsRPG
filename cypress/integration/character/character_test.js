import Character from '../../../models/characters/character.js';

describe(Character, function() {
  let character = new Character("Name", "Race", "Class")
  let defaultStats = {
    str: 12, dex: 12, const: 12,
    char: 12, wis: 12, int: 12
  }

  describe("Constructor", function() {
    it("Has Name, Race, and Class", function() {
      expect(character.name).to.eql("Name");
      expect(character.race).to.eql("Race");
      expect(character.cClass).to.eql("Class");
    })

    it("Should have default stats", function() {
      expect(character.stats).to.eql(defaultStats);
    })
  })
})
