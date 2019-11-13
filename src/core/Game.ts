import { Context } from "./Context";
import { GameEvent } from "./Event";

export class Game {

    public Start(context:Context):void {
        this.OnStart?.Invoke(context);
    }

    public Stop(context:Context):void {
        this.OnStop?.Invoke(context);
    }

    public OnStart:GameEvent;
    public OnStop:GameEvent;
}