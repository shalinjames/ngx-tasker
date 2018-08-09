import { Component, OnInit, Input } from "@angular/core";
import { Store } from "@ngxs/store";

import { Card } from "../../types";

@Component({
  selector: "ngxtasker-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"]
})
export class CardsComponent implements OnInit {
  @Input() cardId: string;
  @Input() card: Card;
  constructor(private store: Store) {}

  saveCardTitle(newTitle) {
    console.log(newTitle);
  }

  ngOnInit() {}
}
