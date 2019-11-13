import { UserData } from './UserData';
export abstract class AGenerable extends UserData {

  protected generated: boolean;

  public get Generated(): boolean {
    return this.generated;
  }
  public set Generated(value: boolean) {
    if (value > this.generated)
      this.generated = value;
  }
}