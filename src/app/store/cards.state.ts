import {
  State,
  Action,
  StateContext,
  NgxsOnInit,
  Selector,
  Store,
  Select
} from "@ngxs/store";
import produce from "immer";

import { Cards } from "../types";

export class CardStateModel {
  cards: Cards;
}

@State<CardStateModel>({
  name: "cards",
  defaults: {
    cards: {}
  }
})
export class CardState {
  constructor() {}
  @Selector()
  static getCards(state: CardStateModel) {
    return state.cards;
  }
}
