import { Context } from "./Context";

export type GameCallback = (context: Context) => void;

export class GameEvent {
  protected callbacks: GameCallback[] = [];

  public Invoke(context: Context) {
    this.callbacks.forEach(callback => {
      callback(context);
    });
  }

  public Register(callback: GameCallback) {
    if (this.callbacks.indexOf(callback) == -1)
      this.callbacks[callback.length] = callback;
  }

  public Unregister(callback: GameCallback) {
    let index: number;
    if ((index = this.callbacks.indexOf(callback)) > -1)
      this.callbacks.splice(index);
  }
}
