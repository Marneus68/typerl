import { Context } from "./Context";

export type GameCallback = (context: Context) => void;

export class GameEvent {
  protected callbacks: GameCallback[] = [];

  public Invoke(context: Context):void {
    this.callbacks.forEach(callback => {
      callback(context);
    });
  }

  public UnregisterAll():void {
    this.callbacks.splice(0, this.callbacks.length);
  }

  public Register(callback: GameCallback):void {
    if (this.callbacks.indexOf(callback) == -1)
      this.callbacks[callback.length] = callback;
  }

  public Unregister(callback: GameCallback):void {
    let index: number;
    if ((index = this.callbacks.indexOf(callback)) > -1)
      this.callbacks.splice(index);
  }
}
