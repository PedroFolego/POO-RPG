import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static instances = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.instances += 1;
  }

  static createdArchetypeInstances() {
    return Necromancer.instances;
  }

  get energyType() {
    return this._energyType;
  }
}