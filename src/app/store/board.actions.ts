import { Board } from "../types";

export class AddBoard {
  static readonly type = "[Boards] AddBoard";
  constructor(public name: string) {}
}

export class SelectBoard {
  static readonly type = "[Boards] Set selected board";
  constructor(public selectedBoardId: string) {}
}

export class SetListTitle {
  static readonly type = "[List] Set list title";
  constructor(public title: string) {}
}
