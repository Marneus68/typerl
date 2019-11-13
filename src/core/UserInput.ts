import { Direction } from './Direction';
import { Intent } from './Intent';
import { Entity } from './Entity';
import { UserData } from './UserData';

export class UserInput extends UserData {
  protected intent:Intent;
  protected parameter:Direction|Entity|null;

  get Intent():Intent { return this.intent; };
  get Parameter():Direction|Entity|null { return this.parameter; };

  public constructor(intent:Intent = Intent.WAIT, parameter:Direction|Entity|null = null) {
    super();
    this.intent = intent;
    this.parameter = parameter;
  }
}
