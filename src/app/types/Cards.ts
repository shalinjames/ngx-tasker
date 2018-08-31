export class Card {
  title: string;
  belongTo: string;
  desc?: string;
}

export class Cards {
  [param: string]: Card;
}
