import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";

import { ListEntry } from "../../../types";
import { UpdateListTitle } from "../../../store/board.actions";

@Component({
  selector: "ngx-tasker-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  @Input() list: ListEntry;
  @Input() id: string;

  public editTitle = false;

  constructor(private store: Store) {}

  saveTitle(newTitle) {
    this.store
      .dispatch(new UpdateListTitle(newTitle, this.id))
      .subscribe(_ => (this.editTitle = false));
  }

  toggleEditTitle() {
    this.editTitle = !this.editTitle;
  }

  ngOnInit() {
    console.log(this.list);
  }
}
