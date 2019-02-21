import Attack from '../../models/core/attack.js'

describe('Attack', function() {
  let attack = new Attack();

  describe('Damage', function() {
    it('Should lower current hp between 1 - 5', function() {
      var target = {max:100, current:100};
      attack.damage(target);
      expect(target.current).to.be.within(95,99);
    })
  })
})
