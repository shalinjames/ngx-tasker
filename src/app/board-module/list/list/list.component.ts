import { Component, Input } from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { Observable } from "rxjs";

import { ListEntry, Cards } from "../../../types";
import { UpdateListTitle } from "../../../store/list.action";
import { CardState } from "../../../store/cards.state";

@Component({
  selector: "ngx-tasker-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent {
  @Input() list: ListEntry;
  @Input() id: string;

  public editTitle = false;

  @Select(CardState.getCards) cards$: Observable<Cards>;
  public cards = [];

  constructor(private store: Store) { }

  saveTitle(newTitle) {
    this.store
      .dispatch(new UpdateListTitle(newTitle, this.id))
      .subscribe(_ => (this.editTitle = false));
  }

  toggleEditTitle() {
    this.editTitle = !this.editTitle;
  }

}
