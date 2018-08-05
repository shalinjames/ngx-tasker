import { Selector, Action, State, StateContext } from "@ngxs/store";
import produce from "immer";

import { SelectBoard } from "./user.actions";

export class AppUserStateModel {
  selectedBoardId: string;
}

@State<AppUserStateModel>({
  name: "appuser",
  defaults: {
    selectedBoardId: ""
  }
})
export class AppUserState {
  @Selector()
  static getSelectedBoardId(state: AppUserStateModel) {
    return state.selectedBoardId;
  }

  @Action(SelectBoard)
  setSelectedBoard(
    { setState, getState }: StateContext<AppUserStateModel>,
    action: SelectBoard
  ) {
    setState({
      ...getState(),
      selectedBoardId: action.selectedBoardId
    });
  }
}
