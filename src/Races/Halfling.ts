import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static _raceInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._raceInstances += 1;
  }

  static createdRacesInstances() {
    return Halfling._raceInstances;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}