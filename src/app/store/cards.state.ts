import { State, Action, StateContext, Selector } from "@ngxs/store";
import produce from "immer";
import uuidv4 from "uuid/v4";

import { Cards } from "../types";
import { AddCard, UpdateCardTitle } from "./cards.action";

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

  @Action(AddCard)
  addCard(
    { getState, patchState }: StateContext<CardStateModel>,
    action: AddCard
  ) {
    const uniqueId = uuidv4();
    patchState(
      produce(getState(), draft => {
        draft.cards[uniqueId] = {
          title: action.title,
          belongTo: action.listId
        };
      })
    );
  }

  @Action(UpdateCardTitle)
  updateCardTitle(
    { getState, patchState }: StateContext<CardStateModel>,
    action: UpdateCardTitle
  ) {
    patchState(
      produce(getState(), draft => {
        draft.cards[action.cardId].title = action.title;
      })
    );
  }
}
