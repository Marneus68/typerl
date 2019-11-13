import { Context } from "./Context";
import { GameEvent } from "./GameEvent";

export class Game {
  protected started: boolean = false;

  public get Started(): boolean {
    return this.started;
  }

  public Start(context: Context): void {
    if (!this.started) {
      context.GameInstance = this;
      this.OnStart?.Invoke(context);
      if (context.InputHandler !== undefined && context.InputHandler !== null) {
        context.InputHandler.EscapeCommand = {
          Invoke() {
            if (
              context.GameInstance !== undefined &&
              context.GameInstance !== null
            ) {
              context.GameInstance.Stop(context);
            }
          }
        };
      }
      console.log("Game Started.");
    }
  }

  public Stop(context: Context): void {
    if (this.started) {
      this.OnStop?.Invoke(context);
      console.log("Game Stopped.");
    }
  }

  public OnStart: GameEvent = new GameEvent();
  public OnStop: GameEvent = new GameEvent();
}
