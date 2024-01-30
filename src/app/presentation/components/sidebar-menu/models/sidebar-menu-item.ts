export class SidebarMenuItem {
  private _icon: string;
  private _title: string;
  private _description: string;
  private _path: string;

  constructor(path: string, data: any) {
    this._path = path;
    this._icon = data.icon;
    this._title = data.title;
    this._description = data.description;
  }

  get path(): string {
    return this._path;
  }

  get icon(): string {
    return this._icon;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }
}
