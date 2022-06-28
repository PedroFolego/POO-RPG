import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(protected player0: Fighter, protected player1: Fighter) {
    super(player0);
  }

  fight(): number {
    this.player0.attack(this.player1);
    this.player1.attack(this.player0);
    return super.fight();
  }
}