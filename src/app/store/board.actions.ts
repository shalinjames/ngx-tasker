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
  constructor(public title: string, public listId: string) {}
}

export class SetBoardTitle {
  static readonly type = "[Board] Set board title";
  constructor(public title: string) {}
}
