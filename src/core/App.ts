import { AppState } from './AppState';
import { InitialAppState } from './states/InitialAppState';
import { Game } from './Game';

export class App {

  protected game:Game = new Game();
  protected currentState:AppState = new InitialAppState();

  public set Game(game:Game) {
    if (!this.game.Started)
      this.game = game;
  }

  public get Game():Game {
    return this.game;
  }

  public set CurrentState(state:AppState) {
    if (state !== undefined && state !== null) {
      this.currentState?.Leave();
      this.currentState = state;
      this.currentState.Enter();
    }
  }

  public get CurrentState():AppState {
    return this.currentState;
  }

  public Update() {
    this.currentState.Update();
  }
}