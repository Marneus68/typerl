import { AEntity } from '../AEntity';
import { UserInput } from '../UserInput';

export class Level extends AEntity {

  protected generated: boolean;
  public get Generated(): boolean { return this.generated; }
  public set Generated(value: boolean) { this.generated = value; }

  public Step(userInput:UserInput) {
    console.log("Time passes in " + this.Name);
    super.Step(userInput);
  }
}