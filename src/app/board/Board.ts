export class Board {
  id: number;
  title: string;
  lanes: object;
}

export class Boards {
  [param: string]: Board;
}
