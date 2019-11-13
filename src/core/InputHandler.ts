import { ICommand } from './ICommand';

export class InputHandler {

  public NCommand: ICommand|null = null;
  public HCommand: ICommand|null = null;
  public JCommand: ICommand|null = null;
  public KCommand: ICommand|null = null;
  public LCommand: ICommand|null = null;
  public SemicolonCommand: ICommand|null = null;
  public CommaCommand: ICommand|null = null;
  public UpCommand: ICommand|null = null;
  public DownCommand: ICommand|null = null;
  public LeftCommand: ICommand|null = null;
  public RightCommand: ICommand|null = null;
  public SpaceCommand: ICommand|null = null;
  public EscapeCommand: ICommand|null = null;

  protected onPress(event: KeyboardEvent) {
      switch (event.code) {
        case "KeyN":
          this.NCommand?.Invoke();
          break;
        case "KeyH":
          this.HCommand?.Invoke();
          break;
        case "KeyJ":
          this.JCommand?.Invoke();
          break;
        case "KeyK":
          this.KCommand?.Invoke();
          break;
        case "KeyL":
          this.LCommand?.Invoke();
          break;
        case "Semicolon":
          this.SemicolonCommand?.Invoke();
          break;
        case "Comma":
          this.CommaCommand?.Invoke();
          break;
        case "ArrowUp":
          this.UpCommand?.Invoke();
          break;
        case "ArrowDown":
          this.DownCommand?.Invoke();
          break;
        case "ArrowLeft":
          this.LeftCommand!.Invoke();
          break;
        case "ArrowRight":
          this.RightCommand?.Invoke();
          break;
        case "Space":
          this.SpaceCommand?.Invoke();
          break;
        case "Escape":
          this.EscapeCommand?.Invoke();
          break;
      }
  }

  public ClearAllCommands() {
    this.NCommand = null;
  }

  constructor() {
    document.addEventListener("keypress", (event) => { this.onPress(event); });
  }
}