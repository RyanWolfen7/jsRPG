const DEFAULT_STATS = {
  str: 12, dex: 12, const: 12,
  char: 12, wis: 12, int: 12
};

class Character {
  constructor(name, race, cClass, stats = DEFAULT_STATS) {
    this.name   = name,
    this.race   = race,
    this.cClass = cClass,
    this.stats  = stats
  }

}

export default Character;
