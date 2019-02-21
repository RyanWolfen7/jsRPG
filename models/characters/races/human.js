import Race from '../race.js';

class Human extends Race {
  constructor(subrace = "Standard") {
    super(subrace);

    this.name = 'Human'
  }
}

export default Human;
