import { InputHandler } from './core/InputHandler';
import { Game } from './core/Game';
import { Context } from './core/Context';

let game:Game = new Game();

function goToMenu(context:Context): void {
  console.log("Main Menu: Press N to start a new game...")
  if (context.InputHandler !== undefined && context.InputHandler !== null) {
    context.InputHandler.NCommand = {
      Invoke () {
        game.Start(context);
      }
    };
  }
}

function main(): void {
  const context:Context = new Context();
  context.InputHandler = new InputHandler();
  context.GameInstance = game;
  goToMenu(context);
  game.OnStop.Register((context) => { goToMenu(context); });
}

main();
