import { ICommand } from '../ICommand';
import { Entity } from '../Entity';
import { UserInput } from '../UserInput';
export class StepCommand implements ICommand {

  protected entity: Entity;
  public constructor(entity: Entity) {
    this.entity = entity;
  }
  public Invoke(): void {
    this.entity.Step(new UserInput());
  }
}