export class Id {

  protected static current: number = 0;

  public static GetNew(): number {
    return this.current++;
  }
}