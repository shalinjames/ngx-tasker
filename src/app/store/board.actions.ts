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

export class AddListTypeToBoard {
  static readonly type = "[Board] Adds one more list type to the board";
  constructor(public title: string) {}
}
