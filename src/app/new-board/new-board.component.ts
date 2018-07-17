import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-new-board",
  templateUrl: "./new-board.component.html",
  styleUrls: ["./new-board.component.css"]
})
export class NewBoardComponent implements OnInit {
  constructor() {}
  public showNew = false;
  public toggleNew() {
    this.showNew = !this.showNew;
  }
  ngOnInit() {}
}
