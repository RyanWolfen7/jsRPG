import Class from '../../../models/characters/class.js';

describe(cClass, function() {
  let cClass = new Class();

  describe('Constructor', function() {
    it('should have undefined name', function() {
      expect(cClass.name).to.eql(undefined)
    })

    it('should have undefined bonus', function() {
      expect(cClass.bonus).to.eql(undefined)
    })
  })
})
