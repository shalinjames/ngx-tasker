import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Board } from "../board/Board";

@Injectable({
  providedIn: "root"
})
export class BoardListService {
  public baseUrl = "http://localhost:3000";
  constructor(private httpCli: HttpClient) {}
  public requestEndPoint(endPoint) {
    return `${this.baseUrl}/${endPoint}`;
  }
  public getBoards(): Observable<Board[]> {
    return this.httpCli.get<Board[]>(this.requestEndPoint("boards"));
  }
}
