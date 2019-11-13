import { AppState } from './AppState';
import { InitAppState } from './states/InitAppState';
import { Game } from './Game';
import { InputHandler } from './InputHandler';
import { MenuAppState } from './states/MenuAppState';
import { GameAppState } from './states/GameAppState';

export enum StatusName {
  INIT = 0,
  MENU =  1,
  GAME = 2,
}

export class App {

  protected game:Game = new Game();
  protected currentState:AppState;

  protected inputHandler:InputHandler = new InputHandler();
  protected screen:Screen = new Screen();
  protected states = {
    0: new InitAppState(this),
    1: new MenuAppState(this),
    2: new GameAppState(this),
  };

  public constructor() {
    this.currentState = this.states[0];
  }

  public set Game(game:Game) {
    if (!this.game.Started)
      this.game = game;
  }

  public get Game():Game {
    return this.game;
  }

  public SetCurrentState(statusName:StatusName):void {
    if (this.states[statusName] !== undefined && this.states[statusName] !== null) {
      this.currentState?.Leave();
      this.currentState = this.states[statusName];
      this.currentState.Enter();
    }
  }

  public get CurrentState():AppState {
    return this.currentState;
  }

  public get InputHandler():InputHandler {
    return this.inputHandler;
  }

  public get Screen():Screen {
    return this.screen;
  }

  public Update() {
    this.currentState.Update();
  }
}