import { Id } from './Id';
import { UserInput } from './UserInput';
import { UserData } from './UserData';

export class AEntity extends UserData {

  protected id: number;
  protected name: string = "";
  protected parent: AEntity;

  get Id(): number {
    return this.id;
  }

  get Name(): string {
    return this.name;
  }

  get Parent(): AEntity {
    return this.parent;
  }

  protected children: AEntity[] = [];

  constructor(name:string = "") {
    super();
    this.name = name;
    this.id = Id.GetNew();
  }

  public AddChild(e: AEntity): void {
    e.parent = this;
    this.children.forEach(et => {
      if (et.Id === e.Id)
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