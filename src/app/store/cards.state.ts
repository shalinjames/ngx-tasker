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

import { BoardListService } from "../webservices/boardlist/board-list.service";

export class CardStateModel {
  cards: Object;
}

@State<CardStateModel>({
  name: "cardState",
  defaults: {
    cards: {}
  }
})
export class CardState {
  constructor(private boardListSer: BoardListService, private store: Store) {}
  //@Select()
}
