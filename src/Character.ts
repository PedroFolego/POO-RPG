import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import { Elf } from './Races';
import Race from './Races/Race';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  receiveDamage(attackPoints: number) {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter | Fighter) {
    enemy.receiveDamage(this._strength);
  }

  levelUp() {
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._dexterity += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter) {
    console.log(enemy, this);
  }

  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  get race() {
    return this._race;
  }

  get archetype() {
    return this._archetype;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  get defense() {
    return this._defense;
  }

  get energy() {
    const energyCharacter = { ...this._energy };
    return energyCharacter;
  }
}