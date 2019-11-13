import { Id } from "./Id";

export class InstanceId implements Id {

  protected static current: number = 0;

  public static GetNew(): number {
    return InstanceId.current++;
  }

  public static SetCurrent(current: number) {
    if (current > this.current)
      this.current = current;
  }
}
