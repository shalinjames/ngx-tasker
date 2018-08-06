import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Board, Boards, List } from "../../types";
import { generateEndPoint } from "../../common/utils";

@Injectable({
  providedIn: "root"
})
export class BoardListService {
  constructor(private httpCli: HttpClient) {}

  public getBoards(): Observable<Boards> {
    return this.httpCli.get<Boards>(generateEndPoint("boards"));
  }

  public getList(): Observable<List> {
    return this.httpCli.get<List>(generateEndPoint("list"));
  }

  public getTaskerByUser(userId: string): Observable<any> {
    return this.httpCli.get<any>(generateEndPoint("tasker"));
  }
}
