export class Card {
  id: string;
  title: string;
  belongTo: string;
}

export class Cards {
  [param: string]: Card;
}
