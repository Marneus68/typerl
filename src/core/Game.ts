import { GameEvent } from "./GameEvent";
import { Context } from './Context';

export class Game {
  protected started: boolean = false;

  public get Started(): boolean {
    return this.started;
  }

  public Start(context:Context): void {
    if (!this.started) {
      this.OnStart?.Invoke(context);
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
