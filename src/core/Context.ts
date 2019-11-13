import { InputHandler } from "./InputHandler";
import { vector2 } from "src/utils";
import { Entity } from "./Entity";
import { UserData } from "./UserData";
import { Screen } from "./Screen";
import { Game } from "./Game";

export class Context extends UserData {
  GameInstance: Game;
  Screen?: Screen;
  InputHandler?: InputHandler;
  Selection?: string | vector2 | Entity;
  Source?: Entity;
}
