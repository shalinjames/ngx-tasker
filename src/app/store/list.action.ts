export class UpdateBoardList {
  static readonly type = "[List] Intersects the list to the board";
  constructor(public list: Array<string>) {}
}

export class UpdateListTitle {
  static readonly type = "[List] Update list title";
  constructor(public title: string, public listId: string) {}
}

export class AddListType {
  static readonly type = "[List] Add a new list";
  constructor(public title: string) {}
}
