export class Board {
  id: string;
  title: string;
  list: object;
  path: string;
}

export class Boards {
  [param: string]: Board;
}
