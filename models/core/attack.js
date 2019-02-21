class Attack {

  damage(target) {
    target.current -= Math.floor(Math.random() * 5);
  }

}

export default Attack;
