export class Board {
  id: string;
  title: string;
  list: Array<string>;
}

export class Boards {
  [param: string]: Board;
}
