import { InputHandler } from "./InputHandler";
import { vector2 } from "src/utils";
import { AEntity } from "./AEntity";
import { UserData } from "./UserData";

export interface Context extends UserData {
    InputHandler?:InputHandler;
    Selection?:string|vector2|AEntity;
    Source?:AEntity;
}