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
    this.xp = DEFAULT_XP,
    this.health = this.addHP(),
    this.magic = this.addMagic(),
    this.stamina = this.addStamina()
  }

  addHP() {
    var hp = {
      max    :    this.stats.const * 3,
      current:    this.stats.const * 3
    };
    return hp;
  }

  addMagic() {
    var mp = {
      max    :    this.stats.wis + this.stats.int,
      current:    this.stats.str+ this.stats.int
    };
    return mp;
  }

  addStamina() {
    var stm = {
      max    :    this.stats.dex * 3,
      current:    this.stats.dex * 3
    };
    return stm;
  }

  gainXP(value) {
    this.xp.current += value;
    if(this.xp.current >= this.xp.max) {
      this.xp.current -= this.xp.max;
      this.xp.max += this.xp.max + 50;
      this.health.max += this.stats.const/3 + this.level
      this.health.current += this.stats.const/3 + this.level
      this.stamina.max += this.stats.dex/3 + this.level
      this.stamina.current += this.stats.dex/3 + this.level
      this.magic.max += this.stats.int/3 + this.stats.wis/3
      this.magic.current += this.stats.int/3 + this.stats.wis/3
      this.level += 1;
    }
    return
  }

}

export default Character;
