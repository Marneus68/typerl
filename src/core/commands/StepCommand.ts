import { ICommand } from '../ICommand';
import { AEntity } from '../AEntity';
import { UserInput } from '../UserInput';
export class StepCommand implements ICommand {

  protected entity: AEntity;
  public constructor(entity: AEntity) {
    this.entity = entity;
  }
  public Invoke(): void {
    this.entity.Step(new UserInput());
  }
}