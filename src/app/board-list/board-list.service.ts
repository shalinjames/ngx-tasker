import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Board, Boards } from "../board/Board";
import { generateEndPoint } from "../common/utils";

@Injectable({
  providedIn: "root"
})
export class BoardListService {
  constructor(private httpCli: HttpClient) {}

  public getBoards(): Observable<Boards> {
    return this.httpCli.get<Boards>(generateEndPoint("boards"));
  }
}
