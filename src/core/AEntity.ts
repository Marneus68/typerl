import { InstanceId } from './InstanceId';
import { UserInput } from './UserInput';
import { AGenerable } from './AGenerable';

export class AEntity extends AGenerable {

  protected instanceId: number;
  protected staticId: number;
  protected name: string = "";
  protected parent: AEntity;

  public get InstanceId(): number {
    return this.instanceId;
  }

  public get StaticId(): number {
    return this.staticId;
  }

  public get Name(): string {
    return this.name;
  }

  public get Parent(): AEntity {
    return this.parent;
  }

  protected children: AEntity[] = [];

  constructor(name:string = "") {
    super();
    this.name = name;
    this.instanceId = InstanceId.GetNew();
  }

  public AddChild(e: AEntity): void {
    e.parent = this;
    this.children.forEach(et => {
      if (et.InstanceId === e.InstanceId)
        return;
    });
    this.children.push(e);
  }

  public RemoveChild(e: AEntity): void {
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