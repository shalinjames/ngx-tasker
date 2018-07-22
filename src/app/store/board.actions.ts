import { Board } from "../types";

export class AddBoard {
  static readonly type = "[Boards] AddBoard";
  constructor(public name: string) {}
}

export class SelectBoard {
  static readonly type = "[Boards] Set selected board";
  constructor(public selectedBoardId: string) {}
}
