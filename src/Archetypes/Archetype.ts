export default abstract class Archetyoe {
  private _special: number;
  private _cost: number;
  private _name:string;
  
  constructor(name: string) {
    this._special = 0;
    this._cost = 0;
    this._name = name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  get name(): string {
    return this._name;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): string;
}