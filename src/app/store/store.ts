import { Board } from "../types";

export type stateType = {
  boards?: Board[];
};

export type actionType = {
  type: string;
  [propName: string]: any;
};
