import { Board } from "../board/Board";

export type stateType = {
  boards?: Board[];
};

export type actionType = {
  type: string;
  [propName: string]: any;
};
