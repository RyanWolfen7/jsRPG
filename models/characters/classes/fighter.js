import CharClass from '../class.js'

const BONUS =  {
  str: 1, dex: 1, const:1,
  char: 0, wis: 0, int: 0
};

class Fighter extends CharClass {
  constructor(props) {
    super(props);

    this.name = "Fighter",
    this.bonus = Object.assign({}, BONUS)
  }

// #### SKILLS #####
// #################
  simpleFirstAid(target) {
    target.current += Math.floor(Math.random() * 3) + 3;
    if(target.current > target.max) {target.current = target.max}
    return target
  }
}

export default Fighter;
