import Character from '../../../models/characters/character.js';

describe(Character, function() {
  let character = new Character("Name", "Race", "Class")

  describe("Constructor", function() {
    it("Has Name, Race, and Class", function() {
      expect(character.name).to.eql("Name");
      expect(character.race).to.eql("Race");
      expect(character.cClass).to.eql("Class");
    })
  })
})
