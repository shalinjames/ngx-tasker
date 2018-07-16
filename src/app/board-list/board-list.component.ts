import { Component, OnInit } from "@angular/core";

//import { StoreService } from "../store/store.service";
import { Store, Select } from "@ngxs/store";
import { BoardState } from "../store/board.state";
import { stateType } from "../store/store";
import { Observable } from "../../../node_modules/rxjs";

@Component({
  selector: "app-board-list",
  templateUrl: "./board-list.component.html",
  styleUrls: ["./board-list.component.css"]
})
export class BoardListComponent implements OnInit {
  @Select(BoardState.getBoards) boards$: Observable<any>;
  constructor() {}
  public keys = Object.keys;

  // private getBoards() {
  //   this.storeService.store.subscribe((state: stateType) => {
  //     this.boards = state.boards;
  //   });
  // }
  ngOnInit() {
    //this.boards$.subscribe(boards => console.log("ngOnInit", boards));
    //this.getBoards();
  }
}
