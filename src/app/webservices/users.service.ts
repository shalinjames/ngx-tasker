import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { generateEndPoint } from "../common/utils";

type UserType = {
  id: number;
  name: string;
  boards: Array<any>;
};

type Users = Array<UserType>;

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  public get(): Observable<UserType> {
    return this.httpClient.get<UserType>(generateEndPoint("users/1"));
  }
}
