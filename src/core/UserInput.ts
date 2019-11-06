import { Direction } from './Direction';
import { Intent } from './Intent';
import { AEntity } from './AEntity';
import { UserData } from './UserData';

export class UserInput extends UserData {
  protected intent:Intent;
  protected parameter:Direction|AEntity|null;

  get Intent():Intent { return this.intent; };
  get Parameter():Direction|AEntity|null { return this.parameter; };

  public constructor(intent:Intent = Intent.WAIT, parameter:Direction|AEntity|null = null) {
    super();
    this.intent = intent;
    this.parameter = parameter;
  }
}
