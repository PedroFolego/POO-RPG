import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static _raceInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._raceInstances += 1;
  }

  static createdRacesInstances() {
    return Elf._raceInstances;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}