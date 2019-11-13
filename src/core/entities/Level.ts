import { Entity } from '../Entity';
import { UserInput } from '../UserInput';

export class Level extends Entity {

  public Step(userInput:UserInput) {
    console.log("Time passes in " + this.Name);
    super.Step(userInput);
  }
}
