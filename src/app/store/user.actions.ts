export class SetInitialUserState {
  static readonly type = "[User] set initial state";
  //constructor(public state: Object) {}
}

export class SelectBoard {
  static readonly type = "[User] Set a board id to selected board";
  constructor(public selectedBoardId: string) {}
}
