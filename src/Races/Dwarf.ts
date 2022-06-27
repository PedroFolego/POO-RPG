import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static _raceInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._raceInstances += 1;
  }

  static createdRacesInstances() {
    return Dwarf._raceInstances;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}