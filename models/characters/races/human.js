import Race from '../race.js';

class Human extends Race {
  constructor(subrace = "Standard") {
    super(subrace);

    this.name = 'Human',
    this.subrace = subrace
  }
}

export default Human;
