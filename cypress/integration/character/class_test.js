import CharClass from '../../../models/characters/class.js';

describe('CharClass', function() {
  let charClass = new CharClass();

  describe('Constructor', function() {
    it('should have undefined name', function() {
      expect(charClass.name).to.eql(undefined);
    })

    it('should have undefined bonus', function() {
      expect(charClass.bonus).to.eql(undefined);
    })
  })
})
