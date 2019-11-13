export class InstanceId {

  protected static current: number = 0;

  public static GetNew(): number {
    return InstanceId.current++;
  }

  public static SetCurrent(current: number) {
    if (current > this.current)
      this.current = current;
  }
}
