export class UpdateBoardList {
  static readonly type = "[List] Intersects the list to the board";
  constructor(public list: Array<string>) {}
}
