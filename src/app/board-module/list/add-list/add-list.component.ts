import { Component } from "@angular/core";
import { Store } from "@ngxs/store";

import { AddListType } from "../../../store/board.actions";

@Component({
  selector: "ngx-tasker-add-list",
  templateUrl: "./add-list.component.html",
  styleUrls: ["./add-list.component.css"]
})
export class AddListComponent {
  constructor(private store: Store) {}
  private openTextInput: boolean = false;
  private;

  ngOnInit() {}

  saveNewListTitle(newTitle) {
    this.openTextInput = !this.openTextInput;
    this.store.dispatch(new AddListType(newTitle));
  }

  openNewListText() {
    this.openTextInput = !this.openTextInput;
  }

  isNewListEditClosed(isClosed) {
    console.log("isClosed", isClosed);
    if (isClosed) {
      this.openNewListText();
    }
  }
}
