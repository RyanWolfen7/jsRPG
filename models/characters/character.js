import CharClass from './class.js'
import Race from './race.js'

const DEFAULT_STATS = {
  str: 12, dex: 12, const: 12,
  char: 12, wis: 12, int: 12
};

const DEFAULT_LEVEL = 1;
const DEFAULT_XP = {max: 100, current: 0};
const DEFAULT_XP_INCREMENT = 50;
const STAT_MULTIPLIER = 3;
const STAT_DIVISOR = 3;

class Character {
  constructor(name, race, cClass, stats = DEFAULT_STATS) {
        this.name    = name,
        this.race    = race,
        this.cClass  = cClass,
        this.stats   = this.addBonus(stats),
        this.level   = DEFAULT_LEVEL,
        this.xp      = this.addXP(),
        this.health  = this.addHP(),
        this.magic   = this.addMagic(),
        this.stamina = this.addStamina()
  }

  addHP() {
    var hp = {
      max    :    this.stats.const * STAT_MULTIPLIER,
      current:    this.stats.const * STAT_MULTIPLIER
    };
    if (this.race.coreModifiers != undefined) {
      hp.max     += this.race.coreModifiers.health;
      hp.current += this.race.coreModifiers.health;
    }
    return hp;
  }

  addMagic() {
    var mp = {
      max    :    this.stats.wis + this.stats.int,
      current:    this.stats.str+ this.stats.int
    };
    if (this.race.coreModifiers != undefined) {
      mp.max     += this.race.coreModifiers.magic;
      mp.current += this.race.coreModifiers.magic;
    }
    return mp;
  }

  addStamina() {
    var stm = {
      max    :    this.stats.dex * STAT_MULTIPLIER,
      current:    this.stats.dex * STAT_MULTIPLIER
    };
    if (this.race.coreModifiers != undefined) {
      stm.max     += this.race.coreModifiers.stamina;
      stm.current += this.race.coreModifiers.stamina;
    }
    return stm;
  }

  addXP() {
    var xp = Object.assign({}, DEFAULT_XP)
    if (this.race.coreModifiers != undefined) {
      xp.max += this.race.coreModifiers.xp;
    }
    return xp;
  }

  gainXP(value) {
    this.xp.current += value;
    if(this.xp.current >= this.xp.max) {
      this.levelUpXP();
      this.levelUpHP();
      this.levelUpStamina();
      this.levelUpMagic();
      this.level += DEFAULT_LEVEL;
    }
    return
  }



  // Refactored Functions

  addBonus(input) {
    var stats = Object.assign({}, input)
    // Class Bonus
    if (this.cClass instanceof CharClass) {
      stats.str   += this.cClass.bonus.str
      stats.dex   += this.cClass.bonus.dex
      stats.const += this.cClass.bonus.const
      stats.char  += this.cClass.bonus.char
      stats.wis   += this.cClass.bonus.wis
      stats.int   += this.cClass.bonus.int
    }
    // Race Bonus
    else if (this.race instanceof Race) {
      stats.str   += this.race.statBonus.str
      stats.dex   += this.race.statBonus.dex
      stats.const += this.race.statBonus.const
      stats.char  += this.race.statBonus.char
      stats.wis   += this.race.statBonus.wis
      stats.int   += this.race.statBonus.int
    }
    return stats
  }

  levelUpXP() {
    this.xp.current      -= this.xp.max;
    this.xp.max          += this.xp.max + DEFAULT_XP_INCREMENT;
  }

  levelUpHP() {
    this.health.max      += this.stats.const/STAT_DIVISOR + this.level
    this.health.current  += this.stats.const/STAT_DIVISOR + this.level
  }

  levelUpStamina() {
    this.stamina.max     += this.stats.dex/STAT_DIVISOR + this.level
    this.stamina.current += this.stats.dex/STAT_DIVISOR + this.level
  }

  levelUpMagic() {
    this.magic.max       += this.stats.int/STAT_DIVISOR + this.stats.wis/STAT_DIVISOR
    this.magic.current   += this.stats.int/STAT_DIVISOR + this.stats.wis/STAT_DIVISOR
  }

}

export default Character;
