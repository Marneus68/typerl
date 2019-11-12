import { InputHandler } from "./InputHandler";
import { vector2 } from '../utils/vector2';
import { AEntity } from './AEntity';
import { GameState } from './GameState';

export interface IContext {
  GameState?:GameState;
  InputHandler?:InputHandler;
  Selection?:string|vector2|AEntity;
}