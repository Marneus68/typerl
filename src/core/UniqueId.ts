import { Id } from "./Id";

export class UniqueId implements Id {

  public static GetNew(): number {
    throw new Error("Method not implemented.");
  }
}
