import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    player: Fighter,
    protected monsters: SimpleFighter[],
  ) {
    super(player);
  }

  fight(): number {
    this.monsters.forEach((monster) => {
      this.player.attack(monster);
      monster.attack(this.player);
    });
    return super.fight();
  }
}