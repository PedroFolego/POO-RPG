import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  static _raceInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._raceInstances += 1;
  }

  static createdRacesInstances() {
    return Orc._raceInstances;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}