import { Component, OnInit, Input } from "@angular/core";

import { ListEntry } from "../../types";
@Component({
  selector: "ngx-tasker-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  @Input() list: ListEntry;

  constructor() {}

  ngOnInit() {
    console.info(this.list);
  }
}
