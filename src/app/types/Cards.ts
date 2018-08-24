export class Card {
  title: string;
  belongTo: string;
}

export class Cards {
  [param: string]: Card;
}
