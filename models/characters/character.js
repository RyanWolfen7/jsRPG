const DEFAULT_STATS = {
  str: 12, dex: 12, const: 12,
  char: 12, wis: 12, int: 12
};

const DEFAULT_LEVEL = 1;
const DEFAULT_XP = {max: 100, current: 0}

class Character {
  constructor(name, race, cClass, stats = DEFAULT_STATS) {
    this.name   = name,
    this.race   = race,
    this.cClass = cClass,
    this.stats  = stats,
    this.level = DEFAULT_LEVEL,
    this.xp = DEFAULT_XP
  }

}

export default Character;
