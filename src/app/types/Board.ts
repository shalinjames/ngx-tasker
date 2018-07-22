export class Board {
  id: string;
  title: string;
  lanes: object;
  path: string;
}

export class Boards {
  [param: string]: Board;
}
