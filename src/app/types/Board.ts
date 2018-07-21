export class Board {
  id: number;
  title: string;
  lanes: object;
  path: string;
}

export class Boards {
  [param: string]: Board;
}
