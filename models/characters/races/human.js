import Race from '../race.js';

const STAT_BONUS = {
  str: 0, dex: 0, const: 0,
  char: 2, wis: 0, int: 2
}

class Human extends Race {
  constructor(subrace = "Standard") {
    super(subrace);

    this.name = 'Human',
    this.subrace = subrace,
    this.statBonus = STAT_BONUS
  }
}

export default Human;
