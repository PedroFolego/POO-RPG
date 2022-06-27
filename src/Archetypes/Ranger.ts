import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  static instances = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.instances += 1;
  }

  static createdArchetypeInstances() {
    return Ranger.instances;
  }

  get energyType() {
    return this._energyType;
  }
}