import Fighter from './Fighter';

interface SimpleFighter extends Pick<Fighter,
'lifePoints' | 'strength' | 'receiveDamage'> {
  attack(enemy: SimpleFighter): void,
}

export default SimpleFighter;