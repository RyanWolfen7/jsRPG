import CharClass from '../class.js'

class Fighter extends CharClass {
  constructor(props) {
    super(props);

    this.name = "Fighter",
    this.bonus = {
      str: 1, dex: 1, const:1,
      char: 0, wis: 0, int: 0 
     }
  }
}

export default Fighter;
