import { InstanceId } from './InstanceId';
import { UserInput } from './UserInput';
import { AGenerable } from './AGenerable';

export class Entity extends AGenerable {

  protected instanceId: number;
  protected staticId: number;
  protected name: string = "";
  protected parent: Entity;

  public get InstanceId(): number {
    return this.instanceId;
  }

  public get StaticId(): number {
    return this.staticId;
  }

  public get Name(): string {
    return this.name;
  }

  public get Parent(): Entity {
    return this.parent;
  }

  protected children: Entity[] = [];

  constructor(name:string = "") {
    super();
    this.name = name;
    this.instanceId = InstanceId.GetNew();
  }

  public AddChild(e: Entity): void {
    e.parent = this;
    this.children.forEach(et => {
      if (et.InstanceId === e.InstanceId)
        return;
    });
    this.children.push(e);
  }

  public RemoveChild(e: Entity): void {
    //e.parent = undefined;
    var i = this.children.indexOf(e, 0);
    if (i > -1) this.children.splice(i, 1);
  }

  public Step(userInput:UserInput): void {
    this.children.forEach(e => {
      e.Step(userInput);
    });
  }
}