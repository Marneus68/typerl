import { AEntity } from '../AEntity';
import { UserInput } from '../UserInput';

export class Level extends AEntity {

  public Step(userInput:UserInput) {
    console.log("Time passes in " + this.Name);
    super.Step(userInput);
  }
}
