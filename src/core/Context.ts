import { vector2 } from "src/utils";
import { Entity } from "./Entity";
import { UserData } from "./UserData";

export class Context extends UserData {
  Selection?: string | vector2 | Entity;
  Source?: Entity;
}
