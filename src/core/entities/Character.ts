import { AEntity } from '../AEntity';
import { vector2 } from '../../utils/vector2';
import { Direction } from '../Direction';
import { Level } from './Level';
import { Cause } from '../Cause';
import { UserInput } from '../UserInput';

export class Character extends AEntity {

  protected position: vector2 = new vector2();
  public get Position(): vector2 { return this.position; }
  public set Position(value: vector2) { this.position = value }

  public Move(direction:Direction, speed:number, cause:Cause = Cause.NONE): void {
    console.log("Move: " + direction + " " + speed + " " + cause);
  }

  public Teleport(position:vector2, level:Level, cause:Cause = Cause.NONE) {
    console.log("Teleport: " + position + " " + level + " " + cause);
  }

  public Step(userInput:UserInput) {
    if (this.parent != null) {
      console.log(this.Name + " bustles in " + this.Parent.Name);
      super.Step(userInput);
    }
  }
}