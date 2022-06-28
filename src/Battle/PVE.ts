import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    player: Fighter | Character,
    protected monsters: (Fighter | SimpleFighter | Character | Monster)[],
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