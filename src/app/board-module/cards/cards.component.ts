import { Component, OnInit, Input } from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { Observable } from "rxjs";

import { CardState } from "../../store/cards.state";
import { Card, Cards } from "../../types";

@Component({
  selector: "ngxtasker-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"]
})
export class CardsComponent implements OnInit {
  @Input() listId: string;

  constructor(private store: Store) { }

  @Select(CardState.getCards)

  cards$: Observable<Cards>;

  public cards;

  saveCardTitle(newTitle) {
    console.log(newTitle);
  }

  ngOnInit() {
    this.cards$.subscribe(cards =>
      this.cards = Object.values(cards).filter(card => card.belongTo === this.listId)
    );
  }
}
