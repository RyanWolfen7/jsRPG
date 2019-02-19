import Character from '../../../models/characters/character.js';

describe(Character, function() {
  let character = new Character("Name", "Race", "Class")
  let defaultStats = {
    str: 12, dex: 12, const: 12,
    char: 12, wis: 12, int: 12
  }
  let stats = {
    str: 18, dex: 18, const: 16,
    char: 12, wis: 10, int: 10
  }
  let xp = { max: 100, current: 0}

  describe("Constructor", function() {
    it("Has Name, Race, and Class", function() {
      expect(character.name).to.eql("Name");
      expect(character.race).to.eql("Race");
      expect(character.cClass).to.eql("Class");
    })

    it("Should have default stats", function() {
      expect(character.stats).to.eql(defaultStats);
    })

    it("should accept new stats", function() {
      let nCharacter = new Character("Name", "Race", "Class", stats);
      expect(nCharacter.stats).to.eql(stats);
    })

    it('should initialize with a level of 1', function() {
      expect(character.level).to.eql(1);
    })

    it('should have a default xp current and max', function() {
      expect(character.xp).to.eql(xp);
    })

    it('should have default magic, health, and stamina', function() {
      expect(character.health.max).to.eql(36);
      expect(character.magic.max).to.eql(24);
      expect(character.stamina.max).to.eql(36);
    })

    describe('Leveling up', function() {
      it('should be able to increase xp', function() {
        character.gainXp(50);
        expect(character.xp.current).to.eql(50);
      })
    })
  })
})
