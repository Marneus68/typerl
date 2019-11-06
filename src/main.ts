import { InputHandler } from './core/InputHandler';
import { StepCommand } from './core/commands/StepCommand';
import { Overworld } from './core/entities/Overworld';
import { Dungeon } from './core/entities/Dungeon';
import { Character } from './core/entities/Character';

function main(): void {
  const world: Overworld = new Overworld("Land of the free");
  const dungeon1 = new Dungeon("Home of the burger");
  const dungeon2 = new Dungeon("Home of the fries");
  const gob1 = new Character("Goblin");
  const gob2 = new Character("Goblin");
  const gob3 = new Character("Goblin");
  const gob4 = new Character("Goblin");
  const gob5 = new Character("Goblin");
  const gob6 = new Character("Goblin");
  dungeon1.AddChild(gob1);
  dungeon1.AddChild(gob2);
  dungeon1.AddChild(gob3);
  dungeon1.AddChild(gob4);
  dungeon2.AddChild(gob5);
  dungeon2.AddChild(gob6);
  world.AddChild(dungeon1);
  world.AddChild(dungeon2);

  const ih = new InputHandler();
  ih.SpaceCommand = new StepCommand(world);
}

main();