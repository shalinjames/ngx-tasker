import { Component, OnInit, Input } from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { Observable } from "rxjs";

import { CardState } from "../../store/cards.state";
import { Card, Cards } from "../../types";
import { UpdateCardTitle } from "../../store/cards.action";

@Component({
  selector: "ngxtasker-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"]
})
export class CardsComponent implements OnInit {
  @Input()
  listId: string;

  constructor(private store: Store) { }

  @Select(CardState.getCards)
  cards$: Observable<Cards>;

  public cards = [];

  saveCardTitle(newTitle, card) {
    this.store.dispatch(new UpdateCardTitle(newTitle, card.id));
  }

  ngOnInit() {
    this.cards$.subscribe(cards => {
      this.cards = [];
      Object.keys(cards).map((cardId) => {
        if (cards[cardId].belongTo === this.listId) {
          this.cards.push({ ...cards[cardId], id: cardId })
        }
      })
    });
  }
}
