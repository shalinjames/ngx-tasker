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
import { AppUserState } from "./app.user.state";

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

  //@Todo: https://github.com/ngxs/store/issues/386#issuecomment-390181710 dynamic @selector arguments for selecting the cards for a specific list
}
