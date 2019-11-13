import { InputHandler } from "./InputHandler";
import { vector2 } from "src/utils";
import { AEntity } from "./AEntity";
import { UserData } from "./UserData";
import { Screen } from "./Screen";
import { Game } from "./Game";

export class Context extends UserData {
  GameInstance: Game;
  Screen?: Screen;
  InputHandler?: InputHandler;
  Selection?: string | vector2 | AEntity;
  Source?: AEntity;
}
