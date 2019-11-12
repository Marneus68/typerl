export abstract class AGenerable {

  protected generated: boolean;

  public get Generated(): boolean {
    return this.generated;
  }
  public set Generated(value: boolean) {
    if (value > this.generated)
      this.generated = value;
  }
}