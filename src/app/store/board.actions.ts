export class GetBoards {
  static readonly type = "GetBoards";
}

export class AddBoard {
  static readonly type = "AddBoard";
  constructor(public name: string) {}
}
