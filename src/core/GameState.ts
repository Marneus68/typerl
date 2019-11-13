import { IGameEvent } from './IGameEvent';
import { IContext } from "./IContext";

export class GameState {

  protected static instance: GameState;

  public static get INSTANCE(): GameState {
    if (this.instance == undefined && this.instance == null) {
      this.instance = new GameState();
    }
    return this.instance;
  }

  protected constructor() {};

  protected running:boolean = false;

  public get Running():boolean { return this.running; }

  public Start(context:IContext) {
    context.InputHandler?.ClearAllCommands();
    // TODO: check context.Selection
    this.running = true;
  }

  public Stop(context:IContext) {
    context.InputHandler?.ClearAllCommands();
    // TODO: check context.Selection
    this.onStopped?.Invoke(context);
    this.running = false;
  }

  protected onStopped:IGameEvent;
  protected onStarted:IGameEvent;

  public set OnStopped(value:IGameEvent) {
    this.onStopped = value;
  }

  public get OnStopped():IGameEvent {
    return this.onStopped;
  }


}
