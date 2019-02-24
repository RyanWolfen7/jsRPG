import Race from '../race.js';

const STAT_BONUS = {
  str: 0, dex: 0, const: 0,
  char: 2, wis: 0, int: 2
}

const CORE_MODIFIERS = {
  health: 0, magic: 0,
  stamina: 0, xp: -20
}

class Human extends Race {
  constructor(subrace = "Standard") {
    super(subrace);

    this.name = 'Human',
    this.subrace = subrace,
    this.statBonus = Object.assign({}, STAT_BONUS),
    this.coreModifiers = Object.assign({}, CORE_MODIFIERS)
  }
}

export default Human;
