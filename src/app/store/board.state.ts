import { State, Action, StateContext, NgxsOnInit, Selector } from "@ngxs/store";
import uuidv4 from "uuid/v4";

import { Board, Boards } from "../types";
import {
  AddBoard,
  SelectBoard,
  UpdateListTitle,
  UpdateBoardTitle,
  AddListType
} from "./board.actions";
import { BoardListService } from "../webservices/boardlist/board-list.service";
import { UsersService } from "../webservices/users/users.service";

export class BoardStateModel {
  boards: Boards;
  user: {
    boards: Array<number>;
  };
  selectedboardId: string;
}

@State<BoardStateModel>({
  name: "boardState",
  defaults: {
    boards: {},
    user: {
      boards: []
    },
    selectedboardId: null
  }
})
export class BoardState implements NgxsOnInit {
  constructor(
    private boardListSer: BoardListService,
    private userService: UsersService
  ) {}

  ngxsOnInit(ctx: StateContext<BoardStateModel>) {
    const state = ctx.getState();
    this.boardListSer.getBoards().subscribe(boards => {
      ctx.setState({
        ...state,
        boards
      });
    });

    this.userService.get().subscribe(user => {
      ctx.patchState({ user });
    });
  }

  @Selector()
  static getBoards(state: BoardStateModel) {
    const boards = {};
    state.user.boards.map(board => {
      boards[board] = state.boards[board];
    });
    return boards;
  }
  @Action(AddBoard)
  addBoard(ctx: StateContext<BoardStateModel>, action: AddBoard) {
    const state = ctx.getState();
    const id = uuidv4();
    ctx.patchState({
      boards: {
        ...state.boards,
        [id]: { id, title: action.name, lanes: [], path: id }
      },
      user: {
        ...state.user,
        boards: [...state.user.boards, id]
      }
    });
  }

  @Action(SelectBoard)
  selectBoard(
    { getState, patchState }: StateContext<BoardStateModel>,
    action: SelectBoard
  ) {
    const state = getState();
    patchState({
      selectedboardId: action.selectedBoardId
    });
  }

  @Selector()
  static getSelectedBoard(state: BoardStateModel) {
    return state.boards[state.selectedboardId];
  }
  @Action(UpdateListTitle)
  setListTitle(
    { getState, patchState }: StateContext<BoardStateModel>,
    action: UpdateListTitle
  ) {
    const state = getState();
    const selectedBoard = state.boards[state.selectedboardId];
    const selectedList = state.boards[state.selectedboardId].list;
    patchState({
      boards: {
        ...state.boards,
        [state.selectedboardId]: {
          ...selectedBoard,
          list: {
            ...selectedList,
            [action.listId]: {
              title: action.title
            }
          }
        }
      }
    });
  }

  @Action(UpdateBoardTitle)
  setBoardTItle(
    { getState, patchState }: StateContext<BoardStateModel>,
    action: UpdateBoardTitle
  ) {
    const state = getState();
    const selectedBoard = state.boards[state.selectedboardId];
    patchState({
      boards: {
        ...state.boards,
        [state.selectedboardId]: {
          ...selectedBoard,
          title: action.title
        }
      }
    });
  }
  @Action(AddListType)
  addListType(
    { getState, patchState }: StateContext<BoardStateModel>,
    action: AddListType
  ) {
    const state = getState();
    const selectedBoard = state.boards[state.selectedboardId];
    const id = uuidv4();
    patchState({
      boards: {
        ...state.boards,
        [state.selectedboardId]: {
          ...selectedBoard,
          list: {
            ...selectedBoard.list,
            [id]: {
              title: action.title
            }
          }
        }
      }
    });
  }
}
