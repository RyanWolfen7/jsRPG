import CharClass from '../class.js'

const BONUS =  {
  str: 1, dex: 1, const:1,
  char: 0, wis: 0, int: 0
};

class Fighter extends CharClass {
  constructor(props) {
    super(props);

    this.name = "Fighter",
    this.bonus = BONUS
  }

// #### SKILLS #####
// #################
  simpleFirstAid(target) {
    return target += Math.floor(Math.random() * 5) + 3
  }
}

export default Fighter;
