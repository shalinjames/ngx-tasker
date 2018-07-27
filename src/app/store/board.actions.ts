import { Board } from "../types";

export class AddBoard {
  static readonly type = "[Boards] AddBoard";
  constructor(public name: string) {}
}

export class SelectBoard {
  static readonly type = "[Boards] Set selected board";
  constructor(public selectedBoardId: string) {}
}

export class UpdateBoardTitle {
  static readonly type = "[Board] Set board title";
  constructor(public title: string) {}
}
export class UpdateListTitle {
  static readonly type = "[List] Update list title";
  constructor(public title: string, public listId: string) {}
}

export class AddListType {
  static readonly type = "[List] Add a new list";
  constructor(public title: string) {}
}
